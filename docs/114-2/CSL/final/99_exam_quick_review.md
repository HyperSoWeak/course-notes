# 考前快速複習

## 必背對照

| Term | 一句話 |
|---|---|
| Statics | 研究靜止物體與 force equilibrium |
| Kinematics | 只研究 motion，不管造成 motion 的原因 |
| Dynamics | 研究 force 對 motion 的影響 |
| Open loop | 沒有 sensor feedback |
| Closed loop | 用 negative feedback 持續修正 output |
| Bang-bang | on/off control，常搭配 hysteresis |
| PID | P 看 current error，I 看 accumulated past error，D 看 error trend |
| Truss | 用 triangle 結構承受 tension / compression |
| FEA | mesh + material + constraints + loads -> stress / displacement / safety factor |
| Kerf | laser cut 時被燒掉或移除的 material width |
| Press-fit | 靠 interference、normal force、friction 固定 |
| Living hinge | 用 slits 讓 rigid sheet 變 flexible |
| Pneumatics | compressed gas actuation，有彈性、會 springy |
| Hydraulics | liquid actuation，可傳大 force，較不 compressible |
| Piezo | voltage 與微小 deformation 可互相轉換 |
| SMA | 加熱後回到 memorized shape |
| Memex | Bush 提出的 associative information system vision |
| Sketchpad | early interactive graphics / CAD |
| Mother of All Demos | 展示 mouse、hypertext、collaborative editing |

## PID 速記

```text
error = setPoint - measuredOutput
output = Kp * error + Ki * sum(error) + Kd * d(error)/dt
```

- `Kp` 變大：response 變快，但 overshoot / oscillation 風險上升
- `Ki` 變大：steady-state error 下降，但 overshoot / windup 風險上升
- `Kd` 變大：overshoot 下降，但對 noise 更敏感

Tuning：

1. 先把 P/I/D 設為 zero
2. 增加 P，直到系統開始 oscillation
3. 加 D 來 damp oscillation
4. 如果仍有 steady-state error，再慢慢加 I

## Structure 速記

- 先看 force path，再看 material
- Triangles 可避免 bending
- Long levers 容易斷
- Truss 把 bending 轉成 tension / compression
- FDM layer direction 會影響 strength
- Fillet 可降低 stress concentration

## Fabrication 速記

- Fusion 360：sketch -> extrude/revolve -> cut/join -> fillet -> pattern -> export
- FEA：設 constraint、load、DOF，產生 mesh，solve，再看 safety factor / stress / displacement
- Laser cutting：2D parts 透過 assembly 變 3D
- Press-fit 一定要實測 kerf 和 material thickness
- Living hinge 靠 repeated slits 增加 flexibility

## Actuation 速記

- Solenoid：linear motion，stroke 有限
- Motor：continuous rotary motion
- Brushless：stationary coils + rotating magnets
- Friction：`Ff = μFn`
- Static friction 通常大於 kinetic friction
- Gear 在 speed 和 torque 之間 trade off
- Rack and pinion 把 rotation 轉成 linear motion
- Worm gear 可提供 large reduction / mechanical advantage

## HCI 速記

```text
Bush -> Engelbart / Sutherland -> Xerox PARC -> Apple -> Microsoft
```

- Bush：Memex、hypertext-like trails
- Engelbart：augmentation、mouse、hypertext、groupware
- Sutherland：Sketchpad、interactive graphics
- Xerox：Alto / Star、GUI、desktop metaphor、Ethernet、laser printing

## 常見問答模板

### 為什麼需要 closed loop？

因為真實系統有 disturbance，也常有 uncertain initial state。Sensor feedback 讓 controller 比較 measured output 和 setpoint，並隨時間修正 error。

### 為什麼 structure 常用 triangles？

Triangles 在幾何上穩定。它們把 load 主要導到 members 的 tension 和 compression，降低 bending，因此能用低 weight 得到高 stiffness。

### 為什麼 kerf 很重要？

Laser cutting 會移除 material。對 press-fit 或 interlocking joints 來說，即使很小的 kerf error 也會累積，讓 parts 太鬆或太緊。

### 為什麼 heavy machines 常用 hydraulics？

Hydraulic fluid 幾乎 incompressible，可以在 high pressure 下傳遞 large force，所以面對 heavy loads 時比 compressed air 更穩定。
