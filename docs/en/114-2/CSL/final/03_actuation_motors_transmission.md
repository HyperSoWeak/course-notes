# Actuation, Motors, Transmission, Friction

## Actuation

Actuation converts energy into force or motion. The course covers small prototype actuators, heavy-duty systems, and micro actuation.

Common actuator types:

- electric motor
- solenoid
- pneumatic cylinder
- hydraulic cylinder
- piezo actuator
- shape-memory alloy
- electroactive polymer

## Electromagnets, Solenoids, Motors

Electromagnet:

- Current through a coil creates a magnetic field.
- It can be turned on and off.
- Force is weak at a distance and strong nearby, which can cause sticking.

Solenoid:

- Coil plus moving core.
- Converts electrical energy to finite-stroke linear motion.

Electric motor:

- Converts electromagnetic action into continuous rotation.
- Requires switching magnetic fields at the right time.

Brushed motor:

- Coils rotate with the rotor.
- Brushes and commutator switch current.
- Brush wear and noise are common issues.

Brushless motor:

- Permanent magnets rotate while coils stay stationary.
- Electronic commutation replaces brushes.

## Friction

Friction resists relative motion:

```text
Ff = μFn
```

- `Ff`: friction force parallel to the contact surface
- `μ`: coefficient of friction
- `Fn`: normal force

Important laws:

- Friction is proportional to load.
- Kinetic friction is approximately independent of sliding velocity.
- Ideal friction is independent of apparent contact area.

Key exam points:

- Static friction is usually greater than kinetic friction.
- A robot vehicle may fail to start because static friction is too high.
- Reducing weight reduces normal force and friction.
- Lubricants, low-friction coatings, and polishing reduce friction.

## Transmission

Transmission changes motion, force, speed, or torque.

Gear:

- Small gear driving large gear: lower speed, higher torque.
- Large gear driving small gear: higher speed, lower torque.

Rack and pinion:

- Converts rotary motion to linear motion.

Worm gear:

- Provides large reduction.
- Useful for heavy-duty electric actuators.
- Can have self-locking behavior.

## Pneumatics vs Hydraulics

| Technology | Medium | Strength | Weakness | Use case |
|---|---|---|---|---|
| Pneumatics | gas | light, clean, fast | compressible and springy | tires, quick push motion |
| Hydraulics | liquid | high force, stable | heavy, oily, leakage risk | heavy machinery |
| Electric actuator | motor + gear | easy control and integration | needs transmission | robots and automation |

Pneumatics and hydraulics are transmissions. The energy still comes from a compressor, pump, motor, or engine.

## Micro and Special Actuation

Piezo:

- Voltage causes tiny deformation.
- Mechanical stress can generate voltage.
- Fast and precise, but low displacement.

Slip-stick motor:

- Slow phase sticks.
- Fast phase slips.
- Accumulates tiny piezo movement into continued motion.

Bimetallic strip:

- Two metals expand differently under heat.
- The strip bends when heated.

Shape-memory alloy:

- Returns to a memorized shape when heated.

Electroactive polymer:

- Changes size or shape under an electric field.

Summary: special actuators are useful, but for high power and control, electric motors with gears are often the practical choice.
