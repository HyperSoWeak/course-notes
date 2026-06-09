# Control, Dynamics, PID, Stabilizer

## 核心觀念

`Dynamics` 是研究 force 對 motion 的影響；和 `statics`（靜止與力平衡）及 `kinematics`（只看運動、不看成因）不同。只要系統有 inertia、gravity、flexibility、friction 或外力干擾，就不能只靠 kinematics。

`Controller` 會監測並改變 dynamical system 的 operating condition。課程中的 stabilizer 目標是讓 platform 維持水平，用 MPU-6050 量 pitch，經 PID 算出 motor command，再用 L298N + PWM 控制 DC motor。

## Open Loop vs Closed Loop

| 類型 | 定義 | 優點 | 缺點 | 例子 |
|---|---|---|---|---|
| Open-loop control | 沒有 sensor feedback，只根據模型/初始狀態控制 | 簡單、便宜 | 無法修正 disturbance | 簡單 timer、便宜 soldering iron |
| Closed-loop control | sensor 回傳 measured output，持續用 error 修正 output | 能處理干擾與不確定性 | 需要 sensor、tuning，可能不穩 | stabilizer、temperature control |

Closed loop 基本式：

```text
error = setPoint - measuredOutput
controller output = f(error)
```

## Bang-Bang Control

Bang-bang 是 on/off control。它的 output 只有兩種狀態，例如加熱器開/關、馬達全速正轉/反轉。

特性：

- 實作簡單
- 常搭配 `hysteresis` / `dead band`，避免在 threshold 附近快速切換
- 容易有 oscillation
- 可視為極端的 P control：`Kp` 非常大、`Ki = 0`、`Kd = 0`

## PID 三項

| Term | 看什麼 | 效果 | 常見問題 |
|---|---|---|---|
| P, Proportional | current error | error 越大，輸出越大；反應快 | `Kp` 太大會 overshoot / oscillation；可能有 steady-state error |
| I, Integral | accumulated past error | 消除 steady-state error | 容易造成 overshoot、slow oscillation、integral windup |
| D, Derivative | rate of error change | damping，減少 overshoot，預測趨勢 | 對 sensor noise 很敏感 |

常見控制效果：

- P only：能讓系統朝 setpoint 走，但可能到不了，留下 steady-state error
- PD：D 提供 damping，可降低 overshoot
- PI：I 累積 error，可消除 steady-state error，但可能變慢或震盪
- PID：折衷速度、穩態誤差、overshoot

## Stabilizer 實作流程

Hardware：

- ESP8266 / NodeMCU
- MPU-6050 / GY-521 IMU
- L298N motor driver
- DC motor
- 9V battery、boost converter、laser cut structure

L298N direction table：

| Behavior | IN1 | IN2 |
|---|---|---|
| Forward | HIGH | LOW |
| Backward | LOW | HIGH |
| Brake | LOW | LOW |

程式邏輯：

1. 初始化 I2C、MPU-6050 DMP、interrupt
2. 從 FIFO 讀 quaternion
3. 轉成 yaw / pitch / roll
4. 用 pitch 和 `setPoint` 算 error
5. 算 `P + I + D`
6. `constrain(PID, -255, 255)`
7. PID sign 決定方向，absolute value 決定 PWM speed

程式中的 PID：

```cpp
error = (ypr[1] * 180 / M_PI) - setPoint;
P = kp * error;
I += ki * error;
D = kd * ((error - prev_error) / dt);
PID = constrain(P + I + D, -255, 255);
speed = abs(PID);
```

注意：課程投影片公式有時用 `r(t) - y(t)`，程式中是 `measured - setPoint`。只要 motor direction 對應一致，sign convention 可以不同；考試要能說明 sign 代表方向。

## PID Tuning

課程方法：

1. `Kp = Ki = Kd = 0`
2. 增加 `Kp` 直到系統開始 oscillate
3. 增加 `Kd` 直到 oscillation 消失
4. 重複調 `Kp` / `Kd`
5. 若需要消除 steady-state error，慢慢增加 `Ki`
6. 反覆調整，因 motor、load、power 不同，最佳參數也不同

考試答題模板：

```text
Kp controls response strength to current error.
Kd damps fast changes and reduces overshoot.
Ki accumulates past error to remove steady-state error, but may introduce windup and oscillation.
```

## 補充

NI 的 PID 說明也指出：PID 是 industrial control 常見演算法；closed-loop 會以 sensor feedback 固定週期更新 actuator output；performance 常用 rise time、overshoot、settling time、steady-state error 衡量。Derivative 對 noise 敏感，integral 可降低 steady-state error 但可能增加 overshoot。
