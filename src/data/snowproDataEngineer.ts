import source from './snowproDataEngineer.json';
import { diagrams as coreDiagrams } from './snowproCore';

export type DomainId = 'D1' | 'D2' | 'D3' | 'D4' | 'D5';
export interface Domain {
  id: DomainId; slug: string; title: string; label: string; weight: number;
  color: string; summary: string; delta: string; objectiveIds: string[];
}
export interface Objective {
  id: string; domain: DomainId; summary: string; topics: string[]; lessonIds: string[];
}
export interface Lesson {
  id: string; slug: string; domain: DomainId | 'MAP'; title: string;
  objectiveIds: string[]; goal: string; coreIds: string[];
  sections: { title: string; body: string }[];
  scenario: string; pitfall: string; takeaway: string; comparison: string[][];
  review: { question: string; answer: string }; docKeys: string[];
  imageFolder: string; imageBasename: string; imageAlt: string;
  snippet?: { language: string; note: string; code: string };
}
export interface Lab {
  id: string; title: string; scope: string; lessonIds: string[];
  goal: string; steps: string[]; checks: string[];
}
interface Content {
  exam: { code: string; title: string; reviewedAt: string; guideUpdatedAt: string; studyGuideUrl: string; certificationUrl: string };
  domains: Domain[]; objectives: Objective[]; lessons: Lesson[]; labs: Lab[];
  glossary: { term: string; definition: string; lessonId: string }[];
  docs: { key: string; label: string; href: string }[];
  capabilities: { label: string; domains: string[] }[];
}
const content = source as Content;
export const { exam, domains, objectives, lessons, labs, glossary, docs, capabilities } = content;
export const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');
export const route = (path = '') => `${BASE}/${path.replace(/^\/+/, '')}`;
export const deaPath = 'topics/snowflake/data-engineer/';
export const deaUrl = (path = '') => route(`${deaPath}${path}`);
export const lessonUrl = (lesson: Lesson) => deaUrl(`diagrams/${lesson.slug}/`);
export const domainUrl = (domain: Domain) => deaUrl(`domains/${domain.slug}/`);
export const getLesson = (id: string): Lesson => {
  const lesson = lessons.find((item) => item.id === id);
  if (!lesson) throw new Error(`Unknown DEA lesson: ${id}`);
  return lesson;
};
export const getDomain = (id: string) => domains.find((item) => item.id === id);
export const domainLessons = (id: string) => lessons.filter((item) => item.domain === id);
export const lessonDocs = (lesson: Lesson) => lesson.docKeys.map((key) => {
  const doc = docs.find((item) => item.key === key);
  if (!doc) throw new Error(`Unknown documentation key: ${key}`);
  return doc;
});
export const coreLinks = (lesson: Lesson) => lesson.coreIds.map((id) => {
  const core = coreDiagrams.find((item) => item.id === id);
  if (!core) throw new Error(`Core prerequisite missing: ${id}`);
  return { id: core.id, title: core.title, href: route(`topics/snowflake/core/diagrams/${core.slug}/`) };
});

// A build should fail clearly if a future edit leaves an Objective unmapped.
if (new Set(lessons.map((item) => item.slug)).size !== lessons.length) {
  throw new Error('DEA lesson slugs must be unique');
}
for (const objective of objectives) {
  if (!objective.lessonIds.length) throw new Error(`No lessons for Objective ${objective.id}`);
  for (const id of objective.lessonIds) {
    if (!getLesson(id).objectiveIds.includes(objective.id)) throw new Error(`Invalid mapping: ${objective.id} / ${id}`);
  }
}
