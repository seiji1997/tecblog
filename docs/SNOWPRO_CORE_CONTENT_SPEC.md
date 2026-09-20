# SnowPro Core Learning Atlas — Content Specification v1

## 1. Goal

Build a SnowPro Core (COF-C03) learning area that works as all of the following:

- an exam-preparation map,
- a long-term review system,
- a visual knowledge base,
- and a reusable Snowflake reference for future recertification and practical work.

The page should make the structure of the exam understandable before the learner reads detailed notes.

## 2. Source hierarchy

Use information in the following order:

1. Current SnowPro Core certification page and COF-C03 Study Guide
2. Snowflake Documentation
3. Snowflake University / official learning resources
4. Personal practical notes and experiments

Third-party articles can be used only as supporting references or for discovering relevant official documentation. They should not define the exam scope.

## 3. Information architecture

### Entry

- `/topics/snowflake/`
- `/topics/snowflake/core/`

### Core learning system

- `/topics/snowflake/core/blueprint/`
- `/topics/snowflake/core/domains/[domain]/`
- `/topics/snowflake/core/diagrams/`
- `/topics/snowflake/core/diagrams/[slug]/`
- `/topics/snowflake/core/glossary/`
- `/topics/snowflake/core/resources/`
- `/topics/snowflake/core/notes/`

## 4. Exam model

The learning area uses two complementary views.

### Exam blueprint

Use the five COF-C03 domains and their weightings as the main study structure:

1. Snowflake AI Data Cloud Features & Architecture — 31%
2. Account Management & Data Governance — 20%
3. Data Loading, Unloading & Connectivity — 18%
4. Performance Optimization, Querying & Transformation — 21%
5. Data Collaboration — 10%

### Capability map

Also show the seven skills stated on the public SnowPro Core certification page:

- architecture,
- account / virtual warehouse management,
- loading / unloading / transformation,
- structured / semi-structured / unstructured data,
- performance monitoring / optimization,
- collaboration / protection,
- connectivity.

The five domains organize study. The seven capabilities show what the learner should ultimately be able to do.

## 5. Page rules

Every public page must provide learner value without requiring explanatory UI copy.

Do:

- use meaningful headings,
- show relationships visually,
- keep the exam domain visible,
- link concepts to official documentation,
- make related concepts navigable,
- keep personal notes separate from baseline explanations.

Do not:

- include production notes in public copy,
- explain obvious UI behavior,
- mention internal decisions such as language-selection history,
- repeat information that is already communicated by the layout.

## 6. Diagram system

### Levels

- `MASTER`: one full study map
- `P0`: essential diagrams for first-pass exam preparation
- `P1`: important diagrams for complete understanding
- `P2`: extended diagrams for completeness and future review

### Diagram page template

Each diagram page should contain:

1. title and domain,
2. one-sentence purpose,
3. visual diagram,
4. concept explanation,
5. key terms,
6. exam-oriented distinctions / decision points,
7. related diagrams,
8. official documentation links,
9. optional personal practical notes.

## 7. Diagram inventory

The current registry contains 36 planned diagrams:

- 1 master map
- 8 Features & Architecture diagrams
- 7 Account & Governance diagrams
- 7 Loading & Connectivity diagrams
- 8 Performance & Transformation diagrams
- 5 Collaboration diagrams

The registry is maintained in `src/data/snowproCore.ts`.

## 8. Definition of done

The SnowPro Core area is considered complete when:

- every exam domain has a domain page,
- every registry item has a diagram page,
- P0 diagrams are fully visualized,
- all pages include concise explanations and official links,
- glossary terms can be found from the relevant domain,
- the full study map links to the domain pages,
- personal notes can be added without rewriting baseline content,
- the content can be used for later recertification review.

## 9. Build order

### Phase 1 — Structure

- Core landing page
- Blueprint page
- Five domain pages
- Diagram index
- Glossary
- Resources
- Notes

### Phase 2 — P0 diagrams

- M-01 Full Study Map
- FA-01 Three-layer Architecture
- FA-04 Micro-partitions & Storage Model
- FA-05 Virtual Warehouse Model
- AG-01 RBAC Grant Chain
- AG-02 System Role Hierarchy
- AG-05 Governance Policies
- LC-01 Stage Types
- LC-03 COPY INTO <table>
- LC-05 Snowpipe vs Snowpipe Streaming
- LC-06 Data Shapes & Ingestion
- LC-07 Connectivity Map
- PT-01 Query Execution & Caching
- PT-02 Micro-partition Pruning
- PT-04 Warehouse Tuning
- PT-05 Query Profile
- PT-07 SQL & Semi-structured Transformation
- PT-08 Streams / Tasks / Dynamic Tables
- CO-01 Secure Data Sharing
- CO-05 Time Travel / Fail-safe / Zero-copy Clone

### Phase 3 — P1 / P2 diagrams

Complete the rest of the registry, then add hands-on notes and review checklists.
