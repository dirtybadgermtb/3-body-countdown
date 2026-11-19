// Wraps page.html (the page body, as published to the hosted preview) into a standalone index.html.
import { readFileSync, writeFileSync } from 'node:fs';

const src = readFileSync(new URL('./page.html', import.meta.url), 'utf8');
const cut = src.indexOf('</style>') + '</style>'.length;
const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<style>html{box-sizing:border-box;padding:env(safe-area-inset-top,0px) 0 env(safe-area-inset-bottom,0px)}</style>
${src.slice(0, cut)}
</head>
<body>
${src.slice(cut).trim()}
</body>
</html>
`;
writeFileSync(new URL('./index.html', import.meta.url), html);
console.log('index.html written:', html.length, 'bytes');
