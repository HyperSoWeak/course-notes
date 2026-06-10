# 群（Groups）

## 定義

**群** $(G, \circ)$ 需滿足：

1. **封閉**：$a \circ b \in G$
2. **結合律**：$(a \circ b) \circ c = a \circ (b \circ c)$
3. **單位元**：存在 $e \in G$ 使得 $a \circ e = e \circ a = a$
4. **逆元**：對每個 $a \in G$，存在 $a^{-1}$ 使得 $a \circ a^{-1} = a^{-1} \circ a = e$

**Abelian group（交換群）**：若 $a \circ b = b \circ a$。

## 基本性質

- **單位元唯一**：若 $e_1, e_2$ 都是單位元，$e_1 = e_1 \circ e_2 = e_2$
- **逆元唯一**：若 $b, c$ 都是 $a$ 的逆元，$b = b \circ e = b \circ (a \circ c) = (b \circ a) \circ c = e \circ c = c$
- $(a^{-1})^{-1} = a$
- $(a \circ b)^{-1} = b^{-1} \circ a^{-1}$

## 子群（Subgroup）

**Thm 107（子群判定）**：$H \subseteq G$ 是子群 ↔ $H$ 非空 + 對 $\circ$ 封閉 + 對取逆封閉

**Thm 108（有限子群）**：若 $G$ 有限，$H$ 非空且對 $\circ$ 封閉，則 $H$ 是子群（封閉自動保證逆元）。

## 循環群（Cyclic Group）

**循環群** $G = \langle g \rangle = \{g^k : k \in \mathbb{Z}\}$，其中 $g$ 為**生成元**。

**Lemma 110**：循環群是 abelian group。

## 元素的階（Order）

**$o(a) = $ 最小正整數 $n$ 使得 $a^n = e$**（不存在則 $o(a) = \infty$）

**Lemma 111**：若 $a^k = e$，則 $o(a) \mid k$。

> **證明**：設 $o(a) = m$。做 $k$ 除以 $m$ 的帶餘除法：$k = qm + r$，$0 \leq r < m$。
> $$e = a^k = a^{qm+r} = (a^m)^q \cdot a^r = e^q \cdot a^r = a^r$$
> 由 $m$ 的最小性，$r = 0$，故 $m \mid k$。$\blacksquare$

**Lemma 112**：有限群中每個元素的階有限。

## 陪集（Cosets）

$H$ 是 $G$ 的子群，$a \in G$：

$$aH = \{a \circ h : h \in H\} \quad \text{（左陪集）}$$

**性質**：$|aH| = |H|$；所有左陪集劃分 $G$；任意兩個陪集要麼相等要麼不相交。

## Lagrange 定理（Thm 117）

**若 $G$ 為有限群，$H \leq G$，則 $|H|$ 整除 $|G|$。**

$$[G:H] = \frac{|G|}{|H|} \quad \text{（指標，index）}$$

> **證明**：所有左陪集大小相等（均等於 $|H|$）且劃分 $G$，故 $|G| = [G:H] \cdot |H|$。$\blacksquare$

**Cor 118**：若 $G$ 有限，則 $o(a)$ 整除 $|G|$（因 $\langle a \rangle$ 是大小為 $o(a)$ 的子群）。

## Fermat-Euler 定理族

**Thm 119**（一般）：有限群 $G$ 中，$a^{|G|} = e$。

**Thm 120（Euler）**：若 $\gcd(a, n) = 1$，則 $a^{\varphi(n)} \equiv 1 \pmod{n}$。

**Thm 121（Fermat 小定理）**：若 $p$ 為質數，$a \not\equiv 0 \pmod{p}$，則 $a^{p-1} \equiv 1 \pmod{p}$。

> 以上兩個均由 Thm 119 加上 $G = \mathbb{Z}_n^*$，$|G| = \varphi(n)$ 推得。

## 素數階群

**Cor 122**：階為質數 $p$ 的群是循環群。

> **證明**：取 $a \in G$，$a \neq e$。由 Cor 118，$o(a)$ 整除 $|G| = p$，故 $o(a) = 1$（只有 $e$ 的階為 1）或 $o(a) = p$。因 $a \neq e$，故 $o(a) = p$，$G = \langle a \rangle$ 是循環群。$\blacksquare$

## 元素階的進一步性質

**Thm**：若 $o(x) = n$，$n = dq$（$d, q \geq 1$），則 $o(x^q) = d$。

> **證明**：
> - $(x^q)^d = x^{qd} = x^n = e$，故 $o(x^q) \mid d$（由 Lemma 111）。
> - 設 $o(x^q) = d' < d$，則 $x^{qd'} = e$，故 $o(x) = n$ 整除 $qd'$，即 $dq \mid qd'$，故 $d \mid d'$。但 $d' < d$，矛盾。
> - 因此 $o(x^q) = d$。$\blacksquare$

## 同態（Homomorphism）與同構（Isomorphism）

