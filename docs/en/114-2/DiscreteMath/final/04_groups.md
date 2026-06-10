# Groups

## Definition

A **group** $(G, \circ)$ requires:

1. **Closure**: $a \circ b \in G$
2. **Associativity**: $(a \circ b) \circ c = a \circ (b \circ c)$
3. **Identity**: $\exists e \in G$ such that $a \circ e = e \circ a = a$
4. **Inverses**: $\forall a \in G$, $\exists a^{-1}$ with $a \circ a^{-1} = a^{-1} \circ a = e$

**Abelian group**: $a \circ b = b \circ a$ for all $a, b$.

## Basic Properties

- Identity is unique; inverse is unique
- $(a^{-1})^{-1} = a$
- $(a \circ b)^{-1} = b^{-1} \circ a^{-1}$

## Subgroups

**Thm 107**: $H \subseteq G$ is a subgroup ↔ $H$ is nonempty + closed under $\circ$ + closed under inverses.

**Thm 108**: If $G$ is finite and $H$ is nonempty and closed under $\circ$, then $H$ is a subgroup.

## Cyclic Groups

**Cyclic group** $G = \langle g \rangle = \{g^k : k \in \mathbb{Z}\}$, where $g$ is the **generator**.

**Lemma 110**: Every cyclic group is abelian.

## Order of an Element

**$o(a)$ = minimum positive integer $n$ such that $a^n = e$** (or $\infty$ if none exists).

**Lemma 111**: If $a^k = e$, then $o(a) \mid k$.

> **Proof**: Let $o(a) = m$. Write $k = qm + r$, $0 \leq r < m$. Then $e = a^k = (a^m)^q \cdot a^r = a^r$. By minimality of $m$, $r = 0$, so $m \mid k$. $\blacksquare$

**Lemma 112**: Every element of a finite group has finite order.

## Cosets

$H \leq G$, $a \in G$: left coset $aH = \{a \circ h : h \in H\}$.

**Properties**: $|aH| = |H|$; cosets partition $G$.

## Lagrange's Theorem (Thm 117)

**If $G$ is a finite group and $H \leq G$, then $|H|$ divides $|G|$.**

$$[G:H] = \frac{|G|}{|H|}$$

> **Proof**: All cosets have equal size $|H|$ and partition $G$. $\blacksquare$

**Cor 118**: $o(a)$ divides $|G|$ (since $\langle a \rangle$ is a subgroup of order $o(a)$).

## Fermat-Euler Family

**Thm 119**: In any finite group, $a^{|G|} = e$.

**Thm 120 (Euler)**: If $\gcd(a, n) = 1$, then $a^{\varphi(n)} \equiv 1 \pmod{n}$.

**Thm 121 (Fermat's Little Theorem)**: If $p$ is prime, $p \nmid a$, then $a^{p-1} \equiv 1 \pmod{p}$.

## Prime-Order Groups

**Cor 122**: A group of prime order $p$ is cyclic.

> **Proof**: Take $a \in G$, $a \neq e$. By Cor 118, $o(a) \mid p$, so $o(a) \in \{1, p\}$. Since $a \neq e$, $o(a) = p$, so $G = \langle a \rangle$. $\blacksquare$

## Order of Powers

**Thm**: If $o(x) = n$ and $n = dq$, then $o(x^q) = d$.

> **Proof**: $(x^q)^d = x^n = e$, so $o(x^q) \mid d$. If $o(x^q) = d' < d$, then $x^{qd'} = e$, so $n = dq \mid qd'$, giving $d \mid d'$, contradicting $d' < d$. $\blacksquare$

## Homomorphisms and Isomorphisms

