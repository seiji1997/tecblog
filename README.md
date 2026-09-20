# Seiji Tech Atlas v3

A personal knowledge atlas for **Knowledge / Projects / Thoughts** by Seiji Tanimoto.

## Design concept

The site is designed as a **living personal atlas**, not a chronological blog.

- **Overview first** — the home page makes the whole site understandable at a glance.
- **Learn / Build / Think** — three modes explain why each piece of content exists.
- **Knowledge Map** — Snowflake, AI/ML, Data Engineering, Cloud and Engineering Toolbox.
- **Personal context** — profile, Now, certification roadmap and principles remain visible in the right rail on desktop.
- **Progressive depth** — Overview → Field → Subtopic → Note.
- **Long-lived structure** — designed to scale to hundreds of notes/projects without becoming a flat feed.

The visual direction uses restrained dark surfaces, typography, borders, spacing and subtle interaction rather than decorative animation. It is informed by modern portfolio/product design patterns while remaining original.

## Main sections

1. Knowledge Map
2. Personal Map
3. Certification Track
4. Projects & Experiments
5. Thoughts in Progress
6. Latest Notes
7. Journey
8. About

## Stack

- Astro 5
- TypeScript
- Markdown content collections
- GitHub Pages
- GitHub Actions

No database, CMS, paid hosting or custom domain is required.

## Local development

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
```

## Add a note

Create a Markdown file in `src/content/blog/`.

```md
---
title: "Snowflake Streamsを整理する"
description: "Streamsの仕組みと試験で迷いやすいポイント"
publishedAt: 2026-09-25
category: "Snowflake"
topic: "snowflake"
subtopic: "Data Engineering"
tags: ["Snowflake", "Streams", "SnowPro"]
draft: false
---

## Summary

...
```

## Deploy to GitHub Pages

The repository includes `.github/workflows/deploy.yml`.

1. Push the project to a GitHub repository.
2. Open **Settings → Pages**.
3. Set the source to **GitHub Actions**.
4. Push to the default branch to deploy.

For a user site repository named `seiji1997.github.io`, the public URL can be `https://seiji1997.github.io/` without a paid domain.

## Next design steps

- Add a real profile image when desired.
- Add dedicated Project and Thought detail content types.
- Add search / command palette once the content library grows.
- Add note relationships / backlinks for the Digital Garden layer.
- Add GitHub project cards or contribution data later if desired.