設 $(G, \circ)$ 和 $(H, \circ')$ 為兩個群。

**Homomorphism**：$f: G \to H$ 滿足 $f(x \circ y) = f(x) \circ' f(y)$ 對所有 $x, y \in G$。

- **Epimorphism（滿射同態）**：$f$ 是 onto
- **Isomorphism（同構）**：$f$ 是 bijection
- **Automorphism（自同構）**：同構且 $G = H$

### 同態的基本性質

**性質 1**：$f(e_G) = e_H$

> **證明**：$e_H \circ' f(x) = f(x) = f(e_G \circ x) = f(e_G) \circ' f(x)$。由 $H$ 中消去律，$e_H = f(e_G)$。$\blacksquare$

**性質 2**：$f(x^{-1}) = f(x)^{-1}$

> **證明**：$e_H = f(e_G) = f(x \circ x^{-1}) = f(x) \circ' f(x^{-1})$，故 $f(x^{-1})$ 是 $f(x)$ 的逆元。$\blacksquare$

**性質 3**：$f(a^n) = [f(a)]^n$（對所有 $a \in G$，$n \geq 1$）

> **證明**：歸納法。$n=1$ 顯然。假設 $n=k$ 成立，則 $f(a^{k+1}) = f(a^k \circ a) = f(a^k) \circ' f(a) = [f(a)]^k \circ' f(a) = [f(a)]^{k+1}$。$\blacksquare$

**性質 4**：同構保留元素的階。

> **證明**：若 $f$ 是同構且 $o(a) = n$，則 $f(a)^n = f(a^n) = f(e_G) = e_H$，故 $o(f(a)) \leq n$。若 $o(f(a)) = k < n$，由 $f$ 是單射，$f(a)^k = e_H \Rightarrow f(a^k) = e_H \Rightarrow a^k = e_G$，矛盾（$o(a)=n>k$）。故 $o(f(a)) = n$。$\blacksquare$

### 同構的性質

$G \cong H$ 表示 $G$ 與 $H$ 同構（isomorphic）。

**Lemma 129**：相同階的循環群同構。

> **證明**：設 $G = \langle g \rangle$，$H = \langle h \rangle$ 為同階循環群。定義 $f: G \to H$，$f(g^i) = h^i$。
> - $f(g^i \circ_g g^j) = f(g^{i+j}) = h^{i+j} = h^i \circ_h h^j = f(g^i) \circ_h f(g^j)$（同態）
> - $f(g) = h$ 生成 $H$，故 $f$ 是 bijection。$\blacksquare$

**Cor 130**：階 $n > 1$ 的循環群同構於 $(\mathbb{Z}_n, +)$。

---

## 考古題

### 【必考】Homomorphism：$f(x^{-1}) = f(x)^{-1}$（2018、2024、2024s）

**題目**：設 $f: (G, \circ) \to (H, \circ')$ 是同態。證明 $f(x^{-1}) = f(x)^{-1}$。

**解答**：

**Step 1**：先證 $f(e_G) = e_H$。

對任意 $x \in G$：
$$e_H \circ' f(x) = f(x) = f(e_G \circ x) = f(e_G) \circ' f(x)$$
由消去律，$e_H = f(e_G)$。

**Step 2**：再證 $f(x^{-1}) = f(x)^{-1}$。

$$e_H = f(e_G) = f(x \circ x^{-1}) = f(x) \circ' f(x^{-1})$$

故 $f(x^{-1})$ 是 $f(x)$ 在 $H$ 中的逆元，即 $f(x^{-1}) = f(x)^{-1}$。$\blacksquare$

---

### 【必考】素數階群為循環群（2018、2024s）

**題目**：證明每個素數階群是循環群。

**解答**：設 $|G| = p$（質數），取 $a \in G$，$a \neq e$。

由 Cor 118（Lagrange 推論），$o(a)$ 整除 $|G| = p$。

由於 $p$ 是質數，$o(a) \in \{1, p\}$。

因為 $a \neq e$，故 $o(a) \neq 1$，所以 $o(a) = p = |G|$。

因此 $G = \langle a \rangle$ 是循環群。$\blacksquare$

---

### 【必考】同構保留元素階（2025）

**題目**：設 $f: G \to G'$ 是同構，$a \in G$（$a \neq e_G$）且 $o(a) = n$。證明 $f(a) \in G'$ 的階也是 $n$。

**解答**：

因為 $a^n = e_G$，由性質 3：
$$[f(a)]^n = f(a^n) = f(e_G) = e_{G'}$$

故 $o(f(a)) \leq n$。設 $o(f(a)) = k$。

若 $k < n$，則 $[f(a)]^k = e_{G'}$，即 $f(a^k) = e_{G'}$。因 $f$ 是單射，$a^k = e_G$，但這與 $o(a) = n > k$ 矛盾。

故 $o(f(a)) = n$。$\blacksquare$

---

### 穩定子是子群（2025）

**題目**：設群 $G$ 作用在集合 $X$ 上。穩定子 $G_x = \{g \in G : g(x) = x,\; \forall x \in X\}$。若「$H$ 是子群」等價於「非空 + 封閉 + 逆元封閉」，證明 $G_x$ 是子群。

**解答**：

- **非空**：$e \in G_x$（$e(x) = x$）
- **封閉**：若 $g_1, g_2 \in G_x$，則 $(g_1 \circ g_2)(x) = g_1(g_2(x)) = g_1(x) = x$，故 $g_1 \circ g_2 \in G_x$
- **逆元封閉**：若 $g \in G_x$，則 $g(x) = x$，故 $g^{-1}(x) = g^{-1}(g(x)) = x$，即 $g^{-1} \in G_x$

$G_x$ 是子群。$\blacksquare$

---

### 共軛是等價關係（2025）

**題目**：設 $f, h \in G$，定義 $f \sim h$（共軛）若存在 $g \in G$ 使得 $g^{-1} \circ f \circ g = h$。證明共軛是等價關係。

**解答**：

**自反性**：取 $g = e$，$e^{-1} \circ f \circ e = f$，故 $f \sim f$。

**對稱性**：若 $f \sim h$，即 $g^{-1} \circ f \circ g = h$。則 $g \circ h \circ g^{-1} = f$，即 $(g^{-1})^{-1} \circ h \circ g^{-1} = f$，故 $h \sim f$。

**遞移性**：若 $g_1^{-1} \circ f_1 \circ g_1 = f_2$ 且 $g_2^{-1} \circ f_2 \circ g_2 = f_3$，取 $g_3 = g_1 \circ g_2$：
$$g_3^{-1} \circ f_1 \circ g_3 = g_2^{-1} \circ g_1^{-1} \circ f_1 \circ g_1 \circ g_2 = g_2^{-1} \circ f_2 \circ g_2 = f_3$$

故 $f_1 \sim f_3$。$\blacksquare$

---

### 同餘 mod $n$ 是等價關係（2024、2024s）

**題目**：設 $n$ 為正整數，證明 $\mathbb{Z}$ 上的 mod $n$ 同餘是等價關係。

**解答**：（$a \equiv b \pmod n$ $\Leftrightarrow$ $n \mid (a - b)$）

**自反**：$a - a = 0 = 0 \cdot n$，故 $a \equiv a$。

**對稱**：若 $a \equiv b$，則 $a - b = kn$，故 $b - a = (-k)n$，即 $b \equiv a$。

**遞移**：若 $a \equiv b$ 且 $b \equiv c$，則 $a - b = kn$，$b - c = k'n$，故 $a - c = (k + k')n$，即 $a \equiv c$。$\blacksquare$

---

### 元素階：$o(x^q) = d$（2024、2024s）

**題目**：設 $x \in G$，$o(x) = n$，$n = dq$（$d \geq 1$）。證明 $x^q$ 的階為 $d$。

**解答**：

$(x^q)^d = x^{qd} = x^n = e$，故 $o(x^q) \mid d$（由 Lemma 111）。

設 $o(x^q) = d'$，假設 $d' < d$，則 $e = (x^q)^{d'} = x^{qd'}$，由 Lemma 111，$o(x) = n$ 整除 $qd'$，即 $dq \mid qd'$，得 $d \mid d'$。但 $d' < d$，矛盾。

故 $o(x^q) = d$。$\blacksquare$

---

### $\mathbb{Z}_{16}^*$ 的生成元與逆元（2025）

**題目**：考慮乘法群 $(\mathbb{Z}_{16}^*, \times)$。
(1) 求 $\mathbb{Z}_{16}^*$ 的生成元集合。
(2) 列出逆元不是自身的元素，並求其逆元。

**解答**：

$\mathbb{Z}_{16}^* = \{1, 3, 5, 7, 9, 11, 13, 15\}$，$|\mathbb{Z}_{16}^*| = \varphi(16) = 8$。

(1) 生成元需使得 $\{g^k \bmod 16\}$ 包含所有 8 個元素，即 $o(g) = 8$。
   - $3^k \bmod 16$：$3, 9, 27\equiv11, 33\equiv1$... 階為 4，非生成元
   - $5^k \bmod 16$：$5, 25\equiv9, 45\equiv13, 65\equiv1$... 階為 4，非生成元
   
   實際上 $\mathbb{Z}_{16}^*$ **不是循環群**（$\mathbb{Z}_{2^k}^*$ 對 $k \geq 3$ 不是循環群），故無生成元。
   
   $\{3, 15\}$ 生成（或其他組合，視題目要求方式）。

(2) 自逆元素（$a^2 \equiv 1 \bmod 16$）：$1, 7, 9, 15$（因為 $7^2=49\equiv1$，$9^2=81\equiv1$，$15^2=225\equiv1$）。
   
   逆元不是自身的元素：$\{3, 5, 11, 13\}$。
   - $3 \times 11 = 33 \equiv 1 \pmod{16}$，故 $3 \leftrightarrow 11$
   - $5 \times 13 = 65 \equiv 1 \pmod{16}$，故 $5 \leftrightarrow 13$
