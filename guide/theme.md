# 主题定制

帝到 KTV UI 提供三层主题定制能力：**SCSS 变量**（编译期覆盖）、**uni.scss 自定义**（全局注入）、**CSS 变量**（运行时切换）。默认暗色优先，亦支持亮色模式。

---

## 主题定制层级

| 层级 | 时机 | 作用范围 | 适用场景 |
| --- | --- | --- | --- |
| SCSS 变量 | 编译期 | 全局 | 改主色、圆角、间距等静态值 |
| uni.scss | 编译期 | 全局 | 复用 mixin、函数 |
| CSS 变量 | 运行时 | 动态 | 暗色/亮色切换、用户自定义主题 |

---

## SCSS 变量覆盖

`@didaoktv/didaoui-uniapp/uni.scss` 暴露所有 SCSS 变量。在项目 `uni.scss` 中 `@import` 后覆盖：

```scss
/* uni.scss */
@import '@didaoktv/didaoui-uniapp/uni.scss';

/* 覆盖主色 */
$dd-primary: #f5a623;
$dd-primary-hover: #ffc107;

/* 覆盖圆角 */
$dd-radius-button: 8px;
$dd-radius-card: 12px;

/* 覆盖间距 */
$dd-space-default: 16px;

/* 覆盖字号 */
$dd-font-size-body: 14px;
```

::: warning 覆盖顺序
SCSS 变量覆盖**必须在 `@import` 之后**，且变量需用 `!default` 声明才能被覆盖。`@didaoktv/didaoui-uniapp/uni.scss` 中所有变量均使用 `!default`，直接赋值即可覆盖。
:::

### 可覆盖的 SCSS 变量（部分）

```scss
/* 色彩 */
$dd-primary: #f5a623 !default;
$dd-accent: #2d4ba0 !default;
$dd-success: #4caf50 !default;
$dd-warning: #f9a825 !default;
$dd-error: #e53935 !default;
$dd-info: #00bcd4 !default;
$dd-vip: #9c27b0 !default;

/* 中性色 */
$dd-neutral-900: #0a0a0a !default;
$dd-neutral-800: #171717 !default;
$dd-neutral-700: #2a2a2a !default;

/* 圆角 */
$dd-radius-sm: 2px !default;
$dd-radius-md: 4px !default;
$dd-radius-lg: 8px !default;
$dd-radius-xl: 12px !default;
$dd-radius-2xl: 16px !default;

/* 间距 */
$dd-space-1: 4px !default;
$dd-space-2: 8px !default;
$dd-space-3: 12px !default;
$dd-space-4: 16px !default;
$dd-space-5: 24px !default;
$dd-space-6: 32px !default;

/* 字体 */
$dd-font-size-body: 14px !default;
$dd-font-weight-body: 500 !default;
```

---

## uni.scss 自定义

`uni.scss` 不仅用于覆盖变量，还可复用组件库的 mixin 与函数：

```scss
/* uni.scss */
@import '@didaoktv/didaoui-uniapp/uni.scss';

/* 复用 mixin */
@use '@didaoktv/didaoui-uniapp/styles/mixins' as *;

/* 自定义工具类 */
.gold-text {
  color: var(--color-primary);
  text-shadow: 0 0 8px rgba(245, 166, 35, 0.4);
}

.glass-surface {
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur));
  border: 1px solid var(--glass-border);

  /* #ifdef MP-WEIXIN || MP-TOUTIAO */
  background: var(--glass-bg-strong);
  /* #endif */
}
```

::: tip uni.scss 全局注入
uni-app 编译器会将 `uni.scss` 自动注入到**所有组件**的 `<style lang="scss">` 中。在此定义的变量、mixin、工具类可在任意组件直接使用，无需手动 import。
:::

---

## CSS 变量运行时切换

CSS 变量支持运行时动态修改，适用于暗色/亮色切换、用户主题偏好等场景。

### 主题类切换

组件库预定义 `.dark` 与 `.light` 两套主题类。切换方式：

::: code-group

```ts [H5 端]
function toggleTheme(mode: 'dark' | 'light') {
  const root = document.documentElement
  root.classList.remove('dark', 'light')
  root.classList.add(mode)
  uni.setStorageSync('theme', mode)
}
```

```ts [小程序端（页面级）]
function toggleTheme(mode: 'dark' | 'light') {
  // 小程序无法操作 document，需在每个页面根节点切换 class
  const pages = getCurrentPages()
  const page = pages[pages.length - 1]
  page.setData({ themeClass: mode })
  uni.setStorageSync('theme', mode)
}
```

