# 環（Rings）

## 定義

**環** $(R, +, \cdot)$ 需滿足：

1. $(R, +)$ 是 abelian group（加法群）
2. $\cdot$ 封閉、結合律
3. 分配律：$a \cdot (b + c) = a \cdot b + a \cdot c$，$(a + b) \cdot c = a \cdot c + b \cdot c$

**交換環**：若 $a \cdot b = b \cdot a$ 對所有 $a, b$ 成立。

**有單位環**：存在 $u \neq z$（$z$ 為加法單位）使得 $a \cdot u = u \cdot a = a$。

**Unit（可逆元）**：若 $\exists b: a \cdot b = b \cdot a = u$，則 $a$ 是 unit，$b = a^{-1}$。

## 基本性質

**加法單位唯一性**（由 group 性質）：若 $z_1, z_2$ 都是加法單位，$z_1 = z_1 + z_2 = z_2$。

**加法逆元唯一性**：若 $b, c$ 都是 $a$ 的加法逆元，$b = b + (a + c) = (b + a) + c = z + c = c$。

**Thm 98**（加法消去律）：$a + b = a + c \Rightarrow b = c$。

**Cor 99**：對所有 $a \in R$，$a \cdot z = z \cdot a = z$（加法單位為乘法零元）。

**Cor 101**：
- $-(−a) = a$
- $a \cdot (-b) = (-a) \cdot b = -(a \cdot b)$
- $(-a) \cdot (-b) = a \cdot b$

### Thm 102：單位元與乘法逆元的唯一性

**(1) 有單位環的 unity 唯一。**

> **證明**：設 $u_1, u_2$ 均為單位元。對任意 $x \in R$，$x \cdot u_1 = u_1 \cdot x = x$ 且 $x \cdot u_2 = u_2 \cdot x = x$。
>
> 取 $x = u_2$：$u_2 \cdot u_1 = u_2$。  
> 取 $x = u_1$：$u_1 \cdot u_2 = u_1$。  
> 故 $u_1 = u_1 \cdot u_2 = u_2 \cdot u_1 = u_2$。$\blacksquare$

**(2) Unit 的乘法逆元唯一。**

> **證明**：設 $b, c$ 都是 $a$ 的逆元：$a \cdot b = b \cdot a = u$，$a \cdot c = c \cdot a = u$。
> $$b = b \cdot u = b \cdot (a \cdot c) = (b \cdot a) \cdot c = u \cdot c = c \quad \blacksquare$$

**Lemma 103**：Unit 不是 zero divisor（若 $a$ 是 unit 且 $a \cdot b = z$，則 $b = z$）。

## 特殊環類型

| 類型 | 條件 |
|------|------|
| **Integral domain** | 交換環 + 有 unity + 無 proper zero divisors |
| **Field** | 交換環 + 有 unity + 每個非零元都是 unit |

- **Proper zero divisor**：$a \neq z$ 且存在 $b \neq z$ 使得 $a \cdot b = z$

**Thm 104**：每個 field 都是 integral domain。

> 因為 field 中每個非零元都有逆，故不存在 zero divisor（由 Lemma 103）。

**Thm 105**：有限 integral domain 是 field。

## $\mathbb{Z}_n$

$\mathbb{Z}_n = \{0, 1, \ldots, n-1\}$，加法與乘法均 mod $n$。

- $(\mathbb{Z}_n, +)$ 是 abelian group，階為 $n$
- $a$ 在 $(\mathbb{Z}_n, \times)$ 中有逆 $\Leftrightarrow$ $\gcd(a, n) = 1$
- $\mathbb{Z}_n^* = \{a \in \mathbb{Z}_n : \gcd(a,n)=1\}$，$|\mathbb{Z}_n^*| = \varphi(n)$

## 中國剩餘定理（CRT）

若 $n_1, n_2, \ldots, n_k$ **兩兩互質**，$N = \prod n_i$，$m_i = N/n_i$，則

$$x \equiv a_1 \pmod{n_1},\; x \equiv a_2 \pmod{n_2},\; \ldots, x \equiv a_k \pmod{n_k}$$

有唯一解 mod $N$：

$$x \equiv \sum_{i=1}^k a_i \cdot m_i \cdot (m_i^{-1} \bmod n_i) \pmod{N}$$

其中 $m_i^{-1} \bmod n_i$ 用擴充輾轉相除法求得。

---

## 考古題

### 【必考】環的單位元唯一（2024、2025、2024s）

**題目**：設 $(R, +, \cdot)$ 為有 unity 的環。證明 unity 唯一。

**解答**：假設 $u_1, u_2$ 均為 unity。對任意 $x \in R$：
$$xu_1 = u_1 x = x, \quad xu_2 = u_2 x = x$$

取 $x = u_2$：$u_2 u_1 = u_2$。  
取 $x = u_1$：$u_1 u_2 = u_1$。  
故 $u_1 = u_1 u_2 = u_2 u_1 = u_2$。$\blacksquare$

---

### CRT：解 $x^2 \equiv 1 \pmod{105}$（2024、2024s）

**題目**：用中國剩餘定理求所有 $x^2 \equiv 1 \pmod{105}$ 的解。

**解答**：

$105 = 3 \times 5 \times 7$，分解為：
$$\begin{cases} x^2 \equiv 1 \pmod{3} \\ x^2 \equiv 1 \pmod{5} \\ x^2 \equiv 1 \pmod{7} \end{cases}$$

