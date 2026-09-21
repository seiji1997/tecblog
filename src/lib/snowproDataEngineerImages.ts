import type { ImageMetadata } from 'astro';
import { lessons, type Lesson } from '../data/snowproDataEngineer';

// Imported at build time: absent images render an intentional placeholder.
// Add the exact filename from IMAGE_MANIFEST.csv, then rebuild. No route edits.
const files = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/snowflake/data-engineer/**/*.{png,webp,jpg,jpeg,avif}',
  { eager: true },
);
const imageMap = new Map<string, ImageMetadata>();
const extensions = ['png', 'webp', 'jpg', 'jpeg', 'avif'];
const expectedPaths = (lesson: Lesson) => extensions.map((ext) =>
  `/src/assets/snowflake/data-engineer/${lesson.imageFolder}/${lesson.imageBasename}.${ext}`,
);
for (const lesson of lessons) {
  const paths = expectedPaths(lesson);
  const matches = Object.entries(files).filter(([path]) => paths.includes(path));
  if (matches.length > 1) {
    throw new Error(`${lesson.id}: duplicate images. Keep one format per lesson.`);
  }
  if (matches[0]) imageMap.set(lesson.id, matches[0][1].default);
}
// Typos must not silently leave the corresponding lesson without its image.
for (const path of Object.keys(files)) {
  if (!lessons.some((lesson) => expectedPaths(lesson).includes(path))) {
    throw new Error(`Unknown DEA image filename: ${path}. See IMAGE_MANIFEST.csv.`);
  }
}
export const lessonImage = (lesson: Lesson) => imageMap.get(lesson.id);
export const imageCount = imageMap.size;
