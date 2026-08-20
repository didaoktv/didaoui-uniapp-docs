# 阴影与发光

帝到 KTV 的纵深体系由两部分构成：**5 级阴影层**承担传统层级表达（卡片→悬浮→模态→遮罩），**21 种发光变体**承担霓虹强调（金/蓝/绿/黄/红/青/紫 × sm/md/lg 完整矩阵）。在纯黑背景上，阴影提供深度，发光提供焦点——交互元素如夜街霓虹般在暗色中发亮。

::: tip 设计哲学
**霓虹于黑**。阴影模拟物理纵深，发光模拟光源辐射。两者在暗色界面上协作：阴影让卡片「浮起」，发光让主操作「点燃」。发光仅用于主操作、激活态、特色内容，克制是关键。
:::

---

## 阴影层级

5 级阴影，从 Card 到 Overlay 递进，blur 与 offset 同步增大：

| Token | 值 | 层级 | 用途 |
| --- | --- | --- | --- |
| `--shadow-1` | `0 2px 8px rgba(0,0,0,0.3)` | Card | 基础卡片深度 |
| `--shadow-2` | `0 8px 24px rgba(0,0,0,0.4)` | Card Hover | 交互态抬起 |
| `--shadow-3` | `0 12px 32px rgba(0,0,0,0.5)` | Float | 浮动操作元素 |
| `--shadow-4` | `0 24px 64px rgba(0,0,0,0.6)` | Modal | 模态框深度 |
| `--shadow-5` | `0 40px 80px rgba(0,0,0,0.7)` | Overlay | 最大纵深 |

```css
:root {
  --shadow-1: 0 2px 8px rgba(0,0,0,0.3);   /* Card */
  --shadow-2: 0 8px 24px rgba(0,0,0,0.4);  /* Card Hover */
  --shadow-3: 0 12px 32px rgba(0,0,0,0.5); /* Float */
  --shadow-4: 0 24px 64px rgba(0,0,0,0.6); /* Modal */
  --shadow-5: 0 40px 80px rgba(0,0,0,0.7); /* Overlay */
}
```

### 层级递进规律

- **yOffset**：2 → 8 → 12 → 24 → 40 px（投射距离递增）
- **blur**：8 → 24 → 32 → 64 → 80 px（柔光范围递增）
- **opacity**：0.3 → 0.4 → 0.5 → 0.6 → 0.7（暗度递增）
- **xOffset**：恒为 0（正下方投射，无侧偏）

```
层级1 Card      ▁▁▁▁  2px ↓  8px blur   30% 黑
层级2 Hover     ▁▁▁▁  8px ↓ 24px blur   40% 黑
层级3 Float     ▁▁▁▁ 12px ↓ 32px blur   50% 黑
层级4 Modal     ▁▁▁▁ 24px ↓ 64px blur   60% 黑
层级5 Overlay   ▁▁▁▁ 40px ↓ 80px blur   70% 黑
```

---

## 发光矩阵

发光（glow）是 0 offset 的彩色阴影，模拟光源辐射。系统提供 **7 色 × 3 档** 完整矩阵，命名统一为 `--shadow-glow-{color}-{size}`。

### 发光色源

| 色组 | 发光源 Hex | 语义 |
| --- | --- | --- |
| 金色 (gold) | `#F5A623` | 主操作、激活态、VIP 金 |
| 蓝色 (blue) | `#2D4BA0` | 辅色强调、卡片媒体 |
| 成功 (success) | `#4CAF50` | 完成、在线 |
| 警示 (warning) | `#F9A825` | 提醒、限时 |
| 错误 (error) | `#E53935` | 失败、危险 |
| 信息 (info) | `#00BCD4` | 中性提示 |
| VIP (vip) | `#9C27B0` | 勋章、特权 |

### 档位规格

| 档位 | blur | 结构 | 场景 |
| --- | --- | --- | --- |
| **sm** | 8px | 单层发光 | 微光：图标激活态、小标签、焦点环 |
| **md** | 16–20px | 品牌色单层 / 语义色主光+暗影 | 标准光：按钮 hover、卡片选中 |
| **lg** | 24+48px / 24+24px | 品牌色双层霓虹 / 语义色强光+暗影 | 强光：主 CTA、特色卡片、激活态导航 |

### 完整矩阵

| 色组 | sm (8px 单层) | md | lg |
| --- | --- | --- | --- |
| **gold** | `0 0 8px rgba(245,166,35,0.4)` | `0 0 20px rgba(245,166,35,0.4)` | 双层：`24px + 48px` |
| **blue** | `0 0 8px rgba(45,75,160,0.4)` | `0 0 20px rgba(45,75,160,0.5)` | 双层：`24px + 48px` |
| **success** | `0 0 8px rgba(76,175,80,0.4)` | 主光+暗影：`16px + 4px↓` | 强光+暗影：`24px + 8px↓` |
| **warning** | `0 0 8px rgba(249,168,37,0.4)` | 主光+暗影：`16px + 4px↓` | 强光+暗影：`24px + 8px↓` |
| **error** | `0 0 8px rgba(229,57,53,0.4)` | 主光+暗影：`16px + 4px↓` | 强光+暗影：`24px + 8px↓` |
| **info** | `0 0 8px rgba(0,188,212,0.4)` | 主光+暗影：`16px + 4px↓` | 强光+暗影：`24px + 8px↓` |
| **vip** | `0 0 8px rgba(156,39,176,0.4)` | 主光+暗影：`16px + 4px↓` | 强光+暗影：`24px + 8px↓` |

### Token 完整列表

