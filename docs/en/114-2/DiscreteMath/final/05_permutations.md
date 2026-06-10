# Permutations

## Definition

A **permutation** is a bijection $f: \{1, 2, \ldots, n\} \to \{1, 2, \ldots, n\}$.

**Composition**: $(f \circ g)(i) = g(f(i))$ (apply $f$ first, then $g$).

**Symmetric group** $S_n$: all permutations on $\{1,\ldots,n\}$; $|S_n| = n!$.

Every permutation group is a subgroup of some $S_n$.

## Cycle Notation

A **$k$-cycle** $(i_1\; i_2\; \cdots\; i_k)$: $i_1 \mapsto i_2 \mapsto \cdots \mapsto i_k \mapsto i_1$, all others fixed.

- Order of a $k$-cycle = $k$
- Inverse: $(i_1\; i_2\; \cdots\; i_k)^{-1} = (i_k\; \cdots\; i_2\; i_1)$

**Transposition**: a 2-cycle $(i\;j)$.

## Cycle Decomposition

Every permutation decomposes into a product of **disjoint cycles**, essentially uniquely (up to order).

Fixed points ($f(i) = i$) are usually omitted.

**Example**: $\pi = \begin{pmatrix} 1&2&3&4&5&6 \\ 6&5&4&3&2&1 \end{pmatrix} = (1\;6)(2\;5)(3\;4)$

## Cycles as Products of Transpositions

$$(i_1\; i_2\; \cdots\; i_k) = (i_1\; i_2)(i_1\; i_3) \cdots (i_1\; i_k)$$

## Order of a Permutation

**Thm 131**: $o(g) = \text{lcm}$ of the lengths of all cycles in the cycle decomposition of $g$.

> Disjoint cycles commute, and a $k$-cycle has order $k$, so the permutation returns to identity exactly at the lcm.

**Example**: $o((1\;6)(2\;5)(3\;4)) = \text{lcm}(2,2,2) = 2$.

## Conjugates

**Thm 132**: Let $f$ have cycle decomposition $(\ldots)(\ldots)\cdots$ and $g$ be any permutation. Then $g^{-1} \circ f \circ g$ has cycle decomposition obtained by **applying $g$ to every symbol** in $f$'s cycles.

**Example**: $f = (1\;3)(2\;4)$, $g = \begin{pmatrix}1&2&3&4\\2&1&4&3\end{pmatrix}$.
$$g^{-1} \circ f \circ g = (g(1)\;g(3))(g(2)\;g(4)) = (2\;4)(1\;3)$$

---

## Past Exam Problems

### Permutation Orbits, Stabilizers, and Burnside (2018)

**Problem**: $\pi = (1\;6)(2\;5)(3\;4)$, $G = \langle \pi \rangle = \{I, \pi\}$, $X = \{1,2,3,4,5,6\}$.

Find orbits $O_1, \ldots, O_6$, stabilizers $G_1, \ldots, G_6$, and $F(I)$, $F(\pi)$.

**Solution**:

**Orbits** (elements $i$ and $\pi(i)$ are in the same orbit):
- $O_1 = O_6 = \{1, 6\}$
- $O_2 = O_5 = \{2, 5\}$
- $O_3 = O_4 = \{3, 4\}$

**Stabilizers** ($\pi$ has no fixed points, so only $I$ fixes any element):
- $G_i = \{I\}$ for all $i = 1, \ldots, 6$

**Burnside fixed-point sets**:
- $F(I) = \{1,2,3,4,5,6\}$, $|F(I)| = 6$
- $F(\pi) = \emptyset$, $|F(\pi)| = 0$

**Number of orbits** (by Burnside): $\frac{1}{2}(6 + 0) = 3$. ✓

---

### Order Computation Examples

**Example 1**: $f = (1\;2\;3)(4\;5)$: $o(f) = \text{lcm}(3, 2) = 6$.

**Example 2**: $f = (1\;2\;3\;4)(5\;6\;7)(8\;9)$: $o(f) = \text{lcm}(4, 3, 2) = 12$.

---

### Conjugacy is an Equivalence Relation (2025)

**Problem**: $f \sim h$ if $\exists g \in G: g^{-1} \circ f \circ g = h$. Prove conjugacy is an equivalence relation.

**Solution**: (See [Groups](./04_groups) for the full proof — reflexive via $g=e$; symmetric by taking $g^{-1}$; transitive by composing $g_1 \circ g_2$.) $\blacksquare$
