export const topics = [
  {
    slug: 'snowflake', code: 'SF', title: 'Snowflake', eyebrow: 'Primary focus',
    description: 'Architecture、Data Engineering、Security、Performance。資格と実務で得た知識を同じ地図に蓄積。',
    subtopics: ['Architecture', 'Data Engineering', 'Performance', 'Security & Governance', 'Data Sharing', 'Certification'],
    accent: 'cyan', count: 'Growing'
  },
  {
    slug: 'ai-ml', code: 'AI', title: 'AI / Machine Learning', eyebrow: 'Research & experiments',
    description: '生成AIから従来MLまで。試したこと、作ったもの、考えたことを再現可能な形で残す。',
    subtopics: ['Generative AI', 'LLM / RAG', 'AI Agents', 'Machine Learning', 'Evaluation', 'Applied AI'],
    accent: 'violet', count: 'Explore'
  },
  {
    slug: 'data-engineering', code: 'DE', title: 'Data Engineering', eyebrow: 'Foundation',
    description: 'DWH、SQL、パイプライン、データ品質、BI。データを使える状態にするための土台。',
    subtopics: ['DWH / Modeling', 'Pipelines', 'SQL', 'Data Quality', 'BI / Analytics', 'Operations'],
    accent: 'green', count: 'Core'
  },
  {
    slug: 'cloud', code: 'CL', title: 'Cloud', eyebrow: 'Platform',
    description: 'Google Cloudを中心に、設計・データ・ML・セキュリティ・資格更新の知識を整理。',
    subtopics: ['Google Cloud', 'Architecture', 'Data', 'ML', 'Security', 'Certification'],
    accent: 'amber', count: 'Archive'
  },
  {
    slug: 'engineering', code: 'EN', title: 'Engineering Toolbox', eyebrow: 'Tools & craft',
    description: 'Python、Git/GitHub、Web、Excel、自動化。日々の実装と生産性を支える道具箱。',
    subtopics: ['Python', 'Git / GitHub', 'Web', 'Excel', 'Automation', 'Developer Tools'],
    accent: 'blue', count: 'Toolbox'
  },
];

export const modes = [
  { code:'01', title:'Learn', jp:'学ぶ', description:'資格・技術を、あとから再利用できる知識単位に分解する。', href:'#knowledge' },
  { code:'02', title:'Build', jp:'作る', description:'コード、プロトタイプ、ゲーム、AIツール。作ったものと過程を残す。', href:'#projects' },
  { code:'03', title:'Think', jp:'考える', description:'AI、Engineering、仕事、学習について、自分の視点の変化を記録する。', href:'#thoughts' },
];

export const certifications = [
  { name: 'SnowPro Core', code: 'COF-C03', date: '2026.10.12', status: 'Next', progress: 28 },
  { name: 'Advanced Data Engineer', code: 'DEA-C02', date: '2026.11.08', status: 'Planned', progress: 0 },
  { name: 'Advanced Architect', code: 'ARA-C01', date: '2026.12.13', status: 'Planned', progress: 0 },
];

export const projects = [
  { title:'Seiji Tech Atlas', type:'Website', description:'学習・実装・思考を一つの知識地図にまとめる、このサイト自体の開発。', tags:['Astro','GitHub Pages','Design'], status:'Building', href:'https://github.com/seiji1997' },
  { title:'Neon Void Wars', type:'Game', description:'Godotで開発するネオンSFバトルゲーム。ゲームシステムとキャラクター表現を検証中。', tags:['Godot','Game Design','AI Coding'], status:'In progress', href:'https://github.com/seiji1997' },
  { title:'Data Validation Toolkit', type:'Data / Automation', description:'データ検証や申請ワークフローを、再利用できる設計パターンとして整理。', tags:['Snowflake','Python','Data Quality'], status:'Learning', href:'#knowledge' },
];

export const thoughts = [
  { title:'AI時代に「自分で作る」ことの意味', excerpt:'生成AIで実装コストが下がるほど、何を作るか、どう構造化するかの価値は上がるのではないか。', theme:'AI × Engineering', status:'Seed' },
  { title:'資格学習を使い捨てにしない', excerpt:'合格のための暗記ではなく、2年後の再受験や実務で使える自分のKnowledge Baseに変換する。', theme:'Learning', status:'Active' },
  { title:'技術とプロジェクト推進の間に立つ', excerpt:'実装だけでもPMOだけでもなく、両方が分かることをどうキャリアの強みに変えていくか。', theme:'Career', status:'Thinking' },
];

export const principles = [
  'Learn in public',
  'Structure before scale',
  'Build to understand',
  'Knowledge should compound',
];
