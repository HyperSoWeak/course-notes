# Discrete Mathematics Final — Overview & Quick Reference

## Theorem Quick Reference

### Graph Theory

| Theorem | Statement |
|---------|-----------|
| **Euler Circuit** | Undirected: Euler circuit ↔ connected + all vertices even degree |
| **Euler Trail** | Undirected: Euler trail ↔ connected + exactly 2 odd-degree vertices |
| **Directed Euler** | Directed Euler circuit ↔ strongly connected + in-deg = out-deg at every vertex |
| **Euler's Formula** | $v - e + r = 2$ ($r$ = faces in planar embedding) |
| **Edge Bound** | Simple connected planar graph: $e \leq 3v - 6$ (when $e > 2$) |
| **Bipartite Bound** | $\|E\| \leq \lfloor \|V\|^2/4 \rfloor$; $\|E\| > (\|V\|/2)^2 \Rightarrow$ not bipartite |
| **Coloring vs Clique** | $\chi(G) \geq \omega(G)$ but not always equal (odd cycle counterexample: $\chi=3$, $\omega=2$) |

### Trees & Forests

| Theorem | Statement |
|---------|-----------|
| **Tree** | Connected acyclic graph; $n$ nodes has exactly $n-1$ edges |
| **Forest** | $\|V\| = \|E\| + \kappa$ ($\kappa$ = number of trees) |
| **Path Length** | $f(T) = f(T_L) + f(T_R) + n - 1$ |

### Rings

| Theorem | Statement |
|---------|-----------|
| **Thm 102** | Unity is unique; multiplicative inverse is unique |
| **Cor 99** | $a \cdot z = z \cdot a = z$ ($z$ = additive identity) |
| **Thm 104** | Every field is an integral domain |
| **Thm 105** | Every finite integral domain is a field |
| **CRT** | System $x \equiv a_i \pmod{n_i}$ with pairwise coprime $n_i$ has unique solution mod $N = \prod n_i$ |

### Groups

| Theorem | Statement |
|---------|-----------|
| **Thm 107/108** | $H \leq G$ ↔ nonempty + closed + closed under inverse; for finite: closure suffices |
| **Lemma 111** | $a^k = e \Rightarrow o(a) \mid k$ |
| **Thm 117 (Lagrange)** | $\|H\|$ divides $\|G\|$ |
| **Cor 118** | $o(a)$ divides $\|G\|$ |
| **Thm 119** | $a^{\|G\|} = e$ in any finite group |
| **Thm 120 (Euler)** | $a^{\varphi(n)} \equiv 1 \pmod{n}$ for $\gcd(a,n)=1$ |
| **Thm 121 (Fermat)** | $a^{p-1} \equiv 1 \pmod{p}$ for prime $p$ |
| **Cor 122** | Group of prime order is cyclic |
| **Lemma 129** | Cyclic groups of the same order are isomorphic |
| **Cor 130** | Cyclic group of order $n > 1$ is isomorphic to $(\mathbb{Z}_n, +)$ |
| **Homomorphism** | $f(x \circ y) = f(x) \circ' f(y)$; $f(e_G) = e_H$; $f(x^{-1}) = f(x)^{-1}$ |

### Permutations

| Theorem | Statement |
|---------|-----------|
| **Thm 131** | $o(g) = \text{lcm}$ of cycle lengths |
| **Thm 132** | $g^{-1} \circ f \circ g$: apply $g$ to each symbol in the cycle decomposition of $f$ |
| **Conjugacy** | $f \sim h$ ↔ $\exists g: g^{-1} \circ f \circ g = h$; conjugacy is an equivalence relation |

### Orbits & Burnside

| Theorem | Statement |
|---------|-----------|
| **Thm 140 (Burnside)** | \#orbits $= \frac{1}{\|G\|}\sum_{g \in G}\|F(g)\|$, $F(g) = \{x: g(x)=x\}$ |
| **Thm 141 (Orbit-Stabilizer)** | $\|O_x\| = \|G\| / \|G_x\|$ |

---

## Past Exam Questions by Topic

### High Frequency

| Problem | Years |
|---------|-------|
| Ring unity is unique | 2024, 2025, 2024s |
| Forest $\|V\| = \|E\| + \kappa$ | 2024, 2025, 2024s |
| $\chi(G)$ vs max clique (counterexample: odd cycle) | 2024, 2025, 2024s |
| Homomorphism: $f(x^{-1}) = f(x)^{-1}$ | 2018, 2024, 2024s |
| Group of prime order is cyclic | 2018, 2024s |
| Order: if $o(x)=n=dq$, then $o(x^q)=d$ | 2024, 2024s |
| CRT: solve $x^2 \equiv 1 \pmod{105}$ | 2024, 2024s |
| Directed Euler circuit ↔ strongly connected | 2018 |
| Planar graph $e \leq 3v-6$ | 2018 |

### Other Topics Seen

| Problem | Years |
|---------|-------|
| $\|E\| > (\|V\|/2)^2 \Rightarrow$ not bipartite | 2024, 2024s |
| Stabilizer is a subgroup | 2025 |
| Isomorphism preserves element order | 2025 |
| Conjugacy is an equivalence relation | 2025 |
| $(2^U, \Delta, \cap)$ is a ring with unity | 2025 |
| Generators of $\mathbb{Z}_{14}^*$ | 2024, 2024s |
| Burnside computation | 2018 |
| Binary tree total path length | 2018 |
| Identify groups | 2024, 2024s |

---

## Key Formulas

$$\varphi(n) = n\prod_{p \mid n}\left(1 - \frac{1}{p}\right)$$

$$\text{CRT: } x = \sum_{i=1}^k a_i \cdot m_i \cdot (m_i^{-1} \bmod n_i) \pmod{N}$$

$$\text{Burnside: \#orbits} = \frac{1}{|G|}\sum_{g \in G}|F(g)|$$

$$o(\text{permutation}) = \text{lcm}(\text{cycle lengths})$$
