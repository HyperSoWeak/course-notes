# Rings

## Definition

A **ring** $(R, +, \cdot)$ requires:

1. $(R, +)$ is an abelian group (additive identity $z$, additive inverse $-a$)
2. $\cdot$ is closed and associative
3. Distributivity: $a(b+c) = ab + ac$ and $(a+b)c = ac + bc$

**Commutative ring**: $ab = ba$ for all $a, b$.

**Ring with unity**: there exists $u \neq z$ such that $au = ua = a$ for all $a$.

**Unit**: $a$ is a unit if $\exists b: ab = ba = u$ (i.e., $a$ has a multiplicative inverse $a^{-1}$).

## Basic Properties

**Cor 99**: $a \cdot z = z \cdot a = z$ (the additive identity is also a multiplicative zero).

**Cor 101**:
- $-(-a) = a$
- $a \cdot (-b) = (-a) \cdot b = -(ab)$
- $(-a)(-b) = ab$

### Thm 102: Uniqueness of Unity and Inverse

**(1) Unity is unique.**

> **Proof**: Suppose $u_1, u_2$ are both unities. For any $x \in R$: $xu_1 = u_1 x = x$ and $xu_2 = u_2 x = x$.
> Set $x = u_2$: $u_2 u_1 = u_2$.
> Set $x = u_1$: $u_1 u_2 = u_1$.
> Hence $u_1 = u_1 u_2 = u_2 u_1 = u_2$. $\blacksquare$

**(2) The multiplicative inverse of a unit is unique.**

> **Proof**: If $ab = ba = u$ and $ac = ca = u$, then $b = bu = b(ac) = (ba)c = uc = c$. $\blacksquare$

**Lemma 103**: A unit cannot be a proper zero divisor.

## Special Classes

| Class | Requirements |
|-------|-------------|
| **Integral domain** | Commutative ring + unity + no proper zero divisors |
| **Field** | Commutative ring + unity + every nonzero element is a unit |

- **Proper zero divisor**: $a \neq z$ and $\exists b \neq z$ with $ab = z$

**Thm 104**: Every field is an integral domain.

**Thm 105**: Every finite integral domain is a field.

## $\mathbb{Z}_n$

$\mathbb{Z}_n = \{0, 1, \ldots, n-1\}$ with addition and multiplication mod $n$.

- $a$ has multiplicative inverse in $\mathbb{Z}_n$ iff $\gcd(a, n) = 1$
- $\mathbb{Z}_n^* = \{a \in \mathbb{Z}_n : \gcd(a,n)=1\}$, $|\mathbb{Z}_n^*| = \varphi(n)$

## Chinese Remainder Theorem (CRT)

If $n_1, n_2, \ldots, n_k$ are pairwise coprime, $N = \prod n_i$, $m_i = N/n_i$, then the system

$$x \equiv a_1 \pmod{n_1},\; \ldots,\; x \equiv a_k \pmod{n_k}$$

has a unique solution mod $N$:

$$x \equiv \sum_{i=1}^k a_i \cdot m_i \cdot (m_i^{-1} \bmod n_i) \pmod{N}$$

where $m_i^{-1} \bmod n_i$ is computed using the extended Euclidean algorithm.

---

## Past Exam Problems

### [Must Know] Ring Unity is Unique (2024, 2025, 2024s)

**Problem**: Let $(R, +, \cdot)$ be a ring with unity. Prove the unity is unique.

**Solution**: Suppose $u_1$ and $u_2$ are both unities. For any $x \in R$:
$$xu_1 = u_1 x = x, \quad xu_2 = u_2 x = x$$

Take $x = u_2$: $u_2 u_1 = u_2$.  
Take $x = u_1$: $u_1 u_2 = u_1$.  
Hence $u_1 = u_1 u_2 = u_2 u_1 = u_2$. $\blacksquare$

---

### CRT: Solve $x^2 \equiv 1 \pmod{105}$ (2024, 2024s)

**Problem**: Use CRT to find all solutions to $x^2 \equiv 1 \pmod{105}$.

**Solution**:

