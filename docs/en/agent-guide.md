# Agent Guide

## Goal

Generate public bilingual VitePress notes from local course materials.

## Directory Contract

```text
materials/<term>/<course>/<unit>/   # raw materials, ignored by git
docs/<term>/<course>/<unit>/        # zh-TW notes
docs/en/<term>/<course>/<unit>/     # English notes
```

Both locales must use identical filenames so the VitePress language menu can map users to the matching topic.

## Generation Steps

1. Inventory files under `materials/`.
2. Extract text and code-level details.
3. Reorganize by exam topic or concept instead of translating slide by slide.
4. Write the zh-TW version first, preserving English technical terms.
5. Write the English version with the same sections and filename.
6. Update `docs/.vitepress/config.mts` sidebar entries.
7. Run `pnpm docs:build`.

## Writing Rules

- Optimize for exam review.
- Use tables, bullets, and formula blocks for dense information.
- Do not paste large excerpts from source materials.
- Prefer official or reliable sources when adding background knowledge.
- Mark added context clearly when it is not directly from the course material.

## Publishing Checklist

- Nothing under `materials/` is staged.
- zh-TW and English pages both exist.
- Sidebar links include new pages.
- `pnpm docs:build` passes.
