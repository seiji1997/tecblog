import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

// Preserve unrelated edits in the shared Thoughts route.
const target = fileURLToPath(new URL('./src/pages/thoughts/[slug].astro', import.meta.url));
const original = readFileSync(target, 'utf8');
const filter = ".filter((thought) => thought.slug !== 'work-career')";
const before = 'return thoughts.map((thought) => ({';
const after = `return thoughts${filter}.map((thought) => ({`;

if (original.includes(filter)) {
  console.log('Work & Career route is already configured.');
} else if (original.split(before).length === 2) {
  writeFileSync(target, original.replace(before, after), 'utf8');
  console.log('Work & Career route configured. Other Thoughts content was preserved.');
} else {
  console.error('Thoughts route structure has changed. No file was overwritten.');
  console.error("Exclude the 'work-career' slug in getStaticPaths; see README_WORK_CAREER_UPDATE.md.");
  process.exitCode = 1;
}
