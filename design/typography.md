# 排版

帝到 KTV 的排版体系追求**厚重、果断、可读**。中文标题使用 Noto Sans SC 的 700-800 字重，呼应抖音商城式的厚重美学；拉丁装饰场景使用 Playfair Display 高对比衬线；技术标签与数值使用 JetBrains Mono 等宽。正文字重 500-700，比默认略重以适配暗色表面。

::: tip 设计哲学
标题承担品牌声量——越大的字号越重；正文保持中等字重，确保暗底长文可读。等宽字体仅用于需要列对齐的数值与技术标签。
:::

---

## 字体族

| Token | 字体栈 | 用途 |
| --- | --- | --- |
| `--font-display` | `'Playfair Display', serif` | 装饰场景：英雄数字、价格牌、大号标题 |
| `--font-heading` | `'Noto Sans SC', sans-serif` | UI 标题：H1-H4 |
| `--font-body` | `'Noto Sans SC', sans-serif` | 正文、Lead、Caption |
| `--font-mono` | `'JetBrains Mono', monospace` | 等宽：数值、技术标签、代码 |

字体通过 Google Fonts CDN 加载：

```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=Noto+Sans+SC:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;600&display=swap');
```

::: warning Playfair Display 限制
Playfair Display 是拉丁衬线字体，**不含中文字形**。中文标题渲染时会回退到系统衬线字体。生产环境建议搭配思源宋体 / Noto Serif CJK 以获得一致的衬线观感。
:::

---

## 字号阶梯

9 级字号，从 Display 32px 到 Caption 12px，对齐 Vant 4 尺度：

| Token | 字号 | 用途 |
| --- | --- | --- |
| `--font-size-display` | `32px` | 装饰大号标题、英雄数字 |
| `--font-size-h1` | `24px` | 页面主标题 |
| `--font-size-h2` | `20px` | 区块标题 |
| `--font-size-h3` | `18px` | 卡片标题 |
| `--font-size-h4` | `16px` | 小标题、Lead |
| `--font-size-lead` | `16px` | 引导段落 |
| `--font-size-body` | `14px` | **正文默认** |
| `--font-size-mono` | `14px` | 等宽数值/代码 |
| `--font-size-caption` | `12px` | 辅助说明、标签 |

---

## 字重

9 级字重，标题区段 700-900 厚重，正文 500 中等：

| Token | 字重 | 用途 |
| --- | --- | --- |
| `--font-weight-display` | `900` | Display 装饰 |
| `--font-weight-h1` | `800` | H1 |
| `--font-weight-h2` | `800` | H2 |
| `--font-weight-h3` | `700` | H3 |
| `--font-weight-h4` | `700` | H4 |
| `--font-weight-body` | `500` | 正文 |
| `--font-weight-lead` | `500` | 引导段落 |
| `--font-weight-caption` | `500` | 辅助说明 |
| `--font-weight-mono` | `600` | 等宽 |

---

## 行高

9 级行高，随字号递减而递增（大字号紧凑，小字号宽松）：

| Token | 行高 | 用途 |
| --- | --- | --- |
| `--line-height-display` | `1.1` | Display |
| `--line-height-h1` | `1.15` | H1 |
| `--line-height-h2` | `1.2` | H2 |
| `--line-height-h3` | `1.3` | H3 |
| `--line-height-h4` | `1.4` | H4 |
| `--line-height-body` | `1.6` | 正文 |
| `--line-height-lead` | `1.7` | 引导段落 |
| `--line-height-caption` | `1.5` | 辅助说明 |
| `--line-height-mono` | `1.6` | 等宽 |

---

## 排版组合速查

字号 / 字重 / 行高三者绑定，提供工具类直接套用：

```css
.d-display { font-family: var(--font-display); font-size: 32px; font-weight: 900; line-height: 1.1; letter-spacing: -0.02em; }
.d-h1      { font-family: var(--font-heading); font-size: 24px; font-weight: 800; line-height: 1.15; }
.d-h2      { font-family: var(--font-heading); font-size: 20px; font-weight: 800; line-height: 1.2; }
.d-h3      { font-family: var(--font-heading); font-size: 18px; font-weight: 700; line-height: 1.3; }
.d-h4      { font-family: var(--font-heading); font-size: 16px; font-weight: 700; line-height: 1.4; }
.d-body    { font-family: var(--font-body);    font-size: 14px; font-weight: 500; line-height: 1.6; }
.d-lead    { font-family: var(--font-body);    font-size: 16px; font-weight: 500; line-height: 1.7; }
.d-caption { font-family: var(--font-body);    font-size: 12px; font-weight: 500; line-height: 1.5; }
.d-mono    { font-family: var(--font-mono);    font-size: 14px; font-weight: 600; line-height: 1.6; }
```

### 组合示例

<div class="typography-demo">
  <p class="d-display">快乐驾到 32 / 900</p>
  <p class="d-h1">歌曲排行 24 / 800</p>
  <p class="d-h2">会员中心 20 / 800</p>
  <p class="d-h3">我的订单 18 / 700</p>
  <p class="d-h4">订房记录 16 / 700</p>
  <p class="d-lead">帝到 KTV 为您呈现皇室级欢唱体验。</p>
  <p class="d-body">正文默认 14px / 500，行高 1.6，暗底长文可读。</p>
  <p class="d-caption">辅助说明 12px / 500</p>
  <p class="d-mono">¥128.00 · #A12</p>
</div>

```vue
<template>
  <p class="d-display">快乐驾到</p>
  <p class="d-h1">歌曲排行</p>
  <p class="d-body">正文默认 14px / 500。</p>
  <p class="d-mono">¥128.00 · #A12</p>
</template>
```

---

## 使用准则

- **标题只用 Noto Sans SC**：UI 标题（H1-H4）一律 `--font-heading`，不混入 Playfair Display。
- **Playfair Display 仅限装饰**：英雄数字、价格牌、品牌大字，且仅含拉丁字符时使用。
- **正文 14px / 500 起步**：暗色表面正文不得低于 14px，字重不得低于 500。
- **数值用 mono**：价格、房号、订单号、时间戳等需列对齐的数据使用 `--font-mono`。
- **字距**：仅 Display 设置 `letter-spacing: -0.02em`，其余使用浏览器默认。
- **不混用字重**：同一层级文本字重保持一致，避免在卡片内随意切 500/600/700。
