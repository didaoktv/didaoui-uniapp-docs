# 快速开始

完成[安装](./install.md)后，本指南带你 5 分钟跑通第一个帝到 KTV UI 组件，并配置好暗色背景与多端入口。

---

## 第一个组件：dd-button

创建首页 `pages/index/index.vue`：

```vue
<template>
  <view class="page">
    <view class="hero">
      <text class="title">帝到 KTV</text>
      <text class="subtitle">快乐驾到</text>
    </view>
    <dd-button type="primary" block @click="onOrder">点歌</dd-button>
    <dd-button type="default" block @click="onBook">订房</dd-button>
  </view>
</template>

<script setup lang="ts">
const onOrder = () => uni.showToast({ title: '点歌', icon: 'none' })
const onBook = () => uni.showToast({ title: '订房', icon: 'none' })
</script>

<style lang="scss">
.page {
  padding: 24px 16px;
  background: var(--bg);
  min-height: 100vh;
}
.hero {
  text-align: center;
  margin-bottom: 32px;
}
.title {
  display: block;
  font-size: var(--font-size-h1);
  font-weight: var(--font-weight-h1);
  color: var(--fg);
  margin-bottom: 8px;
}
.subtitle {
  display: block;
  font-size: var(--font-size-body);
  color: var(--muted);
}
</style>
```

::: tip 组件命名
所有组件以 `dd-` 为前缀（如 `dd-button`、`dd-input`、`dd-search-bar`），与 uni-app easycom 规范对齐，避免与原生标签冲突。
:::

---

## 暗色背景配置

帝到 KTV 为暗色优先设计。需将页面背景设为纯黑，并应用 `.dark` 主题类。

### 方式一：App.vue 全局配置

```vue
<!-- App.vue -->
<script setup lang="ts">
import { onLaunch } from '@dcloudio/uni-app'

onLaunch(() => {
  // 默认暗色模式
  // #ifdef H5
  document.documentElement.classList.add('dark')
  // #endif
})
</script>

<style lang="scss">
/* 全局页面背景 */
page {
  background: var(--bg);
  color: var(--fg);
  font-family: var(--font-body);
  font-size: var(--font-size-body);
  line-height: var(--line-height-body);
}
</style>
```

### 方式二：pages.json 全局样式

```json
{
  "globalStyle": {
    "navigationBarTextStyle": "white",
    "navigationBarTitleText": "帝到 KTV",
    "navigationBarBackgroundColor": "#0A0A0A",
    "backgroundColor": "#0A0A0A",
    "backgroundColorTop": "#0A0A0A",
    "backgroundColorBottom": "#0A0A0A",
    "backgroundTextStyle": "light"
  }
}
```

::: warning 小程序导航栏
小程序原生导航栏无法直接用 CSS 变量。`navigationBarBackgroundColor` 需写死 hex 值（`#0A0A0A` = `--didao-neutral-900`）。如需玻璃质感导航栏，使用自定义导航栏组件（见 [Mini Program NavBar](../components/mini-program-navbar.md)）。
:::

---

## pages.json 配置

完整的多页面 `pages.json` 示例：

```json
{
  "easycom": {
    "autoscan": true,
    "custom": {
      "^dd-(.*)": "@didaoktv/didaoui-uniapp/components/dd-$1/dd-$1.vue"
    }
  },
  "pages": [
    {
      "path": "pages/index/index",
      "style": {
        "navigationBarTitleText": "帝到 KTV",
        "navigationStyle": "custom"
      }
    },
    {
      "path": "pages/song/list",
      "style": {
        "navigationBarTitleText": "歌曲排行"
      }
    },
    {
      "path": "pages/room/booking",
      "style": {
        "navigationBarTitleText": "订房"
      }
    },
    {
      "path": "pages/member/center",
      "style": {
        "navigationBarTitleText": "会员中心"
      }
    }
  ],
  "globalStyle": {
    "navigationBarTextStyle": "white",
    "navigationBarBackgroundColor": "#0A0A0A",
    "backgroundColor": "#0A0A0A",
    "backgroundTextStyle": "light"
  },
  "tabBar": {
    "color": "#757575",
    "selectedColor": "#F5A623",
    "backgroundColor": "#0A0A0A",
    "borderStyle": "black",
    "list": [
      { "pagePath": "pages/index/index", "text": "首页" },
      { "pagePath": "pages/song/list", "text": "点歌" },
      { "pagePath": "pages/room/booking", "text": "订房" },
      { "pagePath": "pages/member/center", "text": "我的" }
    ]
  }
}
```

::: tip easycom 自动引入
配置 `easycom.custom` 后，模板中直接写 `<dd-button>` 即可自动解析，无需 import。这是 uni-app 推荐的引入方式。
:::

---

## 条件编译说明

uni-app 通过注释式条件编译处理多端差异：

```vue
<template>
  <view>
    <!-- #ifdef H5 -->
    <view>仅在 H5 显示</view>
    <!-- #endif -->

    <!-- #ifdef MP-WEIXIN -->
    <view>仅在微信小程序显示</view>
    <!-- #endif -->

    <!-- #ifdef MP-TOUTIAO -->
    <view>仅在抖音小程序显示</view>
    <!-- #endif -->

    <!-- #ifdef APP-PLUS -->
    <view>仅在 App 显示</view>
    <!-- #endif -->
  </view>
</template>

<script setup lang="ts">
// #ifdef H5
console.log('运行于 H5')
// #endif

// #ifndef MP-WEIXIN
console.log('非微信小程序环境')
// #endif
</script>

<style lang="scss">
.glass {
  background: var(--glass-bg-strong);

  /* #ifdef H5 */
  backdrop-filter: blur(20px);
  /* #endif */

  /* #ifdef MP-WEIXIN || MP-TOUTIAO */
  /* 小程序降级，见玻璃拟态文档 */
  /* #endif */
}
</style>
```

### 常用平台标识

| 标识 | 平台 |
| --- | --- |
| `H5` | H5 / Web |
| `MP-WEIXIN` | 微信小程序 |
| `MP-TOUTIAO` | 抖音小程序 |
| `APP-PLUS` | App（iOS + Android） |
| `MP` | 所有小程序 |

### 条件编译指令

| 指令 | 含义 |
| --- | --- |
| `#ifdef` | 若定义（ifdef） |
| `#ifndef` | 若未定义（ifndef） |
| `#endif` | 结束 |
| `\|\|` | 或（多平台） |
| `&&` | 与（不常用） |

::: warning 注释格式
条件编译必须是**注释**格式：模板用 `<!-- #ifdef -->`，JS/CSS 用 `// #ifdef` 或 `/* #ifdef */`。不可省略注释符号，否则会被当作真实代码执行。
:::

---

## 运行项目

::: code-group

```bash [H5]
npm run dev:h5
```

```bash [微信小程序]
npm run dev:mp-weixin
```

```bash [抖音小程序]
npm run dev:mp-toutiao
```

```bash [App]
npm run dev:app-plus
```

:::

H5 端打开浏览器访问 `http://localhost:5173`，应看到纯黑背景上的金色「点歌」按钮。小程序端在对应开发者工具中打开 `dist/dev/mp-*` 目录。

---

## 下一步

- [安装](./install.md) — 完整安装与按需引入
- [主题定制](./theme.md) — SCSS 变量覆盖与运行时主题切换
- [多端适配](./multi-platform.md) — 五端编译配置与平台差异
- [设计系统](../design/color.md) — 色彩/排版/间距等设计 token
