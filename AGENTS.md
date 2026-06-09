# AGENTS.md

## Language

- Default user-facing language: zh-TW
- Keep code, commands, paths, API names, and technical terms in English
- Notes must exist in both zh-TW and English before publishing

## Repository Model

- `docs/`: public VitePress content committed to GitHub
- `docs/en/`: English locale
- `materials/`: local raw course materials, ignored by git
- `docs/materials.manifest.example.yml`: public schema/example for tracking raw materials
- `docs/agent-guide.md`: workflow for generating notes

## Material Policy

- Do not commit raw course PDFs, PPTX, recordings, assignment statements, private data, or copyrighted materials unless explicitly approved for public release
- Use `materials/` for local processing only
- Commit generated notes, summaries, indexes, and agent docs

## Note Generation Workflow

1. Inspect `materials/<term>/<course>/<unit>/`
2. Extract text from PDFs/PPTX/code using local tools
3. Write zh-TW notes under `docs/<term>/<course>/<unit>/`
4. Write matching English notes under `docs/en/<term>/<course>/<unit>/`
5. Keep filenames identical across locales
6. Update VitePress sidebar config if adding new visible pages
7. Run `pnpm docs:build`

## Style

- Be concise and exam-oriented
- Preserve technical terms in English
- Prefer topic-based pages over one page per source file
- Add source/material references without quoting large copyrighted passages
