# 玻璃拟态

帝到 KTV 的玻璃拟态（Glassmorphism）用于导航栏、底部弹层、遮罩等需要「浮于内容之上又透出内容」的场景。3 档透明度 + 20px 模糊 + 8% 白色描边，在纯黑背景上形成半透明磨砂质感，兼顾现代感与内容可读性。

::: tip 设计哲学
玻璃拟态是「含蓄的分层」。它不喧宾夺主，而是让上层内容隐约透出下层，营造空间纵深。在 KTV 暗色场景中，玻璃质感让导航栏与弹层显得轻盈，避免实色块的笨重感。
:::

---

## 玻璃 Token

| Token | 值 | 透明度 | 用途 |
| --- | --- | --- | --- |
| `--glass-bg` | `rgba(23,23,23,0.72)` | 72% | 标准玻璃：导航栏、底部弹层 |
| `--glass-bg-strong` | `rgba(23,23,23,0.85)` | 85% | 强玻璃：模态遮罩下弹层 |
| `--glass-bg-solid` | `rgba(23,23,23,0.95)` | 95% | 近实色：需保证可读性的关键弹层 |
| `--glass-border` | `rgba(255,255,255,0.08)` | 8% 白 | 玻璃描边（暗色模式） |
| `--glass-blur` | `20px` | — | backdrop-filter 模糊半径 |

```css
:root {
  --glass-bg:        rgba(23,23,23,0.72);
  --glass-bg-strong: rgba(23,23,23,0.85);
  --glass-bg-solid:  rgba(23,23,23,0.95);
  --glass-border:    rgba(255,255,255,0.08);
  --glass-blur:      20px;
}
```

### 透明度三档语义

| 档位 | 透明度 | 透出程度 | 场景 |
| --- | --- | --- | --- |
| 标准 (bg) | 72% | 强透出 | 顶部导航栏（滚动时透出列表） |
| 强 (strong) | 85% | 中透出 | 底部弹层、操作面板 |
| 近实色 (solid) | 95% | 弱透出 | 关键模态、需保证文字可读 |

---

## 玻璃质感配方

完整玻璃效果由「背景 + 模糊 + 描边」三者组合：

```css
.glass {
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
  border: 1px solid var(--glass-border);
}
```

### 暗色 / 亮色差异

| 属性 | Dark (默认) | Light |
| --- | --- | --- |
| `--glass-bg` | `rgba(23,23,23,0.72)` | `rgba(255,255,255,0.72)` |
| `--glass-border` | `rgba(255,255,255,0.08)` | `rgba(0,0,0,0.06)` |

亮色模式下玻璃底色翻转为白色半透明，描边变为黑色低透明，保持「浅底深边」的视觉规律。

---

## H5 vs 小程序降级方案

`backdrop-filter` 在各端支持度不同，需条件降级：

| 平台 | backdrop-filter 支持 | 降级策略 |
| --- | --- | --- |
| H5（现代浏览器） | ✅ 完全支持 | 直接使用，加 `-webkit-` 前缀 |
| H5（旧版浏览器） | ⚠️ 部分支持 | 降级为 `--glass-bg-solid`（95% 近实色） |
| 微信小程序 | ❌ 不支持 | 降级为 `--glass-bg-strong`（85%），无模糊 |
| 抖音小程序 | ❌ 不支持 | 降级为 `--glass-bg-strong`（85%），无模糊 |
| Android App | ⚠️ 部分支持 | 降级为 `--glass-bg-strong`（85%） |
| iOS App | ✅ 完全支持 | 直接使用，原生 backdrop-filter |

### 降级实现

::: code-group

```scss [uni-app 条件编译]
.glass-nav {
  background: var(--glass-bg);
  border-bottom: 1px solid var(--glass-border);

  /* #ifdef H5 */
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
  /* #endif */

  /* #ifdef MP-WEIXIN || MP-TOUTIAO */
  /* 小程序不支持 backdrop-filter，降级为强透明度 */
  background: var(--glass-bg-strong);
  /* #endif */

  /* #ifdef APP-PLUS */
  /* App 端 iOS 支持，Android 降级 */
  backdrop-filter: blur(var(--glass-blur));
  /* #endif */
}
```

```css [纯 CSS @supports 降级]
.glass-nav {
  background: var(--glass-bg-strong); /* 降级底色 */
  border-bottom: 1px solid var(--glass-border);
}

@supports (backdrop-filter: blur(20px)) {
  .glass-nav {
    background: var(--glass-bg);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  }
}
```

:::

> ponytail: 小程序降级方案天花板——`backdrop-filter` 在小程序内完全不可用，降级仅靠提高透明度补偿，丢失磨砂质感。升级路径：等待小程序基础库支持，或改用「实色 + 半透明遮罩」模拟。

---

## 应用场景

### 1. 顶部导航栏 (NavBar)

滚动时列表内容透出，营造空间纵深：

```vue
<template>
  <view class="nav-bar">
    <view class="nav-content">帝到 KTV</view>
  </view>
</template>

<style lang="scss">
.nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur));
  border-bottom: 1px solid var(--glass-border);
  z-index: 100;
}
</style>
```

### 2. 底部弹层 (Bottom Sheet)

底部弹层使用 strong 档（85%），保证操作区可读：

```vue
<template>
  <view class="bottom-sheet">
    <view class="sheet-handle" />
    <slot />
  </view>
</template>

<style lang="scss">
.bottom-sheet {
  background: var(--glass-bg-strong);
  backdrop-filter: blur(var(--glass-blur));
  border-top-left-radius: var(--radius-2xl);
  border-top-right-radius: var(--radius-2xl);
  border-top: 1px solid var(--glass-border);
}
</style>
```

### 3. 全屏遮罩 (Overlay)

全屏遮罩下的关键内容使用 solid 档（95%），确保信息层级清晰：

```vue
<template>
  <view class="overlay-mask">
    <view class="overlay-content">关键操作</view>
  </view>
</template>

<style lang="scss">
.overlay-mask {
  background: var(--color-overlay); /* rgba(0,0,0,0.5) */
}
.overlay-content {
  background: var(--glass-bg-solid);
  backdrop-filter: blur(var(--glass-blur));
  border: 1px solid var(--glass-border);
}
</style>
```

### 4. 浮动操作栏

页面底部固定的操作栏（如点歌页面的「已选 N 首」栏）：

```vue
<template>
  <view class="action-bar">
    <text>已选 3 首</text>
    <dd-button type="primary">点歌</dd-button>
  </view>
</template>

<style lang="scss">
.action-bar {
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur));
  border-top: 1px solid var(--glass-border);
}
</style>
```

---

## 使用准则

- **玻璃仅用于浮层**：导航栏、弹层、遮罩、操作栏，**不用于内容卡片**（卡片用实色 `--bg-card`）。
- **三档按可读性选**：内容简单选 `bg` (72%)，操作密集选 `strong` (85%)，关键信息选 `solid` (95%)。
- **必须配描边**：玻璃表面必有 `1px solid var(--glass-border)`，否则边界消失。
- **小程序必降级**：小程序端禁用 `backdrop-filter`，直接用 strong/solid 档。
- **滚动内容才用玻璃**：若下层无内容透出，改用实色背景，玻璃质感无意义。
- **z-index 配合**：玻璃层需配 `position: fixed/sticky` 与较高 `z-index`，确保浮于内容之上。
