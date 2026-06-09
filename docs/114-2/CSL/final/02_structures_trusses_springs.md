# Structures, Trusses, Springs, Catapult

## Statics

`Statics` 研究靜止物體與力平衡。設計 catapult、frame、support 時重點不是「形狀漂亮」，而是 force path 是否合理。

核心設計流程：

1. 判斷會有哪些 forces
2. 判斷每個 force 由哪個 structure 承擔
3. 減少不必要 material
4. 避免 weak orientation、stress concentration

## Catapult 的三個設計挑戰

1. Rigid elements：要輕但夠硬
2. Locking / trigger mechanism：要能按下或釋放才發射
3. Spring design：要儲存足夠 elastic potential energy

競賽限制：

- projectile diameter: 10 mm
- ball weight: 約 14 g
- print volume: `70 mm x 70 mm x 70 mm`
- 材料只用 PLA，不能外加材料
- 必須由材料本身的 elastic potential energy 發射
- 發射時 catapult 要留在地上、保持完整

## Lever Law

Lever 的 mechanical advantage：

```text
MA = FB / FA = a / b
```

臂長會放大 force 或 displacement。Catapult 設計中，arm 越長可能射更遠，但也更容易彎曲或斷裂；需要用 structure 補強。

## Truss

Truss 的核心是 triangles。

為什麼 triangle 重要：

- Triangle 幾何穩定，不容易改變形狀
- 可把 bending 轉換成 tension / compression
- 在低重量下提供高 stiffness
- force path 清楚，容易檢查 stability

考試關鍵句：

```text
90% of good construction is triangles.
```

Truss 設計原則：

- 用 triangle close the structure，避免 long lever bending
- 讓 member 主要承受 tension 或 compression
- 中空不一定弱，前提是 force path 被正確承接
- 不要只增加厚度，先改善 geometry

## FDM 3D Printing 的結構限制

FDM 是 layer-by-layer。常見弱點：

- layer adhesion 弱，tension perpendicular to layers 容易裂
- thin coil spring 不理想，容易太薄或需要 support
- print orientation 會大幅影響 strength
- 同一個 part 若有多個 connector，不可能每個方向都最佳

設計建議：

- 讓主要 tensile stress 沿著 layer 平面，而不是拉開 layers
- 避免很薄的 cantilever 或 coil spring
- 用 fillet 降低 stress concentration
- 用 FEA 或 prototype 檢查 trigger、spring、arm 的 deformation

## Spring

Spring 儲存 elastic potential energy。Catapult 中 spring 可以是：

- 彎曲 beam
- compliant flexure
- leaf spring-like structure
- 由 PLA 本體變形儲能

避免：

- 過薄造成 plastic deformation 或 fracture
- 只追求射程犧牲穩定
- 發射時整台機構跳起或破裂

## FEA 在 Catapult 中的用途

Finite Element Analysis 把複雜形狀切成 mesh，再對材料、constraint、load 求解，得到 stress、displacement、safety factor。

課程流程：

1. 設 material，例如 ABS 近似 PLA
2. 進 Simulation workspace
3. 設 constraints
4. 設 loads，例如 trigger 上施加 2 N
5. Check degree of freedom
6. Generate mesh
7. Solve
8. 看 safety factor、stress、displacement
9. 回 Design workspace 改參數

補充：FEA 很適合處理 holes、fillets、irregular geometry 周圍的 stress concentration；但 mesh、material property、boundary condition 錯，結果也會錯。
