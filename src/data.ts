export const topics = [
  {
    slug: 'ai-ml',
    code: 'AI',
    title: 'AI / Machine Learning',
    eyebrow: 'Research & experiments',
    description: '生成AIから従来MLまで。試したこと、作ったもの、考えたことを再現可能な形で残す。',
    subtopics: ['Generative AI', 'LLM / RAG', 'AI Agents', 'Machine Learning', 'Evaluation', 'Applied AI'],
    accent: 'violet',
    count: 'Explore',
  },
  {
    slug: 'data-engineering',
    code: 'DE',
    title: 'Data Engineering',
    eyebrow: 'Foundation',
    description: 'DWH、SQL、パイプライン、データ品質、BI。データを使える状態にするための土台。',
    subtopics: ['DWH / Modeling', 'Pipelines', 'SQL', 'Data Quality', 'BI / Analytics', 'Operations'],
    accent: 'green',
    count: 'Core',
  },
  {
    slug: 'cloud',
    code: 'GC',
    title: 'Google Cloud',
    eyebrow: 'Cloud platform',
    description: 'Google Cloudを中心に、Architecture、Data、ML、Security、資格学習の知識を整理。',
    subtopics: ['Architecture', 'Data', 'Machine Learning', 'Security', 'BigQuery', 'Certification'],
    accent: 'amber',
    count: 'Cloud',
  },
  {
    slug: 'snowflake',
    code: 'SF',
    title: 'Snowflake',
    eyebrow: 'Primary focus',
    description: 'Architecture、Data Engineering、Security、Performance。資格と実務で得た知識を同じ地図に蓄積。',
    subtopics: ['Architecture', 'Data Engineering', 'Performance', 'Security & Governance', 'Data Sharing', 'Certification'],
    accent: 'cyan',
    count: 'Growing',
  },
  {
    slug: 'engineering',
    code: 'ET',
    title: 'Engineering Tools',
    eyebrow: 'Tools & workflow',
    description: 'Python、Git/GitHub、Web、Excel、自動化。日々の実装と生産性を支えるエンジニアリング道具群。',
    subtopics: ['Python', 'Git / GitHub', 'Web', 'Excel / VBA', 'Automation', 'Developer Tools'],
    accent: 'blue',
    count: 'Tools',
  },
];

export const thoughts = [
  {
    slug: 'technology-engineering',
    title: 'Technology & Engineering',
    excerpt: 'AI、Software、Data、Cloud。技術をどう理解し、どう使い、どう作るかについて考えたことを残す。',
    theme: 'Technology',
    status: 'Open category',
  },
  {
    slug: 'work-career',
    title: 'Work & Career',
    excerpt: '仕事への向き合い方、キャリア、チーム、プロジェクト、成長についての考えを記録する。',
    theme: 'Work',
    status: 'Open category',
  },
  {
    slug: 'learning-growth',
    title: 'Learning & Growth',
    excerpt: '学び方、資格、習慣、振り返り。自分がどう知識を増やし、再利用していくかを整理する。',
    theme: 'Learning',
    status: 'Open category',
  },
  {
    slug: 'life-interests',
    title: 'Life & Interests',
    excerpt: '日常で感じたこと、好きなもの、面白かった体験、価値観の変化を自由に残す。',
    theme: 'Life',
    status: 'Open category',
  },
];

export const certifications = [
  { name: 'SnowPro Core', code: 'COF-C03', date: '2026.10.12', status: 'Next', progress: 28 },
  { name: 'Advanced Data Engineer', code: 'DEA-C02', date: '2026.11.08', status: 'Planned', progress: 0 },
  { name: 'Advanced Architect', code: 'ARA-C01', date: '2026.12.13', status: 'Planned', progress: 0 },
];

export const principles = [
  'Learn in public',
  'Structure before scale',
  'Build to understand',
  'Knowledge should compound',
];