Since $105 = 3 \times 5 \times 7$, decompose:
$$\begin{cases} x^2 \equiv 1 \pmod{3} \Rightarrow x \equiv 1 \text{ or } 2 \pmod{3} \\ x^2 \equiv 1 \pmod{5} \Rightarrow x \equiv 1 \text{ or } 4 \pmod{5} \\ x^2 \equiv 1 \pmod{7} \Rightarrow x \equiv 1 \text{ or } 6 \pmod{7} \end{cases}$$

Set $m_1 = 35, m_2 = 21, m_3 = 15$. Compute inverses:
- $35^{-1} \equiv 2 \pmod{3}$ → $C_1 = 35 \times 2 = 70$
- $21^{-1} \equiv 1 \pmod{5}$ → $C_2 = 21$
- $15^{-1} \equiv 1 \pmod{7}$ → $C_3 = 15$

8 combinations yield 8 solutions mod 105:

$$x \equiv 1, 29, 34, 41, 64, 71, 76, 104 \pmod{105}$$

(Each combination of $(a_1, a_2, a_3)$ choosing from the solutions above gives $x = a_1 C_1 + a_2 C_2 + a_3 C_3 \bmod 105$.) $\blacksquare$

---

### $(2^U, \Delta, \cap)$ is a Ring with Unity (2025)

**Problem**: Let $U$ be a finite set, $R = 2^U$, with $+$ = symmetric difference $\Delta$ and $\cdot$ = intersection $\cap$. Prove $(R, \Delta, \cap)$ is a ring with unity.

**Solution**: For any $A, B, C \in 2^U$:

1. **$(R, \Delta)$ is abelian group**: commutative ($A \Delta B = B \Delta A$), associative, identity $\emptyset$ ($A \Delta \emptyset = A$), inverse: $A \Delta A = \emptyset$ so $-A = A$.
2. **Associativity of $\cap$**: $A \cap (B \cap C) = (A \cap B) \cap C$.
3. **Distributivity**: $A \cap (B \Delta C) = (A \cap B) \Delta (A \cap C)$.
4. **Unity**: $U$ is the unity element, since $A \cap U = A$.

Hence $(2^U, \Delta, \cap)$ is a ring with unity. $\blacksquare$

---

### Identify Groups (2024, 2024s)

**Problem**: Which of the following are groups? Provide reasons for non-groups.
1. $(\mathbb{Z}_{10}, +)$
2. $(\mathbb{Z}_{12}^*, +)$
3. $(\mathbb{Z}_{14}, \times)$
4. $(\mathbb{Z}_{15}^*, \times)$
5. $(\mathbb{Z}_8, -)$

**Solution**:

1. $(\mathbb{Z}_{10}, +)$: **Group**. Abelian group of order 10.
2. $(\mathbb{Z}_{12}^*, +)$: **Not a group**. Not closed under addition: $7 + 11 = 18 \equiv 6 \notin \mathbb{Z}_{12}^*$.
3. $(\mathbb{Z}_{14}, \times)$: **Not a group**. Element 2 has no inverse ($\gcd(2,14) = 2 \neq 1$).
4. $(\mathbb{Z}_{15}^*, \times)$: **Group**. All elements coprime to 15 form a multiplicative group.
5. $(\mathbb{Z}_8, -)$: **Not a group**. Subtraction is not associative: $(7-5)-1 = 1 \neq 7-(5-1) = 3$.

---

### Generators of $\mathbb{Z}_{14}^*$ (2024, 2024s)

**Problem**: Write all elements of $\mathbb{Z}_{14}^*$ and find its generators.

**Solution**:

$\mathbb{Z}_{14}^* = \{1, 3, 5, 9, 11, 13\}$, $|\mathbb{Z}_{14}^*| = \varphi(14) = 6$.

Powers of 3 mod 14: $3, 9, 27 \equiv 13, 39 \equiv 11, 33 \equiv 5, 15 \equiv 1$ — cycles through all 6 elements. **3 is a generator**.

Powers of 5 mod 14: $5, 11, 13, 9, 3, 1$ — also all 6 elements. **5 is a generator**.

(Number of generators = $\varphi(6) = 2$, confirming exactly 3 and 5.)
