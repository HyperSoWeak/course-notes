# Course Notes Bilingual Materials Design

## Goal

Restructure `course-notes` so it can host public bilingual notes for all courses while keeping raw course materials local and private.

## Content Model

Public content is committed under `docs/`.

```text
docs/<term>/<course>/<unit>/        # zh-TW notes
docs/en/<term>/<course>/<unit>/     # English notes
```

Both locales use identical filenames. This makes language switching predictable and lets agents verify that every published zh-TW page has an English counterpart.

## Raw Materials

Raw materials live under ignored local directories:

```text
materials/<term>/<course>/<unit>/
```

These files may include PDFs, PPTX, code, CAD files, recordings, and assignment material. They are not committed because the GitHub Pages site is public.

## Agent Documentation

The repository contains:

- `AGENTS.md` for root-level operating rules
- `docs/agent-guide.md` and `docs/en/agent-guide.md` for public workflow documentation
- `docs/materials.md` and `docs/en/materials.md` for publication policy
- `docs/materials.manifest.example.yml` for a safe public schema/example

## VitePress i18n

The root locale is zh-TW. English content lives under `/en/`. VitePress locale config provides the language toggle and localized navigation/sidebar.

## Initial Migration

The current CSL final notes remain in the root zh-TW locale. English versions are added under `docs/en/114-2/CSL/final/` with matching filenames.