```css
:root {
  /* 品牌色发光 — 金 / 蓝 */
  --shadow-glow-gold-sm:  0 0 8px rgba(245,166,35,0.4);
  --shadow-glow-gold-md:  0 0 20px rgba(245,166,35,0.4);
  --shadow-glow-gold-lg:  0 0 24px rgba(245,166,35,0.4), 0 0 48px rgba(245,166,35,0.2);
  --shadow-glow-blue-sm:  0 0 8px rgba(45,75,160,0.4);
  --shadow-glow-blue-md:  0 0 20px rgba(45,75,160,0.5);
  --shadow-glow-blue-lg:  0 0 24px rgba(45,75,160,0.5), 0 0 48px rgba(45,75,160,0.25);

  /* 语义色发光 — success / warning / error / info / vip */
  --shadow-glow-success-sm:  0 0 8px rgba(76,175,80,0.4);
  --shadow-glow-success-md:  0 0 16px rgba(76,175,80,0.4), 0 4px 12px rgba(0,0,0,0.3);
  --shadow-glow-success-lg:  0 0 24px rgba(76,175,80,0.5), 0 8px 24px rgba(0,0,0,0.4);
  --shadow-glow-warning-sm:  0 0 8px rgba(249,168,37,0.4);
  --shadow-glow-warning-md:  0 0 16px rgba(249,168,37,0.4), 0 4px 12px rgba(0,0,0,0.3);
  --shadow-glow-warning-lg:  0 0 24px rgba(249,168,37,0.5), 0 8px 24px rgba(0,0,0,0.4);
  --shadow-glow-error-sm:    0 0 8px rgba(229,57,53,0.4);
  --shadow-glow-error-md:    0 0 16px rgba(229,57,53,0.4), 0 4px 12px rgba(0,0,0,0.3);
  --shadow-glow-error-lg:    0 0 24px rgba(229,57,53,0.5), 0 8px 24px rgba(0,0,0,0.4);
  --shadow-glow-info-sm:     0 0 8px rgba(0,188,212,0.4);
  --shadow-glow-info-md:     0 0 16px rgba(0,188,212,0.4), 0 4px 12px rgba(0,0,0,0.3);
  --shadow-glow-info-lg:     0 0 24px rgba(0,188,212,0.5), 0 8px 24px rgba(0,0,0,0.4);
  --shadow-glow-vip-sm:      0 0 8px rgba(156,39,176,0.4);
  --shadow-glow-vip-md:      0 0 16px rgba(156,39,176,0.4), 0 4px 12px rgba(0,0,0,0.3);
  --shadow-glow-vip-lg:      0 0 24px rgba(156,39,176,0.5), 0 8px 24px rgba(0,0,0,0.4);
}
```

---

## 金色霓虹设计理念

帝到 KTV 的标志性视觉是**暗色街景霓虹灯效果**——纯黑背景上，金色发光如夜街招牌般辐射。

### 双层发光结构（品牌色 lg 档）

金色与蓝色的主发光采用**双层叠加**，模拟真实霓虹灯的「核心光晕 + 外层弥散」：

```css
/* 金色霓虹：内层 24px 主光 + 外层 48px 弥散 */
--shadow-glow-gold-lg:
  0 0 24px rgba(245,166,35,0.4),   /* 内核：高亮度，小范围 */
  0 0 48px rgba(245,166,35,0.2);   /* 外晕：低亮度，大范围 */
```

### 主光 + 暗影结构（语义色 md/lg 档）

语义发光采用**彩色主光 + 下方暗影托底**，兼顾发光与纵深：

```css
/* 成功发光（md 档）：16px 彩光 + 4px 暗影 */
--shadow-glow-success-md:
  0 0 16px rgba(76,175,80,0.4),    /* 彩色辐射 */
  0 4px 12px rgba(0,0,0,0.3);      /* 暗影托底，增强悬浮感 */
```

---

## 应用场景

| 场景 | 推荐组合 |
| --- | --- |
| 主按钮（默认） | `--shadow-1` + `--shadow-glow-gold-md` |
| 主按钮（hover） | `--shadow-2` + `--shadow-glow-gold-lg` |
| 卡片（默认） | `--shadow-1` |
| 卡片（hover） | `--shadow-2` |
| 卡片（选中） | `--shadow-glow-gold-md`（金边 + 发光） |
| 浮动按钮 FAB | `--shadow-3` + `--shadow-glow-gold-lg` |
| 模态框 | `--shadow-4` |
| 全屏遮罩内容 | `--shadow-5` |
| 焦点环 | `2px solid primary-400` + `--shadow-glow-gold-sm` |
| 激活态导航 | `--shadow-glow-gold-sm`（图标 + 文字变金） |
| VIP 卡片 | `--shadow-glow-vip-md` |
| 错误提示 | `--shadow-glow-error-sm` |

---

## 使用准则

- **阴影表纵深，发光表焦点**：层级用 `--shadow-*`，强调用 `--shadow-glow-*`，不混用。
- **发光克制**：同屏发光元素不超过 3 个，避免霓虹过载。
- **主操作用金光**：CTA、激活态一律 `--shadow-glow-gold-*`，蓝色发光仅用于辅色场景。
- **焦点环必备**：所有可交互元素聚焦时应有 `2px primary-400 边框 + gold-sm 发光`。
- **暗影托底**：语义发光 md/lg 档自带暗影，无需额外叠加 `--shadow-*`。
- **禁用纯黑阴影**：暗色背景下纯黑阴影几乎不可见，发光比阴影更有效。
- **命名规则**：统一 `--shadow-glow-{color}-{size}`，档位 sm / md / lg 三选一。
