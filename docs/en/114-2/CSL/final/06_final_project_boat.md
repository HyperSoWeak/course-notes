# Final Project: Maze-Solving Boat

## Goal

Build a boat that can:

- keep the circuit away from water
- move quickly
- control speed and direction
- navigate autonomously
- solve mazes

## Materials

Limited materials:

- 2 mm acrylic board, `45 x 60 cm`
- NodeMCU x1
- L298N motor driver x1
- HC-SR04 range finder x3
- 18650 battery and case x2
- boost converter x2
- IMU x1
- breadboard
- at most three motors:
  - SG-90 servo motor
  - RF-370CB-11670 DC motor
  - N20 motor 1:10
  - HBCP2-DC2W water pump

Unlimited but should be conserved:

- wires
- threaded rods, screws, nuts, washers
- bearings
- rubber bands
- zip ties
- electrical tape
- super glue
- tack
- balloon
- plastic wrap
- switch

## Race Rules

- No remote control; the boat must run autonomously.
- If something fails, the boat may be moved back to the start, but time continues.
- If time ends before finishing, score is based on final position.
- Collisions cause punishment.
- Boat must be under `20 cm x 20 cm x 20 cm`.
- 3D-printed parts are limited to 200 g.
- Unapproved components are not allowed.

Tracks:

- Basic 1: straight line
- Basic 2: circle
- Bonus: maze

Awards:

- fastest boat
- smallest boat that passes Track 1 and 2
- best completion rate
- most innovative

## Design Checklist

Waterproofing:

- keep electronics above water
- secure wires and breadboard
- protect battery and converters
- use plastic wrap, electrical tape, or balloon when appropriate

Mechanical:

- hull must float
- center of mass should be low
- thrust should be symmetric or controllable
- acrylic frame should avoid stress concentration
- 3D prints must respect the 200 g limit

Control:

- L298N controls motor speed and direction
- HC-SR04 measures distance
- IMU can estimate heading or attitude
- differential thrust can steer the boat
- servo can steer a rudder or nozzle

Navigation:

- straight track: maintain heading
- circle track: turn using distance thresholds
- maze: wall following is the simplest strategy

## Wall-Following

```text
if front distance is too small:
    turn away from wall
else if side distance is too far:
    steer toward wall
else if side distance is too close:
    steer away from wall
else:
    go forward
```

## Tradeoffs

- DC motor / water pump: fast, but direction control needs differential thrust or steering.
- Servo: easy angle control, but not propulsion.
- N20 motor: compact, but needs a water propulsion mechanism.
- Pump: possible water jet, but waterproofing and power matter.
