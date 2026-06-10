# Orbits, Stabilizers, and Burnside's Lemma

## Group Actions

A group $G$ **acts on** a set $X$: each $g \in G$ gives a bijection $g: X \to X$, with:
- $e(x) = x$
- $(g_1 \circ g_2)(x) = g_2(g_1(x))$

## Orbits

**Orbit** $O_x = \{g(x) : g \in G\}$ (all positions reachable from $x$ under $G$).

**Lemma 136**: Orbits partition $X$.

**Lemma 137**: $i$ and $j$ are in the same orbit ↔ $\exists g \in G: g(i) = j$.

## Stabilizers

**Stabilizer** $G_x = \{g \in G : g(x) = x\}$ (elements of $G$ that fix $x$).

**Lemma 138**: $G_x$ is a subgroup of $G$.

> **Proof**: Nonempty ($e \in G_x$); closed ($(g_1 \circ g_2)(x) = g_2(g_1(x)) = x$); inverse ($g^{-1}(x) = x$). $\blacksquare$

**Lemma 139**: If $i, j$ are in the same orbit, then $|G_i| = |G_j|$.

## Orbit-Stabilizer Theorem (Thm 141)

$$|O_x| = \frac{|G|}{|G_x|} = [G : G_x]$$

> The left cosets of $G_x$ in $G$ are in bijection with elements of $O_x$.

## Burnside's Lemma (Thm 140)

Let $F(g) = \{x \in X : g(x) = x\}$ (the **fixed-point set** of $g$).

**The number of orbits equals the average number of fixed points**:

$$\text{\#orbits} = \frac{1}{|G|} \sum_{g \in G} |F(g)|$$

> **Memory aid**: "Average the number of elements each group member fixes."

---

## Past Exam Problems

### Burnside Computation: $\pi = (1\;6)(2\;5)(3\;4)$ (2018)

**Problem**: $G = \langle \pi \rangle = \{I, \pi\}$, $X = \{1,2,3,4,5,6\}$. Use Burnside's lemma to count orbits.

**Solution**:

$|G| = 2$, compute $|F(g)|$:
- $F(I) = X$ (identity fixes everything), $|F(I)| = 6$
- $F(\pi) = \emptyset$ ($\pi$ has no fixed points), $|F(\pi)| = 0$

$$\text{\#orbits} = \frac{1}{2}(6 + 0) = 3$$

Verified: orbits are $\{1,6\}$, $\{2,5\}$, $\{3,4\}$. $\blacksquare$

---

### Stabilizer is a Subgroup (2025)

**Problem**: Let $G_x = \{g \in G : g(x) = x \text{ for all } x \in X\}$. Prove $G_x$ is a subgroup.

**Solution**: (See the Lemma 138 proof above.) $\blacksquare$

---

### Burnside Application: Coloring Counting

**Example**: Color the 4 vertices of a square with 3 colors, where rotations are considered identical. How many essentially different colorings are there?

$G = \{r_0, r_{90}, r_{180}, r_{270}\}$ (rotation group, $|G| = 4$), $X$ = all $3^4 = 81$ colorings.

Compute $|F(g)|$:
- $|F(r_0)| = 3^4 = 81$ (identity fixes all)
- $|F(r_{90})| = 3^1 = 3$ (all 4 vertices must have the same color)
- $|F(r_{180})| = 3^2 = 9$ (opposite vertices must match: 2 pairs)
- $|F(r_{270})| = 3^1 = 3$ (same as $r_{90}$)

$$\text{\#orbits} = \frac{81 + 3 + 9 + 3}{4} = \frac{96}{4} = 24$$

---

### Orbit-Stabilizer: $|O_x| \cdot |G_x| = |G|$

**Example**: $G = S_4$ ($|G| = 24$) acting on $\{1,2,3,4\}$. For $x = 1$:

$O_1 = \{1,2,3,4\}$, $|O_1| = 4$, so $|G_1| = 24/4 = 6$.

($G_1$ = permutations fixing 1 = $S_{\{2,3,4\}} \cong S_3$, $|S_3| = 6$. ✓)
