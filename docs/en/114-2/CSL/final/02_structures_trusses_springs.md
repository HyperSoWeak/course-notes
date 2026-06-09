# Structures, Trusses, Springs, Catapult

## Statics

`Statics` studies objects at rest and forces in equilibrium. For structures, the first question is not shape, but force path: where do loads enter, where do they leave, and which members carry them?

Design flow:

1. Identify expected forces.
2. Decide which structure carries each force.
3. Remove unnecessary material.
4. Avoid weak print orientation and stress concentration.

## Catapult Design Challenges

The Lab03 catapult needs:

1. Rigid elements that are strong but light.
2. A locking / trigger mechanism.
3. A spring that stores elastic potential energy.

Important constraints:

- Projectile diameter: 10 mm
- Ball weight: about 14 g
- Print volume: `70 mm x 70 mm x 70 mm`
- PLA only
- Launch must come from elastic potential energy in the material
- The catapult must stay grounded and remain whole

## Lever Law

Mechanical advantage:

```text
MA = FB / FA = a / b
```

A longer arm can increase launch distance, but it also increases bending and failure risk. Geometry must compensate for the longer lever.

## Trusses

The key structural rule is:

```text
Good lightweight structures use triangles.
```

Why triangles matter:

- They are geometrically stable.
- They prevent shape changes without requiring much material.
- They turn bending into tension and compression.
- They make force paths easier to inspect.

Truss design principles:

- Close open shapes with triangles.
- Prefer members loaded in tension or compression.
- Hollow space is acceptable when force paths are covered.
- Improve geometry before simply adding thickness.

## FDM 3D Printing Constraints

FDM prints layer by layer, so strength is directional.

Common weaknesses:

- Layer adhesion is weak under tension perpendicular to layers.
- Thin coil springs are hard to print and may need support.
- Thin cantilevers fail easily.
- One print orientation cannot optimize all connectors in a complex part.

Design advice:

- Align major tensile stress with layer planes when possible.
- Avoid very thin spring features.
- Use fillets to reduce stress concentration.
- Prototype or run FEA for trigger and spring deformation.

## Springs

A spring stores elastic potential energy. In a 3D-printed catapult, spring behavior can come from:

- bending beams
- compliant flexures
- leaf-spring-like structures
- deformation of the PLA body itself

Avoid plastic deformation, fracture, and designs that jump or break during launch.

## FEA Workflow

Finite Element Analysis divides geometry into a mesh and solves for response under material, constraint, and load assumptions.

Course workflow:

1. Set material, using ABS as an approximation if PLA is unavailable.
2. Enter Simulation workspace.
3. Add constraints.
4. Add loads, such as 2 N on the trigger.
5. Check degrees of freedom.
6. Generate mesh.
7. Solve.
8. Inspect safety factor, stress, and displacement.
9. Return to Design workspace and update parameters.

FEA is useful, but results depend on correct material properties, mesh, constraints, and loads.
