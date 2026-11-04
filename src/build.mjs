import { build as esbuild } from 'esbuild';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { mkdir, writeFile, rm } from 'node:fs/promises';
import { LANGS, documentHtml, rootRedirectHtml } from './build-templates.mjs';
import { buildBlogAndSitemap } from './blog/build-blog.mjs';

const SRC = dirname(fileURLToPath(import.meta.url));
const DOCS = join(SRC, '..');

async function main() {
  const tmp = join(SRC, '.tmp');
  const outfile = join(tmp, 'page.mjs');

  await esbuild({
    entryPoints: [join(SRC, 'page.jsx')],
    bundle: true,
    format: 'esm',
    platform: 'node',
    external: ['react', 'react-dom'],
    jsx: 'transform',
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
    outfile,
    logLevel: 'warning',
  });

  const { LandingPage } = await import('file://' + outfile.replace(/\\/g, '/'));

  for (const lang of LANGS) {
    const body = ReactDOMServer.renderToStaticMarkup(React.createElement(LandingPage, { lang }));
    const dir = join(DOCS, lang);
    await mkdir(dir, { recursive: true });
    await writeFile(join(dir, 'index.html'), documentHtml(lang, body), 'utf8');
    console.log(`built /${lang}/index.html  (${body.length} bytes of body markup)`);
  }

  await writeFile(join(DOCS, 'index.html'), rootRedirectHtml(), 'utf8');
  console.log('built /index.html (redirect shell)');

  await buildBlogAndSitemap(DOCS);

  await rm(tmp, { recursive: true, force: true });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
