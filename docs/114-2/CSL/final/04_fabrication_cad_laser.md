# Fabrication: Fusion 360, 3D Printing, Laser Cutting

## Fusion 360 CAD Workflow

課程示範用 parametric modeling：

1. Insert Canvas，放 side views
2. 對齊 plane：front、right、top
3. Scale 到實際尺寸，例如 `Scale Plane XY = 3`
4. 建立 2D sketch
5. 用 Offset、Line、Spline 建 closed profile
6. 用 Revolve / Extrude 產生 solid
7. 用 Extrude Cut 挖 button / USB port
8. 用 Offset Plane 定義切割 plane
9. Split Body 分成 case / lid
10. Project existing geometry，做 tongue and groove
11. 用 Fillet 改善 ergonomics、降低 sharp edge
12. 用 Rectangular Pattern 複製 features
13. Export `.3mf` / `.stl`，unit 用 mm

考試常見點：

- Parametric history 讓你可回頭改 earlier feature
- `Join` 是加材料，`Cut` 是減材料
- `Project` 可把既有幾何投影到當前 sketch
- `Fillet` 不只美觀，也可降低 stress concentration

## 3D Printing 注意事項

- 檔案格式：`.3mf` 較新，`.stl` 常見
- unit 要設 `mm`
- support material 會影響可列印性與表面品質
- print orientation 會影響強度
- 太薄的 feature、coil spring、懸臂容易失敗

## Laser Cutting 的本質

Laser cutter 是 3-axis，但大多數切割其實是 extruded 2D。要做 3D 物件，通常靠 multiple flat parts assembly。

做 joints 的兩個主因：

1. Break out of 2D
2. Make moving parts

少數情況也用來省材料或做超過 cutter bed 的大物件。

## Kerf

`Kerf` 是雷射切割時被燒掉/熔掉的材料寬度。忽略 kerf 會讓 press-fit 太鬆或太緊。

補充來源指出，CO2 laser 在 3 mm acrylic / plywood 上常見 kerf 約 `0.10-0.25 mm`，但實際值取決於材料、厚度、焦距、power、speed、air assist。

實務做法：

1. 用 caliper 量材料厚度
2. 切 test slot / comb
3. 用不同 slot width 試 fit
4. 把 slot / notch 做成 parametric

## Laser Joint Patterns

| Joint / Pattern | 用途 | 注意 |
|---|---|---|
| Stacking | 疊出厚度或 volume | 對齊與固定要處理 |
| Frame / spacer | 做外框與間距 | 可避免滑動 |
| Press-fit | 靠 interference + friction 固定 | kerf 與材料厚度很關鍵 |
| Notch joint | 平板互插 | 常用於 z-force 明確的結構 |
| Mortise and tenon | 定位與承載 | 3-axis laser 可做簡化版 |
| Finger joint | box / edge joining | 很常見，但不要濫用 |
| Captured nut | 讓螺帽卡在板材內 | 方便用 screw clamp |
| Bayonet connector | 旋轉鎖定 | 適合可拆裝 |
| Rack and pinion | rotary 轉 linear | 可 laser cut gear/rack |
| Living hinge / lattice hinge | 用 slit 讓硬板變柔 | 強度與彎曲半徑需測試 |

## Laser Cutting 設計原則

- 3D-ness 來自 assembly，不是直接雕 3D
- joint 要符合受力方向
- press-fit 一定要測 kerf，不要只相信 nominal material thickness
- moving part 可用 bearing、damper、spring、roller、screw 補強
- living hinge 是用很多 slits 讓 rigid material 可 bend
- defocus laser 可用於 heating / bending，但參數需實驗
- etching / engraving 可用於 PCB mask、FTIR acrylic light leak、surface marking

## FEA 與 Fabrication 的連結

設計流程不是一次完成：

```text
CAD -> simulate / estimate -> fabricate -> test -> modify parameters
```

在 catapult 這類 project，FEA 可先找出 trigger 或 arm 的 high stress 區域，再回到 parametric history 改厚度、高度、fillet 或 support structure。
