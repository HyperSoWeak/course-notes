# Trees

## Basic Definitions

- **Tree**: a connected acyclic undirected graph
- **Forest**: an acyclic undirected graph (each connected component is a tree)
- **Leaf**: a vertex of degree 1

### Equivalent Characterizations of Trees (Thm 83)

The following are equivalent for a graph $G$ with $n$ vertices:

1. $G$ is a tree
2. $G$ is connected and $|E| = n - 1$
3. $G$ is acyclic and $|E| = n - 1$
4. There is a **unique** path between any two vertices

## Forest Formula

**Thm**: Let $F = (V, E)$ be a forest and $\kappa$ the number of connected components (trees). Then

$$|V| = |E| + \kappa$$

> **Proof**: The $\kappa$ trees have $|V_1|, \ldots, |V_\kappa|$ vertices and $|E_1|, \ldots, |E_\kappa|$ edges respectively. Each satisfies $|V_i| = |E_i| + 1$. Summing:
> $$|V| = \sum_{i=1}^\kappa |V_i| = \sum_{i=1}^\kappa (|E_i| + 1) = |E| + \kappa \quad \blacksquare$$

## Rooted Trees

- **Root**: a designated vertex
- **Depth**: distance from a vertex to the root
- **Height**: maximum depth
- **$m$-ary tree**: each internal node has at most $m$ children
- **Full $m$-ary tree**: each internal node has exactly $m$ children

## Binary Trees

Each node has at most 2 children (left subtree $T_L$, right subtree $T_R$).

**Counting**: The number of ordered rooted binary trees with $n$ nodes is the Catalan number $C_n = \frac{1}{n+1}\binom{2n}{n}$. For $n = 4$: $C_4 = 14$.

### Total Path Length

$f(T)$ = sum of depths of all nodes.

**Thm**: If $T$ has $n$ nodes:

$$f(T) = f(T_L) + f(T_R) + n - 1$$

> **Proof**: For nodes in $T_L$: their depth in $T$ is depth in $T_L$ plus 1. Similarly for $T_R$. The root contributes depth 0. So:
> $$f(T) = \sum_{x \in T_L} (d(x, T_L) + 1) + \sum_{x \in T_R} (d(x, T_R) + 1) = f(T_L) + |T_L| + f(T_R) + |T_R|$$
> Since $|T_L| + |T_R| = n - 1$ (excluding the root):
> $$f(T) = f(T_L) + f(T_R) + n - 1 \quad \blacksquare$$

---

## Past Exam Problems

### [Must Know] Forest Formula $|V| = |E| + \kappa$ (2024, 2025, 2024s)

**Problem**: Let $F = (V, E)$ be a forest and $\kappa$ the number of trees. Prove $|V| = |E| + \kappa$.

**Solution**: For each tree $T_i$ in the forest ($i = 1, \ldots, \kappa$), $|V_i| = |E_i| + 1$ by the tree property. Summing over all trees:

$$|V| = \sum_{i=1}^{\kappa} |V_i| = \sum_{i=1}^{\kappa} (|E_i| + 1) = |E| + \kappa \quad \blacksquare$$

---

### Binary Tree Total Path Length (2018)

**Problem**: Define $f(T)$ as the sum of depths of all nodes in binary tree $T$. If $T_L, T_R$ are the left and right subtrees, prove $f(T) = f(T_L) + f(T_R) + n - 1$ where $n$ = number of nodes.

**Solution**: See the theorem proof above. $\blacksquare$

---

### 14 Rooted Ordered Binary Trees with 4 Nodes (2018)

**Problem**: Draw all 14 rooted ordered binary trees with 4 nodes.

**Answer**: $C_4 = \frac{1}{5}\binom{8}{4} = 14$. The structures include:

- Right-skewed chain (height 3)
- Left-skewed chain (height 3)
- Root with left/right subtrees of various combinations
- Balanced trees (height 2)

(Exam requires drawing all 14 explicitly — missing any or unclear drawings give 0 points.)
