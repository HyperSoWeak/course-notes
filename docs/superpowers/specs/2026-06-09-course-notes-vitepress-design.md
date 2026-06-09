# Course Notes VitePress Design

## Goal

Create a reusable VitePress repository at `~/proj/course-notes` for all course notes, starting with the CSL final exam summaries.

## Architecture

The repository uses VitePress with `docs/` as the site root. Course content is organized by academic term and course:

```text
docs/
  index.md
  114-2/
    index.md
    CSL/
      index.md
      final/
        *.md
  .vitepress/
    config.mts
```

This keeps URLs stable and leaves space for future courses such as `114-2/ML`, `114-2/DSA`, or later semesters.

## Deployment

GitHub Pages is deployed through GitHub Actions using the official VitePress Pages pattern:

- build command: `pnpm docs:build`
- output directory: `docs/.vitepress/dist`
- deployment action: `actions/deploy-pages@v4`

Because the expected repository name is `course-notes`, VitePress `base` is `/course-notes/`.

## Content

Initial content copies the CSL final summary Markdown files from:

```text
/home/hyper/ntu/114-2/CSL/final/summaries
```

The visible navigation is Traditional Chinese by default, with English technical terms preserved.

## Constraints

- Use `pnpm`.
- Do not start a dev server.
- Keep the site simple and maintainable.
- Avoid custom frontend code unless VitePress default theme cannot cover the need.
