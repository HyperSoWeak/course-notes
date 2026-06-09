# Fabrication: Fusion 360, 3D Printing, Laser Cutting

## Fusion 360 Workflow

The course uses parametric modeling:

1. Insert canvases for side views.
2. Align front, right, and top planes.
3. Scale to real dimensions.
4. Create 2D sketches.
5. Use Offset, Line, and Spline to make closed profiles.
6. Use Revolve or Extrude to create solids.
7. Use Extrude Cut for button and USB holes.
8. Use Offset Plane for splitting.
9. Split Body into case and lid.
10. Project existing geometry for tongue and groove.
11. Add Fillet for ergonomics and stress reduction.
12. Use Rectangular Pattern to duplicate features.
13. Export `.3mf` or `.stl` in millimeters.

Key ideas:

- Parametric history lets you edit earlier features.
- `Join` adds material; `Cut` removes material.
- `Project` reuses existing geometry in a sketch.
- `Fillet` improves both feel and stress distribution.

## 3D Printing

Important constraints:

- Use millimeters.
- Support material affects printability and surface quality.
- Print orientation affects strength.
- Very thin features, coil springs, and cantilevers are risky.

## Laser Cutting

Most laser-cut objects are assembled from flat 2D parts. Joints are used to:

1. Break out of 2D.
2. Create moving parts.
3. Sometimes save material or exceed bed size.

## Kerf

`Kerf` is the width of material removed by the laser. If ignored, press-fit joints become too loose or too tight.

Practical workflow:

1. Measure material thickness with calipers.
2. Cut a test slot / comb.
3. Try different slot widths.
4. Make slot dimensions parametric.

## Laser Joint Patterns

| Pattern | Use | Note |
|---|---|---|
| Stacking | Create thickness or volume | Needs alignment |
| Frame / spacer | Maintain spacing | Prevents sliding |
| Press-fit | Friction-based fastening | Requires kerf test |
| Notch joint | Flat sheets crossing | Works when force direction is clear |
| Mortise and tenon | Positioning and load transfer | Laser-cut version is simplified |
| Finger joint | Box edges | Common, but often overused |
| Captured nut | Holds nuts inside sheet material | Useful with screws |
| Bayonet connector | Rotational lock | Good for removable parts |
| Rack and pinion | Motion conversion | Rotation to linear motion |
| Living hinge | Flexible sheet joint | Made with repeated slits |

## Design Principles

- 3D form comes from assembly.
- Joints must match load direction.
- Press-fit requires testing, not just nominal material thickness.
- Moving parts may need bearings, dampers, rollers, screws, or springs.
- Living hinges use slits to make rigid material flexible.
- Defocused laser heating can help bending, but parameters require experiments.

## Fabrication Loop

```text
CAD -> simulate / estimate -> fabricate -> test -> update parameters
```

For catapults, FEA can reveal high-stress regions around triggers and arms before printing.