**Homomorphism** $f: (G,\circ) \to (H,\circ')$: $f(x \circ y) = f(x) \circ' f(y)$ for all $x, y \in G$.

- **Epimorphism**: $f$ is surjective
- **Isomorphism**: $f$ is bijective; write $G \cong H$
- **Automorphism**: isomorphism with $G = H$

### Key Properties

**Property 1**: $f(e_G) = e_H$

> **Proof**: $e_H \circ' f(x) = f(x) = f(e_G \circ x) = f(e_G) \circ' f(x)$; cancellation gives $e_H = f(e_G)$. $\blacksquare$

**Property 2**: $f(x^{-1}) = f(x)^{-1}$

> **Proof**: $e_H = f(e_G) = f(x \circ x^{-1}) = f(x) \circ' f(x^{-1})$, so $f(x^{-1})$ is the inverse of $f(x)$. $\blacksquare$

**Property 3**: $f(a^n) = [f(a)]^n$ for all $n \geq 1$ (by induction).

**Property 4**: Isomorphism preserves element orders.

> **Proof**: If $f$ is an isomorphism and $o(a) = n$, then $[f(a)]^n = f(a^n) = f(e_G) = e_H$, so $o(f(a)) \leq n$. If $o(f(a)) = k < n$, injectivity gives $a^k = e_G$, contradicting $o(a) = n$. $\blacksquare$

**Lemma 129**: Cyclic groups of the same order are isomorphic.

**Cor 130**: Every cyclic group of order $n > 1$ is isomorphic to $(\mathbb{Z}_n, +)$.

---

## Past Exam Problems

### [Must Know] Homomorphism: $f(x^{-1}) = f(x)^{-1}$ (2018, 2024, 2024s)

**Problem**: Let $f: (G, \circ) \to (H, \circ')$ be a homomorphism. Prove $f(x^{-1}) = f(x)^{-1}$.

**Solution**:

**Step 1**: Show $f(e_G) = e_H$.

For any $x \in G$: $e_H \circ' f(x) = f(x) = f(e_G \circ x) = f(e_G) \circ' f(x)$.  
By cancellation in $H$: $e_H = f(e_G)$.

**Step 2**: Conclude $f(x^{-1}) = f(x)^{-1}$.

$$e_H = f(e_G) = f(x \circ x^{-1}) = f(x) \circ' f(x^{-1})$$

Hence $f(x^{-1})$ is the inverse of $f(x)$ in $H$. $\blacksquare$

---

### [Must Know] Group of Prime Order is Cyclic (2018, 2024s)

**Problem**: Prove that every group of prime order is cyclic.

**Solution**: Let $|G| = p$ (prime). Take $a \in G$, $a \neq e$.

By Cor 118 (from Lagrange), $o(a)$ divides $|G| = p$.

Since $p$ is prime, $o(a) \in \{1, p\}$.

Since $a \neq e$, $o(a) \neq 1$, so $o(a) = p = |G|$.

Hence $G = \langle a \rangle$ is cyclic. $\blacksquare$

---

### [Must Know] Isomorphism Preserves Order (2025)

**Problem**: Let $f: G \to G'$ be an isomorphism. If $a \in G$ ($a \neq e_G$) has finite order $n$, prove $f(a) \in G'$ has the same order $n$.

**Solution**: Since $a^n = e_G$, by Property 3:
$$[f(a)]^n = f(a^n) = f(e_G) = e_{G'}$$

So $o(f(a)) \leq n$. Suppose $o(f(a)) = k < n$. Then $f(a^k) = [f(a)]^k = e_{G'}$. Since $f$ is injective, $a^k = e_G$, contradicting $o(a) = n > k$.

Thus $o(f(a)) = n$. $\blacksquare$

---

### Stabilizer is a Subgroup (2025)

**Problem**: A nonempty subset of $G$ is a subgroup iff it satisfies closure and inverse properties. Let $G_x = \{g \in G : g(x) = x \text{ for all } x \in X\}$. Prove $G_x$ is a subgroup.

**Solution**:
- **Nonempty**: $e \in G_x$ since $e(x) = x$.
- **Closure**: For $g_1, g_2 \in G_x$: $(g_1 \circ g_2)(x) = g_2(g_1(x)) = g_2(x) = x$, so $g_1 \circ g_2 \in G_x$.
- **Inverse**: For $g \in G_x$: $g^{-1}(x) = g^{-1}(g(x)) = x$, so $g^{-1} \in G_x$. $\blacksquare$

---

### Conjugacy is an Equivalence Relation (2025)

**Problem**: Define $f \sim h$ if $\exists g \in G: g^{-1} \circ f \circ g = h$. Prove conjugacy is an equivalence relation.

**Solution**:

**Reflexive**: Take $g = e$: $e^{-1} \circ f \circ e = f$, so $f \sim f$.

**Symmetric**: If $f \sim h$ via $g$, then $g \circ h \circ g^{-1} = f$, i.e., $(g^{-1})^{-1} \circ h \circ g^{-1} = f$, so $h \sim f$.

**Transitive**: If $g_1^{-1} f_1 g_1 = f_2$ and $g_2^{-1} f_2 g_2 = f_3$, set $g_3 = g_1 \circ g_2$:
$$g_3^{-1} f_1 g_3 = g_2^{-1} g_1^{-1} f_1 g_1 g_2 = g_2^{-1} f_2 g_2 = f_3 \quad \blacksquare$$

---

### Congruence mod $n$ is an Equivalence Relation (2024, 2024s)

**Problem**: Show that congruence modulo $n$ is an equivalence relation on $\mathbb{Z}$.

**Solution**: ($a \equiv b \pmod{n}$ iff $n \mid (a-b)$)

**Reflexive**: $a - a = 0 = 0 \cdot n$, so $a \equiv a$.

**Symmetric**: If $a \equiv b$, then $a - b = kn$, so $b - a = (-k)n$, giving $b \equiv a$.

**Transitive**: If $a \equiv b$ and $b \equiv c$, then $a - b = kn$ and $b - c = k'n$, so $a - c = (k+k')n$, giving $a \equiv c$. $\blacksquare$

---

### Order of $x^q$ (2024, 2024s)

**Problem**: Let $x \in G$ with $o(x) = n$, $n = dq$ ($d \geq 1$). Prove $o(x^q) = d$.

**Solution**: $(x^q)^d = x^{qd} = x^n = e$, so $o(x^q) \mid d$. If $o(x^q) = d' < d$, then $x^{qd'} = e$, so $n = dq \mid qd'$, giving $d \mid d'$, contradicting $d' < d$. Thus $o(x^q) = d$. $\blacksquare$
