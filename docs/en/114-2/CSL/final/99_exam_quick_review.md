# Exam Quick Review

## Must-Know Terms

| Term | One-line definition |
|---|---|
| Statics | Studies bodies at rest and force equilibrium |
| Kinematics | Studies motion without considering its causes |
| Dynamics | Studies forces and their effects on motion |
| Open loop | Control without sensor feedback |
| Closed loop | Uses negative feedback to correct output |
| Bang-bang | On/off control, often with hysteresis |
| PID | P uses current error, I uses accumulated past error, D uses error trend |
| Truss | Triangle-based structure carrying tension and compression |
| FEA | mesh + material + constraints + loads -> stress / displacement / safety factor |
| Kerf | Material width removed by laser cutting |
| Press-fit | Interference fit held by normal force and friction |
| Living hinge | Slits make a rigid sheet flexible |
| Pneumatics | Compressed-gas actuation; springy because gas is compressible |
| Hydraulics | Liquid actuation; high force and less compressible |
| Piezo | Voltage and tiny deformation convert into each other |
| SMA | Heating returns the alloy to a memorized shape |
| Memex | Bush's vision for associative information systems |
| Sketchpad | Early interactive graphics and CAD system |
| Mother of All Demos | Demonstrated mouse, hypertext, and collaborative editing |

## PID

```text
error = setPoint - measuredOutput
output = Kp * error + Ki * sum(error) + Kd * d(error)/dt
```

- Higher `Kp`: faster response, higher overshoot / oscillation risk
- Higher `Ki`: lower steady-state error, higher windup / overshoot risk
- Higher `Kd`: lower overshoot, higher noise sensitivity

Tuning:

1. Start with P/I/D at zero.
2. Increase P until oscillation starts.
3. Add D to damp oscillation.
4. Add I slowly if steady-state error remains.

## Structures

- Force path first, material second
- Triangles prevent bending
- Long levers break easily
- A truss turns bending into tension and compression
- FDM layer direction affects strength
- Fillets reduce stress concentration

## Fabrication

- Fusion 360: sketch -> extrude/revolve -> cut/join -> fillet -> pattern -> export
- FEA: set constraints and loads, check DOF, mesh, solve, inspect safety factor / stress / displacement
- Laser cutting: 2D parts become 3D through assembly
- Press-fit requires kerf and material thickness tests
- Living hinges use repeated slits for flexibility

## Actuation

- Solenoid: finite-stroke linear motion
- Motor: continuous rotary motion
- Brushless motor: stationary coils and rotating magnets
- Friction: `Ff = μFn`
- Static friction is usually greater than kinetic friction
- Gears trade speed for torque
- Rack and pinion converts rotation to linear motion
- Worm gears provide large reduction and mechanical advantage

## HCI

```text
Bush -> Engelbart / Sutherland -> Xerox PARC -> Apple -> Microsoft
```

This is the historical influence order. The lecture often explains the same lineage backward from modern products.

- Bush: Memex and hypertext-like trails
- Engelbart: augmentation, mouse, hypertext, groupware
- Sutherland: Sketchpad and interactive graphics
- Xerox: Alto / Star, GUI, desktop metaphor, Ethernet, laser printing

## Answer Templates

### Why closed loop?

Real systems have disturbances and uncertain initial states. Sensor feedback lets the controller compare measured output with the setpoint and correct error over time.

### Why triangles in structures?

Triangles are geometrically stable. They route loads through members mainly in tension and compression, reducing bending and giving high stiffness with low weight.

### Why does kerf matter?

Laser cutting removes material. In press-fit or interlocking joints, even small kerf errors accumulate and make parts too loose or too tight.

### Why hydraulics for heavy machines?

Hydraulic fluid is nearly incompressible and can transmit large forces at high pressure, so it is more stable for heavy loads than compressed air.
