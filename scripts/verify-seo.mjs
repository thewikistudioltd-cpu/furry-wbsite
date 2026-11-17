import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const root = new URL("../", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const out = join(root, "out");
const failures = [];

function read(relativePath) {
  const path = join(out, relativePath);
  if (!existsSync(path)) {
    failures.push(`Missing exported file: ${relativePath}`);
    return "";
  }
  return readFileSync(path, "utf8");
}

function expect(content, pattern, message) {
  if (!pattern.test(content)) failures.push(message);
}

function reject(content, pattern, message) {
  if (pattern.test(content)) failures.push(message);
}

const home = read("index.html");
const refSheet = read(join("furry-ref-sheet-commission", "index.html"));
const speciesHub = read(join("species", "index.html"));
const sitemap = read("sitemap.xml");
const robots = read("robots.txt");

expect(home, /<link rel="canonical" href="https:\/\/refpaw\.com\/"/, "Home canonical is not refpaw.com.");
expect(home, /<meta property="og:url" content="https:\/\/refpaw\.com\/"/, "Home is missing its Open Graph URL.");
expect(home, /"@type":"Organization"/, "Home is missing Organization JSON-LD.");
expect(refSheet, /"@type":"Service"/, "Ref sheet page is missing Service JSON-LD.");
expect(refSheet, /"@type":"BreadcrumbList"/, "Ref sheet page is missing BreadcrumbList JSON-LD.");
expect(speciesHub, /Fursona species guides and art commissions/, "Species index was not exported.");
expect(sitemap, /https:\/\/refpaw\.com\/species\//, "Sitemap is missing the species hub.");
reject(sitemap, /\/(start|queue|terms|brandbook)\//, "Sitemap contains a noindex utility route.");
reject(sitemap, /\/species\/(dragon|protogen)\//, "Sitemap contains a species page without matching portfolio work.");
expect(robots, /Sitemap: https:\/\/refpaw\.com\/sitemap\.xml/, "robots.txt points at the wrong sitemap.");
reject(robots, /Disallow:\s*\/\s*(?:\r?\n|$)/, "robots.txt blocks the entire site.");

for (const [name, html] of [
  ["home", home],
  ["ref sheet", refSheet],
]) {
  reject(html, /From \$\[/, `${name} contains a bracketed price in metadata or copy.`);
  reject(html, /mailto:(?:%5B|\[)/i, `${name} contains a bracketed mailto link.`);
  reject(html, /Replace this paragraph before launch|Confirm them in/, `${name} contains a developer placeholder.`);
}

if (failures.length) {
  console.error(`SEO verification failed (${failures.length}):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log("SEO verification passed.");
