# Graph Theory

## Basic Definitions

- **Graph** $G = (V, E)$: $V$ = vertex set, $E$ = edge set
- **Degree** $\deg(v)$: number of edges incident to $v$; Handshaking: $\sum_v \deg(v) = 2|E|$
- **Simple graph**: no self-loops, no multi-edges
- **Bipartite graph** $G = (V_1, V_2, E)$: $E \subseteq V_1 \times V_2$

## Euler Paths and Circuits

### Undirected Graphs

| Condition | Existence |
|-----------|-----------|
| Connected + all vertices even degree | Euler **circuit** |
| Connected + exactly 2 odd-degree vertices | Euler **trail** |

### Directed Graphs

- Has **directed Euler circuit** ↔ strongly connected AND every vertex has in-degree = out-degree
- Strongly connected: directed path from $a$ to $b$ for all $a \neq b$

## Planar Graphs

**Euler's Formula**: for a connected planar graph, $v$ = vertices, $e$ = edges, $r$ = faces:

$$v - e + r = 2$$

**Edge bound** (Thm): for a simple connected planar graph with $e > 2$:

$$e \leq 3v - 6$$

> **Proof**: Every face has boundary $\geq 3$ edges; each edge borders $\leq 2$ faces.
> $$2e \geq 3r \Rightarrow r \leq \frac{2e}{3}$$
> Substituting into Euler: $2 = v - e + r \leq v - e + \frac{2e}{3} = v - \frac{e}{3}$, so $e \leq 3v - 6$.

## Bipartite Graphs and Edge Count

**Thm (non-bipartite criterion)**: For a simple undirected graph $G = (V, E)$,

$$|E| > \left(\frac{|V|}{2}\right)^2 \Rightarrow G \text{ is not bipartite}$$

> **Proof**: If bipartite, $|V_1| = m$, $|V_2| = n - m$, then $|E| \leq m(n-m) \leq (n/2)^2$. Contradiction.

## Chromatic Number and Cliques

- **Chromatic number** $\chi(G)$: minimum colors to color $G$ (adjacent vertices get different colors)
- **Clique**: a complete subgraph; maximum clique size = $\omega(G)$

**$\chi(G) \geq \omega(G)$** always.

**But $\chi(G) = \omega(G)$ is NOT always true!**

> **Counterexample**: Odd cycle $C_5$ (pentagon).
> - $\chi(C_5) = 3$ (odd cycle, cannot 2-color)
> - $\omega(C_5) = 2$ (no triangle in a cycle)

---

## Past Exam Problems

### [Must Know] $|E| > (|V|/2)^2 \Rightarrow$ Not Bipartite (2024, 2024s)

**Problem**: Let $G = (V, E)$ be a loop-free undirected graph. Prove that a graph with $|E| > \left(\frac{|V|}{2}\right)^2$ cannot be bipartite.

**Solution**:

If $G$ were bipartite, $G = (V_1, V_2, E)$ with $|V_1| = m$, $|V_2| = n - m$ where $n = |V|$.

Then $|E| \leq |V_1| \cdot |V_2| = m(n-m)$.

The product $m(n-m)$ is maximized at $m = n/2$, giving $m(n-m) \leq (n/2)^2 = (|V|/2)^2$.

So $|E| > (|V|/2)^2$ implies $|E| > m(n-m)$, a contradiction. $\blacksquare$

---

### [Must Know] $\chi(G)$ vs Maximum Clique (2024, 2025, 2024s)

**Problem**: Let $G = (V, E)$ be an undirected graph, $\chi(G)$ the chromatic number. A clique is a complete subgraph. Prove or disprove that $\chi(G)$ equals the size of the maximum clique.

**Solution**: The statement is **false**. Counterexample:

Take $G = C_5$ (a cycle with 5 vertices: $v_1 - v_2 - v_3 - v_4 - v_5 - v_1$).

- $\chi(C_5) = 3$: An odd cycle is not bipartite, so 2 colors are insufficient. 3 colors suffice (e.g., 1,2,1,2,3).
- Maximum clique size = 2: Every edge is a clique of size 2, but no triangle exists in a cycle.

Thus $\chi(C_5) = 3 \neq 2 =$ maximum clique size. $\blacksquare$

---

### Directed Euler Circuit and Strong Connectivity (2018)

**Problem**: Prove or disprove:
1. If a directed graph has a directed Euler circuit, it is strongly connected.
2. The converse holds.

**Solution**:

1. **True**: If $G$ has a directed Euler circuit $C$, then for any $x \neq y$, the circuit passes through both $x$ and $y$, providing directed paths $x \to y$ and $y \to x$. So $G$ is strongly connected.

2. **False**: Counterexample: a directed graph that is strongly connected but has a vertex with in-degree $\neq$ out-degree (so no Euler circuit). For instance, vertices $a, b, c, d$ with $a \to b \to c \to d \to a$ and $a \to c$ — strongly connected but $c$ has in-degree 2, out-degree 1. $\blacksquare$

---

### Planar Graphs: $G$ and $\bar{G}$ Can't Both Be Planar for $|V| \geq 11$ (2018)

**Problem**: Let $G = (V, E)$ with $|V| \geq 11$. Prove that $G$ and its complement $\bar{G}$ cannot both be planar.

**Solution**:

Let $|V| = n \geq 11$, $e = |E|$, $e' = |\bar{E}|$. Note $e + e' = \binom{n}{2} = \frac{n(n-1)}{2}$.

If both are planar: $e \leq 3n - 6$ and $e' \leq 3n - 6$, so $e + e' \leq 6n - 12$.

For $n = 11$: $e + e' = 55$ but $6(11) - 12 = 54 < 55$. Contradiction. $\blacksquare$
