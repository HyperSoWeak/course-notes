# Control, Dynamics, PID, Stabilizer

## Core Ideas

`Dynamics` studies how forces affect motion. It differs from `statics`, which studies equilibrium, and `kinematics`, which studies motion without considering its causes.

The Lab04 stabilizer is a closed-loop control system:

```text
target orientation -> error -> PID controller -> PWM + L298N -> motor -> platform orientation
                                    ^                                      |
                                    |                                      |
                              MPU-6050 pitch <-----------------------------
```

## Open Loop vs Closed Loop

| Type | Definition | Strength | Weakness | Example |
|---|---|---|---|---|
| Open loop | No sensor feedback | Simple and cheap | Cannot correct disturbances | Timer, cheap soldering iron |
| Closed loop | Uses measured output as feedback | Corrects disturbances | Requires sensors and tuning | Stabilizer, thermostat |

Closed-loop control compares a setpoint with measured output:

```text
error = setPoint - measuredOutput
```

## Bang-Bang Control

Bang-bang control only has two actuator states, such as on/off or forward/backward. It is simple but tends to oscillate. Hysteresis or a dead band prevents rapid switching near a threshold.

It can be treated as an extreme P controller:

```text
Kp -> very large
Ki = 0
Kd = 0
```

## PID Terms

| Term | Uses | Effect | Risk |
|---|---|---|---|
| P, proportional | current error | Faster response | overshoot, oscillation, steady-state error |
| I, integral | accumulated past error | Removes steady-state error | windup, slow oscillation |
| D, derivative | rate of error change | Damping, less overshoot | noise sensitivity |

## Stabilizer Implementation

Hardware:

- ESP8266 / NodeMCU
- MPU-6050 / GY-521 IMU
- L298N motor driver
- DC motor
- battery, boost converter, laser-cut frame

L298N direction table:

| Behavior | IN1 | IN2 |
|---|---|---|
| Forward | HIGH | LOW |
| Backward | LOW | HIGH |
| Brake | LOW | LOW |

Code flow:

1. Initialize I2C and the MPU-6050 DMP.
2. Read quaternion data from FIFO.
3. Convert orientation to yaw / pitch / roll.
4. Use pitch to compute error.
5. Compute `P + I + D`.
6. Clamp output to `[-255, 255]`.
7. Use sign for direction and absolute value for PWM speed.

Key code:

```cpp
error = (ypr[1] * 180 / M_PI) - setPoint;
P = kp * error;
I += ki * error;
D = kd * ((error - prev_error) / dt);
PID = constrain(P + I + D, -255, 255);
speed = abs(PID);
```

The sign convention can differ between diagrams and code. What matters is that the sign maps consistently to motor direction.

## PID Tuning

Course method:

1. Set all gains to zero.
2. Increase `Kp` until oscillation starts.
3. Increase `Kd` until oscillation is damped.
4. Repeat P/D tuning until D no longer removes oscillation.
5. Increase `Ki` slowly only if steady-state error remains.
6. Iterate because parameters depend on motor, load, power, and structure.

Exam sentence:

```text
Kp reacts to current error, Kd damps fast changes, and Ki removes accumulated steady-state error but may cause windup.
```
