# Materials Policy

這個網站是公開的 GitHub Pages，因此 repo 只 commit generated notes 和公開 metadata。

## 不 commit 的內容

- 課程 PDF / PPTX
- 錄影、錄音
- 作業題目或未授權講義
- 私人資料、成績、帳號、下載連結

## Local-only 原始材料

原始材料放在 repo 內的 `materials/`，但該目錄被 `.gitignore` 排除：

```text
materials/<term>/<course>/<unit>/
```

Agent 讀取 `materials/` 後，輸出公開筆記到 `docs/`。

## Public manifest

`docs/materials.manifest.example.yml` 只描述目錄結構與生成頁面，不放私有連結或受版權保護內容。