每個子問題：
- $x^2 \equiv 1 \pmod{3}$：$x \equiv 1$ 或 $x \equiv 2 \pmod{3}$
- $x^2 \equiv 1 \pmod{5}$：$x \equiv 1$ 或 $x \equiv 4 \pmod{5}$
- $x^2 \equiv 1 \pmod{7}$：$x \equiv 1$ 或 $x \equiv 6 \pmod{7}$

設 $N = 105$，$m_1 = 35$，$m_2 = 21$，$m_3 = 15$。

求 $m_i^{-1} \bmod n_i$：
- $35^{-1} \equiv 2 \pmod{3}$（因為 $35 \cdot 2 = 70 \equiv 1$）→ $C_1 = 70$
- $21^{-1} \equiv 1 \pmod{5}$（因為 $21 \equiv 1$）→ $C_2 = 21$
- $15^{-1} \equiv 1 \pmod{7}$（因為 $15 \equiv 1$）→ $C_3 = 15$

8 種組合（$(a_1, a_2, a_3)$ 取各子問題的解）：

| $(a_1, a_2, a_3)$ | $x \bmod 105$ |
|-------------------|--------------|
| $(1, 1, 1)$ | $70+21+15=106 \equiv 1$ |
| $(1, 1, 6)$ | $70+21+90=181 \equiv 76$ |
| $(1, 4, 1)$ | $70+84+15=169 \equiv 64$ |
| $(1, 4, 6)$ | $70+84+90=244 \equiv 34$ |
| $(2, 1, 1)$ | $140+21+15=176 \equiv 71$ |
| $(2, 1, 6)$ | $140+21+90=251 \equiv 41$ |
| $(2, 4, 1)$ | $140+84+15=239 \equiv 29$ |
| $(2, 4, 6)$ | $140+84+90=314 \equiv 104$ |

共 8 個解：$x \equiv 1, 29, 34, 41, 64, 71, 76, 104 \pmod{105}$。$\blacksquare$

---

### $(2^U, \Delta, \cap)$ 是有單位環（2025）

**題目**：設 $U$ 為有限集合，$R = 2^U$（冪集），$+ = \Delta$（對稱差），$\cdot = \cap$（交集）。證明 $(R, \Delta, \cap)$ 是有 unity 的環。

**解答**：

設 $A, B, C$ 為 $2^U$ 中的任意元素。

1. **$(R, \Delta)$ 是 abelian group**：
   - 交換律：$A \Delta B = B \Delta A$（對稱差可交換）
   - 結合律：$A \Delta (B \Delta C) = (A \Delta B) \Delta C$
   - 加法單位元：$\emptyset$，因為 $A \Delta \emptyset = A$
   - 加法逆元：$A \Delta A = \emptyset$，故 $-A = A$

2. **$\cap$ 的結合律**：$A \cap (B \cap C) = (A \cap B) \cap C$

3. **分配律**：$A \cap (B \Delta C) = (A \cap B) \Delta (A \cap C)$

4. **Unity**：$U$ 是單位元，因為 $A \cap U = A$

故 $(2^U, \Delta, \cap)$ 是有 unity 的環。$\blacksquare$

---

### 群的辨別（2024、2024s）

**題目**：以下哪些是群？非群者請說明原因。
1. $(\mathbb{Z}_{10}, +)$
2. $(\mathbb{Z}_{12}^*, +)$
3. $(\mathbb{Z}_{14}, \times)$
4. $(\mathbb{Z}_{15}^*, \times)$
5. $(\mathbb{Z}_8, -)$

**解答**：

1. $(\mathbb{Z}_{10}, +)$：**是群**。$\mathbb{Z}_{10} = \{0,\ldots,9\}$，加法 mod 10，封閉、結合、有單位元 0、有逆元。
2. $(\mathbb{Z}_{12}^*, +)$：**不是群**。$\mathbb{Z}_{12}^* = \{1,5,7,11\}$，加法不封閉（如 $7 + 11 = 18 \equiv 6 \notin \mathbb{Z}_{12}^*$）。
3. $(\mathbb{Z}_{14}, \times)$：**不是群**。$\gcd(2, 14) = 2 \neq 1$，故 2 在 $\mathbb{Z}_{14}$ 中無乘法逆元。
4. $(\mathbb{Z}_{15}^*, \times)$：**是群**。所有與 15 互質的元素形成乘法群。
5. $(\mathbb{Z}_8, -)$：**不是群**。減法不滿足結合律：$(7-5)-1 = 1$，但 $7-(5-1) = 3$。

---

### 求 $\mathbb{Z}_n^*$ 的生成元（2024、2024s）

**題目**：$\mathbb{Z}_{14}^* = \{1,3,5,9,11,13\}$。求其生成元。

**解答**：

$|\mathbb{Z}_{14}^*| = \varphi(14) = 6$。找 $g$ 使得 $\{g^k \bmod 14 : k \in \mathbb{Z}\} = \mathbb{Z}_{14}^*$：

- $3^k \bmod 14$：$3, 9, 27 \equiv 13, 39 \equiv 11, 33 \equiv 5, 15 \equiv 1$，→ 生成全部 6 個元素，**3 是生成元**
- $5^k \bmod 14$：$5, 25 \equiv 11, 55 \equiv 13, 65 \equiv 9, 45 \equiv 3, 15 \equiv 1$，→ **5 也是生成元**

（生成元的個數 = $\varphi(\varphi(14)) = \varphi(6) = 2$，即 3 和 5。）
