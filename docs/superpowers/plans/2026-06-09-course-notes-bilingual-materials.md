# Course Notes Bilingual Materials Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add bilingual VitePress structure, local-only raw materials policy, and agent documentation to `course-notes`.

**Architecture:** Keep zh-TW at the VitePress root and English under `/en/`. Store public generated notes in `docs/`; store raw materials in git-ignored `materials/`.

**Tech Stack:** VitePress i18n, Markdown, pnpm, GitHub Pages.

---

### Task 1: Materials Policy

**Files:**
- Modify: `.gitignore`
- Create: `materials/README.md`
- Create: `docs/materials.md`
- Create: `docs/en/materials.md`
- Create: `docs/materials.manifest.example.yml`

- [x] Ignore local raw materials.
- [x] Document why raw materials are not committed.
- [x] Add public manifest example without private links.

### Task 2: Agent Documentation

**Files:**
- Create: `AGENTS.md`
- Create: `docs/agent-guide.md`
- Create: `docs/en/agent-guide.md`

- [x] Define bilingual note generation rules.
- [x] Define raw material handling rules.
- [x] Define publishing checklist.

### Task 3: VitePress i18n

**Files:**
- Modify: `docs/.vitepress/config.mts`
- Create: `docs/en/index.md`
- Create: `docs/en/114-2/index.md`
- Create: `docs/en/114-2/CSL/index.md`

- [x] Configure zh-TW root locale and English `/en/` locale.
- [x] Add localized navigation and sidebars.
- [x] Enable localized local search labels for zh-TW.

### Task 4: English Notes

**Files:**
- Create: `docs/en/114-2/CSL/final/*.md`

- [x] Add English counterparts for every CSL final zh-TW page.
- [x] Keep filenames identical across locales.

### Task 5: Verification

**Commands:**
- `pnpm docs:build`
- `git status --short`

- [x] Confirm VitePress production build passes.
- [x] Confirm local raw materials are not staged.