:::

```vue
<template>
  <view :class="['page', themeClass]">
    <dd-button type="primary">点歌</dd-button>
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const themeClass = ref('dark')

onMounted(() => {
  themeClass.value = uni.getStorageSync('theme') || 'dark'
})
</script>
```

### 单变量动态修改

可直接覆盖任意 CSS 变量：

```ts
// H5 端运行时改主色
document.documentElement.style.setProperty('--color-primary', '#ffd700')

// 小程序端（页面级）
const page = getCurrentPages().pop()
page.setData({ customPrimary: '#ffd700' })
```

```vue
<template>
  <view :style="{ '--color-primary': customPrimary }">
    <dd-button type="primary">点歌</dd-button>
  </view>
</template>
```

---

## 暗色 / 亮色模式

### 默认暗色

帝到 KTV **暗色优先**。`:root` 默认即暗色值，无需添加 `.dark` 类即可生效。

### 亮色模式

添加 `.light` 类切换为亮色主题：

```css
.light {
  --bg: #FAFAFA;
  --fg: var(--didao-neutral-900);
  --muted: var(--didao-neutral-500);
  --rule: var(--didao-neutral-200);
  --surface: #FFFFFF;
  --bg-card: #FFFFFF;
  --glass-bg: rgba(255,255,255,0.72);
  --glass-border: rgba(0,0,0,0.06);
  /* ... */
}
```

### 跟随系统

::: code-group

```ts [H5 端]
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
function applySystemTheme() {
  const root = document.documentElement
  root.classList.remove('dark', 'light')
  root.classList.add(mediaQuery.matches ? 'dark' : 'light')
}
mediaQuery.addEventListener('change', applySystemTheme)
applySystemTheme()
```

```ts [小程序端]
uni.onThemeChange((res) => {
  const theme = res.theme // 'dark' | 'light'
  const pages = getCurrentPages()
  const page = pages[pages.length - 1]
  page.setData({ themeClass: theme })
})
```

:::

### 暗色 / 亮色对照（核心变量）

| 变量 | Dark | Light |
| --- | --- | --- |
| `--bg` | `#0A0A0A` | `#FAFAFA` |
| `--fg` | `#F5F5F5` | `#0A0A0A` |
| `--muted` | `#757575` | `#616161` |
| `--surface` | `#0A0A0A` | `#FFFFFF` |
| `--bg-card` | `#171717` | `#FFFFFF` |
| `--color-primary` | `#F5A623` | `#F5A623`（不变） |
| `--glass-bg` | `rgba(23,23,23,0.72)` | `rgba(255,255,255,0.72)` |

::: tip 品牌色不随主题反转
`--primary`（帝王金）与 `--accent`（皇家蓝）在暗色/亮色下保持一致，确保品牌识别稳定。仅中性色与表面色随主题翻转。
:::

---

## 自定义主题示例

### 示例：春节红金主题

```scss
/* uni.scss */
@import '@didaoktv/didaoui-uniapp/uni.scss';

$dd-primary: #d32f2f;  /* 改为春节红 */
$dd-primary-hover: #f44336;
```

```ts
// 运行时增强金色发光
// #ifdef H5
document.documentElement.style.setProperty(
  '--shadow-glow-gold',
  '0 0 24px rgba(211,47,47,0.4), 0 0 48px rgba(211,47,47,0.2)'
)
// #endif
```

### 示例：节日紫金主题

```ts
// H5 端临时切换
document.documentElement.style.setProperty('--color-primary', '#9c27b0')
document.documentElement.style.setProperty('--shadow-glow-gold', 'var(--shadow-glow-vip)')
```

---

## 最佳实践

- **静态值用 SCSS**：主色、圆角、间距等编译期确定，用 SCSS 变量覆盖。
- **动态值用 CSS 变量**：暗色/亮色、用户偏好等运行时变化，用 CSS 变量切换。
- **主题类优先**：暗色/亮色切换用 `.dark` / `.light` 类，而非逐个改变量。
- **品牌色保持一致**：主色与辅色不随主题反转，仅翻转中性色。
- **uni.scss 只放全局**：变量、mixin、工具类放 `uni.scss`，页面特有样式放页面组件内。
- **小程序注意**：小程序无法操作 `document.documentElement`，主题切换需在页面根节点 `:class` 绑定。
