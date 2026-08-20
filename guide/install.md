# 安装

帝到 KTV UI（`@didaoktv/didaoui-uniapp`）基于 uni-app + Vue 3 构建，支持 H5、微信小程序、抖音小程序、Android、iOS 五端。本文介绍如何安装与引入组件库。

---

## 环境要求

| 依赖 | 版本 |
| --- | --- |
| uni-app | ≥ 3.0 |
| Vue | ≥ 3.2 |
| sass / dart-sass | ≥ 1.50 |
| TypeScript（可选） | ≥ 4.5 |

::: tip 前置条件
项目需为 uni-app Vue 3 工程。若使用 Vue 2 或非 uni-app 项目，本组件库不适用。
:::

---

## npm 安装

在项目根目录执行：

::: code-group

```bash [npm]
npm install @didaoktv/didaoui-uniapp
```

```bash [pnpm]
pnpm add @didaoktv/didaoui-uniapp
```

```bash [yarn]
yarn add @didaoktv/didaoui-uniapp
```

:::

安装后，组件库位于 `node_modules/@didaoktv/didaoui-uniapp/`，主要入口：

- `@didaoktv/didaoui-uniapp` — 组件主入口（全量注册）
- `@didaoktv/didaoui-uniapp/uni.scss` — SCSS 变量与 mixin（供 `uni.scss` 引入）
- `@didaoktv/didaoui-uniapp/dist/index.css` — 编译后的 CSS（含所有 token）

---

## 全量引入

### 1. main.ts 注册插件

```ts
// main.ts
import { createSSRApp } from 'vue'
import App from './App.vue'
import ddktvUI from '@didaoktv/didaoui-uniapp'
import '@didaoktv/didaoui-uniapp/dist/index.css'

export function createApp() {
  const app = createSSRApp(App)
  app.use(ddktvUI)
  return { app }
}
```

### 2. uni.scss 引入主题变量

```scss
/* uni.scss */
@import '@didaoktv/didaoui-uniapp/uni.scss';
```

::: warning uni.scss 位置
`uni.scss` 必须位于项目根目录（与 `pages.json` 同级），uni-app 编译器会自动注入到所有组件样式中。在此文件中引入 `@didaoktv/didaoui-uniapp/uni.scss` 后，所有 SCSS 变量即可在任意组件中使用。
:::

完成以上两步后，所有组件即可在模板中直接使用（`<dd-button>`、`<dd-input>` 等），无需逐个 import。

---

## 按需引入

为减小包体积，推荐按需引入。两种方式：

### 方式一：局部注册（推荐）

在需要的页面/组件中单独引入：

```vue
<template>
  <dd-button type="primary" @click="onOrder">点歌</dd-button>
</template>

<script setup lang="ts">
import { DdButton } from '@didaoktv/didaoui-uniapp'
import '@didaoktv/didaoui-uniapp/dist/index.css'

const onOrder = () => {
  console.log('点歌')
}
</script>
```

### 方式二：全局按需注册

在 `main.ts` 中仅注册所需组件：

```ts
// main.ts
import { createSSRApp } from 'vue'
import App from './App.vue'
import { DdButton, DdInput, DdSearchBar } from '@didaoktv/didaoui-uniapp'
import '@didaoktv/didaoui-uniapp/dist/index.css'

export function createApp() {
  const app = createSSRApp(App)
  app.component('DdButton', DdButton)
  app.component('DdInput', DdInput)
  app.component('DdSearchBar', DdSearchBar)
  return { app }
}
```

### 方式三：unplugin-auto-import 自动按需

::: code-group

```ts [vite.config.ts]
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { DdktvResolver } from '@didaoktv/didaoui-uniapp/resolver'

export default defineConfig({
  plugins: [
    AutoImport({ resolvers: [DdktvResolver()] }),
    Components({ resolvers: [DdktvResolver()] }),
  ],
})
```

:::

配置后，模板中直接使用 `<dd-button>` 即可自动引入，无需手动 import。

---

## TypeScript 支持

组件库内置类型声明，无需额外配置。按需引入时类型自动推导：

```ts
import { DdButton } from '@didaoktv/didaoui-uniapp'
// DdButton 类型已自动推导，含 props/events/slots
```

如需全局类型提示，在 `tsconfig.json` 中加入：

```json
{
  "compilerOptions": {
    "types": ["@didaoktv/didaoui-uniapp/types"]
  }
}
```

---

## uni.scss 自定义

`@didaoktv/didaoui-uniapp/uni.scss` 暴露所有 SCSS 变量，可在项目 `uni.scss` 中覆盖：

```scss
/* uni.scss */
@import '@didaoktv/didaoui-uniapp/uni.scss';

/* 覆盖主色（全局生效） */
$dd-primary: #f5a623;
$dd-radius-card: 12px;
```

::: tip 变量覆盖时机
SCSS 变量覆盖**必须在 `@import` 之后**，且仅影响编译期。运行时主题切换请使用 CSS 变量（见[主题定制](./theme.md)）。
:::

---

## 验证安装

创建一个测试页面，引入 `dd-button` 验证：

```vue
<template>
  <view class="page">
    <dd-button type="primary">快乐驾到</dd-button>
  </view>
</template>

<style lang="scss">
.page {
  padding: 16px;
  background: var(--bg);
  min-height: 100vh;
}
</style>
```

运行后若看到金色主按钮渲染于纯黑背景，即安装成功。

---

## 常见问题

### Q: 样式不生效 / 变量未定义

确认 `main.ts` 中已引入 `@didaoktv/didaoui-uniapp/dist/index.css`，且 `uni.scss` 中已 `@import '@didaoktv/didaoui-uniapp/uni.scss'`。

### Q: 小程序端组件不显示

检查 `pages.json` 是否配置了 `easycom`（全量引入无需配置；按需引入需配置自动引入规则）：

```json
{
  "easycom": {
    "autoscan": true,
    "custom": {
      "^dd-(.*)": "@didaoktv/didaoui-uniapp/components/dd-$1/dd-$1.vue"
    }
  }
}
```

### Q: 包体积过大

改用按需引入 + `unplugin-auto-import`，仅打包使用到的组件。

### Q: H5 端字体未加载

确认 `index.html` 或全局样式中已引入 Google Fonts（Playfair Display / Noto Sans SC / JetBrains Mono），见[排版文档](../design/typography.md)。
