# Course Notes

VitePress site for course notes.

## Commands

```bash
pnpm install
pnpm docs:dev
pnpm docs:build
```

## GitHub Pages

This repository is configured for GitHub Pages with GitHub Actions.

After pushing to GitHub:

1. Open repository settings.
2. Go to Pages.
3. Set source to GitHub Actions.
4. Push to `main`.

The VitePress `base` is `/course-notes/`. If the GitHub repository name changes, update `docs/.vitepress/config.mts`.
