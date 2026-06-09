# Actuation, Motors, Transmission, Friction

## Actuation 是什麼

Actuation 是把能量轉成 motion 或 force。課程從 small electric motors 到 heavy-duty hydraulics，再到 micro actuation。

常見來源：

- electric motor
- solenoid
- pneumatic cylinder
- hydraulic cylinder
- piezo
- shape-memory alloy
- electroactive polymer

## Electromagnet, Solenoid, Motor

Electromagnet：

- 電流通過 coil 產生 magnetic field
- 可 on/off 控制
- 距離越近 force 越強，容易「吸住後難分開」

Solenoid：

- coil + core
- 把 electrical energy 轉成 linear motion
- range of motion 有限

Electric motor：

- 可視為把 solenoid 的線性運動變成連續旋轉
- 需要在適當時機反轉 magnetic field

Brushed motor：

- rotor 上有 coil
- brush / commutator 負責切換電流
- 缺點是 brush wear、spark、noise

Brushless motor：

- permanent magnet rotate，coil stationary
- 避免把電流接到 rotating armature
- 需要 electronic commutation

## Friction

Friction 是抵抗 relative motion 的 force。

基本式：

```text
Ff = μ Fn
```

其中：

- `Ff`：friction force，平行接觸面
- `μ`：coefficient of friction，材料組合的 empirical property
- `Fn`：normal force，垂直接觸面

重要定律：

- Amontons' first law：friction proportional to load
- Amontons' second law：idealized 情況下，friction independent of apparent contact area
- Coulomb friction：kinetic friction approximately independent of sliding velocity

考試重點：

- static friction 通常大於 kinetic friction
- 機器車不動時，常是 static friction 或傳動損失太大
- 減重可降低 normal force，進而降低 friction
- lubricant、low-friction coating、polishing 可降低 friction

## Transmission

Transmission 是改變 motion / force / speed / torque 的機構。

Gear：

- 改變 speed 和 torque
- 小 gear 帶大 gear：speed 降、torque 升
- 大 gear 帶小 gear：speed 升、torque 降

Rack and pinion：

- rotational motion 轉 linear motion
- pinion 是小齒輪，rack 是直線齒條

Worm gear：

- 常用於 heavy-duty electric actuator
- 可用小 motor 產生大 mechanical advantage
- 常有 self-locking 特性

## Pneumatics vs Hydraulics

Pneumatics：

- 用 compressed gas
- 輕、乾淨、反應快
- gas compressible，所以有 springiness
- force 其實來自 compressor，不是 cylinder 自己生成

Hydraulics：

- 用 liquid / oil
- liquid 幾乎 incompressible
- 可承受高壓與大力
- 較重、髒、需要處理 leakage

比較：

| 技術 | Medium | 優點 | 缺點 | 適合 |
|---|---|---|---|---|
| Pneumatic | gas | 輕、乾淨、有彈性 | compressible、位置控制較差 | tire、soft actuation、快速推動 |
| Hydraulic | liquid | 大力、穩、可精準承載 | 重、油污、leak | excavator、heavy machinery |
| Electric actuator | electricity + gear | 控制方便、整合容易 | 需 gear / transmission | 現代機器與自動化 |

## Micro / Special Actuation

Piezo：

- 加電壓會微小伸縮
- 受力也會產生 voltage，可當 sensor
- 位移小但反應快、精度高
- 應用：Braille cells、buzzer、camera image stabilization、ultrafine focusing

Slip-stick motor：

- slow phase stick
- fast phase slip
- 可把 piezo 的微小變形累積成連續位移

Bimetallic strip：

- 兩種金屬熱膨脹率不同
- 加熱後彎曲
- 常見於 thermostat 類機構

Shape-memory alloy：

- 加熱後回到原本形狀
- force/weight ratio 好，但效率與控制速度通常有限

Electroactive polymer：

- electric field 造成 shape 或 size 改變
- power output 通常小

總結：很多特殊 actuator 很酷，但若要高 power、好控制，electric motor + gear 往往仍最實用。
