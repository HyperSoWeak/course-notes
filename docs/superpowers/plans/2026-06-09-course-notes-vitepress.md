# Course Notes VitePress Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a reusable VitePress course-notes repository under `~/proj/course-notes` and import CSL final notes.

**Architecture:** Use `docs/` as the VitePress root. Organize notes by term and course, with a sidebar for `114-2` and CSL final summaries. Deploy to GitHub Pages with official Pages actions.

**Tech Stack:** VitePress, TypeScript config, pnpm, GitHub Actions.

---

### Task 1: Project Metadata

**Files:**
- Create: `package.json`
- Create: `.gitignore`
- Create: `README.md`

- [ ] Create package scripts for VitePress.
- [ ] Ignore dependencies and build output.
- [ ] Document local commands and GitHub Pages setup.

### Task 2: VitePress Site

**Files:**
- Create: `docs/.vitepress/config.mts`
- Create: `docs/index.md`
- Create: `docs/114-2/index.md`
- Create: `docs/114-2/CSL/index.md`

- [ ] Configure site metadata, nav, sidebar, search, and GitHub Pages `base`.
- [ ] Add landing pages for all courses and CSL.

### Task 3: Import CSL Final Notes

**Files:**
- Create: `docs/114-2/CSL/final/*.md`

- [ ] Copy all Markdown files from CSL final summaries.
- [ ] Keep original technical terms and zh-TW wording.

### Task 4: GitHub Pages Workflow

**Files:**
- Create: `.github/workflows/deploy.yml`

- [ ] Add official GitHub Pages workflow for pnpm and VitePress.
- [ ] Configure artifact path as `docs/.vitepress/dist`.

### Task 5: Verification

**Commands:**
- `pnpm install`
- `pnpm docs:build`

- [ ] Install dependencies.
- [ ] Build the VitePress site successfully.
- [ ] Initialize git repository and create an initial conventional commit.
