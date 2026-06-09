# Final Project: Maze Solving Boat

## Goal

做一台 boat：

- keep circuit from water
- move as fast as possible
- control speed and direction
- autonomous navigation
- solve mazes

## Materials

Limited materials：

- Acrylic board, `2 mm 45 x 60 cm`
- NodeMCU x1
- L298N motor driver x1
- HC-SR04 range finder x3
- 18650 battery and case x2
- Boost converter x2
- IMU x1
- Breadboard
- 最多選 3 個 motors：
  - Servo motor SG-90
  - DC motor RF-370CB-11670
  - N20 motor 1:10
  - Water pump HBCP2-DC2W

Unlimited but should save resources：

- DuPont / single-core wires
- threaded rod, screws, nuts, washers
- bearings
- rubber bands
- zip ties
- electric tape
- super glue
- tack
- balloon
- plastic wrap
- switch

## Race Rules

- Boat 必須自主完成，不能遙控
- 中途狀況可搬回起點重跑，但時間不暫停
- 時間結束未到終點，以最後位置算成績
- 碰撞場地有 punishment
- 船體小於 `20 cm x 20 cm x 20 cm`
- boat 用 acrylic boards 與 3D print，3D print 最多 200 g
- 不可使用未允許的其他 components

Race：

- Basic 1：直線
- Basic 2：繞圈
- Bonus：迷宮

Awards：

- Fastest boat
- Smallest boat, 需通過 Track 1 & 2
- Best completion rate
- Most innovative

## Design Checklist

Waterproofing：

- electronics 遠離水面
- wires / breadboard 固定
- battery 和 boost converter 避免進水
- 可用 plastic wrap、electric tape、balloon 做隔水

Mechanical：

- hull 要浮得起，重心低
- motor / pump thrust 方向要對稱或可控
- acrylic frame 避免尖角 stress concentration
- 3D printed parts 注意 200 g 限制

Control：

- L298N 控 motor speed / direction
- HC-SR04 做距離感測
- IMU 可估方向或姿態
- 若用 differential thrust，左右馬達速度差可轉向
- 若用 servo，servo 可控制 rudder 或 nozzle angle

Autonomous navigation：

- Basic 直線：維持 heading，避免撞牆
- 繞圈：可用 distance threshold 判斷轉向
- 迷宮：可用 wall-following

## 補充策略：Wall-Following

這不是投影片指定演算法，而是一個可行的 autonomous maze solving strategy：

```text
if front distance is too small:
    turn away from wall
else if side distance too far:
    steer toward wall
else if side distance too close:
    steer away from wall
else:
    go forward
```

考試若問 design tradeoff：

- DC motor / water pump：速度快，但方向控制要靠左右差速或額外 steering
- Servo：控制角度方便，但不能直接提供 propulsion
- N20 motor：小、好固定，但水中 propulsion 需搭配機構
- Pump：可做 water jet，但防水與供電要注意
