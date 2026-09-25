#!/usr/bin/env node

/**
 * Lightweight, offline validation for the docs site.
 *
 * Fumadocs turns each content/docs page into a /docs route. This check keeps
 * hand-written links honest without adding a second MDX toolchain or making
 * network requests during CI.
 */

import { readdir, readFile } from 'node:fs/promises';
import { extname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const contentRoot = join(root, 'content', 'docs');
const sourceRoots = [contentRoot, join(root, 'src')];
const extraFiles = [join(root, 'README.md')];
const contentExtensions = new Set(['.md', '.mdx']);
const sourceExtensions = new Set(['.md', '.mdx', '.ts', '.tsx', '.mjs']);

async function filesUnder(path) {
  const entries = await readdir(path, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (entry.name === 'node_modules' || entry.name === '.next' || entry.name === '.source') {
      continue;
    }

    const child = join(path, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await filesUnder(child)));
    } else {
      files.push(child);
    }
  }

  return files;
}

function routeForContent(path) {
  const relativePath = relative(contentRoot, path).replaceAll('\\', '/');
  const withoutExtension = relativePath.slice(0, -extname(relativePath).length);
  const segments = withoutExtension.split('/');

  if (segments.at(-1) === 'index') {
    segments.pop();
  }

  return `/docs/${segments.filter(Boolean).join('/')}`.replace(/\/$/, '');
}

function lineForOffset(text, offset) {
  return text.slice(0, offset).split('\n').length;
}

function cleanUrl(value) {
  return value
    .trim()
    .replace(/^<|>$/g, '')
    .replace(/^['"]|['"]$/g, '');
}

function collectUrls(text) {
  const urls = [];
  const markdownLink = /\]\(\s*<?([^\s)>]+)>?(?:\s+['"][^)]*)?\)/g;
  const htmlAttribute = /(?:href|src)\s*=\s*(['"])(.*?)\1/g;
  const javascriptAttribute = /(?:href|src)\s*:\s*(['"])(.*?)\1/g;

  for (const pattern of [markdownLink, htmlAttribute, javascriptAttribute]) {
    for (const match of text.matchAll(pattern)) {
      urls.push({ value: cleanUrl(match[1] ?? match[2]), offset: match.index });
    }
  }

  return urls;
}

function isInternalRoute(value) {
  return value.startsWith('/') && !value.startsWith('//');
}

function routeFromUrl(value) {
  try {
    const url = new URL(value, 'https://docs.invalid');
    return url.pathname.replace(/\/$/, '') || '/';
  } catch {
    return value.split(/[?#]/, 1)[0].replace(/\/$/, '') || '/';
  }
}

const contentFiles = (await filesUnder(contentRoot)).filter((path) =>
  contentExtensions.has(extname(path)),
);
const docsRoutes = new Set(contentFiles.map(routeForContent));
const appRoutes = new Set(['/', '/api/search', ...docsRoutes]);
const errors = [];

const files = [
  ...(await Promise.all(sourceRoots.map(filesUnder))).flat(),
  ...extraFiles,
].filter((path) => sourceExtensions.has(extname(path)));

for (const file of files) {
  const text = await readFile(file, 'utf8');
  for (const link of collectUrls(text)) {
    if (!isInternalRoute(link.value)) {
      continue;
    }

    const route = routeFromUrl(link.value);
    if (!appRoutes.has(route)) {
      errors.push(
        `${relative(root, file)}:${lineForOffset(text, link.offset)} -> ${link.value} (unknown route ${route})`,
      );
    }
  }
}

if (errors.length > 0) {
  console.error('Content/link validation failed:');
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exitCode = 1;
} else {
  console.log(`Content/link validation passed (${contentFiles.length} MDX pages, ${files.length} files checked).`);
}
