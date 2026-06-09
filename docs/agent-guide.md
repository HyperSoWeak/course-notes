# Agent Guide

## Goal

從 local course materials 產生可公開的 bilingual VitePress notes。

## Directory Contract

```text
materials/<term>/<course>/<unit>/   # raw materials, ignored by git
docs/<term>/<course>/<unit>/        # zh-TW notes
docs/en/<term>/<course>/<unit>/     # English notes
```

兩個語系的檔名必須一致，讓 VitePress locale toggle 能對應到同一主題。

## Generation Steps

1. 盤點 `materials/` 內檔案格式與主題
2. 抽取文字與程式重點
3. 依考試或主題重組，不逐頁翻譯
4. 先寫 zh-TW 版本，保留 English technical terms
5. 再寫 English 版本，保持同樣章節與 filename
6. 更新 `docs/.vitepress/config.mts` 的 sidebar
7. 執行 `pnpm docs:build`

## Writing Rules

- 筆記要能考前快速複習
- 用 table、bullet、formula block 整理高密度資訊
- 不貼大量原文投影片內容
- 補充外部知識時，優先使用官方文件或可靠來源
- 若材料內容不足，明確標示是補充知識

## Publishing Checklist

- `materials/` 沒有被 git staged
- zh-TW 與 English 都有對應頁面
- sidebar 有連到新頁面
- `pnpm docs:build` 通過
