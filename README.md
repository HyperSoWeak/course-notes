# Course Notes

VitePress site for bilingual course notes.

## Structure

```text
docs/                         # public zh-TW site
docs/en/                      # public English site
materials/                    # local raw materials, ignored by git
docs/materials.manifest.example.yml
```

Raw course PDFs/PPTX/code from instructors should stay in `materials/` unless there is explicit permission to publish them.

## Commands

```bash
pnpm install
pnpm docs:dev
pnpm docs:build
```

## Agent Workflow

See:

- `AGENTS.md`
- `docs/agent-guide.md`
- `docs/materials.md`
- `docs/materials.manifest.example.yml`

## GitHub Pages

This repository is configured for GitHub Pages with GitHub Actions.

After pushing to GitHub:

1. Open repository settings.
2. Go to Pages.
3. Set source to GitHub Actions.
4. Push to `main`.

The VitePress `base` is `/course-notes/`. If the GitHub repository name changes, update `docs/.vitepress/config.mts`.
