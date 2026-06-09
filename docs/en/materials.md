# Materials Policy

This GitHub Pages site is public, so the repository should only commit generated notes and public metadata.

## Do Not Commit

- Course PDFs or PPTX files
- Recordings
- Assignment statements or unpublished handouts
- Personal data, grades, accounts, or private download links

## Local Raw Materials

Store raw files under `materials/`, which is ignored by git:

```text
materials/<term>/<course>/<unit>/
```

Agents read local materials and write public notes to `docs/`.

## Public Manifest

`docs/materials.manifest.example.yml` documents the expected structure and generated pages. It must not include private links or copyrighted source text.
