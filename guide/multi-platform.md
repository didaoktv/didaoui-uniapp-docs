# 多端适配

帝到 KTV UI 基于 uni-app，一次开发可编译至 **H5、微信小程序、抖音小程序、Android、iOS** 五端。本文档介绍各端编译配置、条件编译用法与平台差异注意事项。

---

## 五端总览

| 端 | 平台标识 | 编译命令 | 输出目录 |
| --- | --- | --- | --- |
| H5 | `H5` | `npm run dev:h5` | `dist/dev/h5` |
| 微信小程序 | `MP-WEIXIN` | `npm run dev:mp-weixin` | `dist/dev/mp-weixin` |
| 抖音小程序 | `MP-TOUTIAO` | `npm run dev:mp-toutiao` | `dist/dev/mp-toutiao` |
| Android | `APP-PLUS` | `npm run dev:app-plus` | `dist/dev/app-plus` |
| iOS | `APP-PLUS` | `npm run dev:app-plus` | `dist/dev/app-plus` |

> Android 与 iOS 共用 `APP-PLUS` 标识，差异通过 `uni.getSystemInfoSync().platform` 区分。

---

## manifest.json 各端配置

```json
{
  "name": "帝到KTV",
  "appid": "__UNI__XXXXXXX",
  "description": "帝到KTV 点歌订房",
  "versionName": "1.0.0",
  "versionCode": 100,

  "app-plus": {
    "usingComponents": true,
    "nvueStyleCompiler": "uni-app",
    "compilerVersion": 3,
    "splashscreen": {
      "alwaysShowBeforeRender": true,
      "waiting": true,
      "autoclose": true,
      "delay": 0
    },
    "modules": {},
    "distribute": {
      "android": {
        "permissions": [
          "<uses-permission android:name=\"android.permission.INTERNET\"/>"
        ],
        "minSdkVersion": 21
      },
      "ios": {
        "dSYMs": false
      },
      "sdkConfigs": {}
    }
  },

  "quickapp": {},

  "mp-weixin": {
    "appid": "wxXXXXXXXXXXXX",
    "setting": {
      "urlCheck": false,
      "es6": true,
      "minified": true,
      "postcss": true
    },
    "usingComponents": true,
    "permission": {},
    "lazyCodeLoading": "requiredComponents"
  },

  "mp-toutiao": {
    "appid": "ttXXXXXXXXXXXX",
    "setting": {
      "es6": true,
      "minified": true,
      "postcss": true
    },
    "usingComponents": true
  },

  "h5": {
    "title": "帝到KTV",
    "router": {
      "mode": "history",
      "base": "/"
    },
    "devServer": {
      "port": 5173,
      "https": false
    },
    "publicPath": "/",
    "template": "index.html"
  },

  "vueVersion": "3"
}
```

---

## 条件编译用法

### 平台标识

| 标识 | 平台 |
| --- | --- |
| `H5` | H5 / Web |
| `MP-WEIXIN` | 微信小程序 |
| `MP-TOUTIAO` | 抖音小程序 |
| `MP-ALIPAY` | 支付宝小程序 |
| `MP-BAIDU` | 百度小程序 |
| `APP-PLUS` | App（iOS + Android） |
| `APP-PLUS-NVUE` | App nvue 页面 |
| `MP` | 所有小程序 |

### 模板条件编译

```vue
<template>
  <view>
    <!-- #ifdef H5 -->
    <view class="h5-only">仅在 H5 显示</view>
    <!-- #endif -->

    <!-- #ifdef MP-WEIXIN -->
    <view class="wx-only">仅在微信小程序显示</view>
    <!-- #endif -->

    <!-- #ifdef MP-TOUTIAO -->
    <view class="tt-only">仅在抖音小程序显示</view>
    <!-- #endif -->

    <!-- #ifdef APP-PLUS -->
    <view class="app-only">仅在 App 显示</view>
    <!-- #endif -->

    <!-- #ifdef MP -->
    <view class="mp-all">所有小程序显示</view>
    <!-- #endif -->

    <!-- #ifndef H5 -->
    <view class="not-h5">非 H5 显示</view>
    <!-- #endif -->
  </view>
</template>
```

### 脚本条件编译

```ts
// #ifdef H5
console.log('运行于 H5')
const platform = 'h5'
// #endif

// #ifdef MP-WEIXIN
console.log('运行于微信小程序')
const platform = 'mp-weixin'
// #endif

// #ifdef MP-TOUTIAO
console.log('运行于抖音小程序')
const platform = 'mp-toutiao'
// #endif

// #ifdef APP-PLUS
console.log('运行于 App')
const platform = 'app-plus'
// #endif
```

### 样式条件编译

```scss
.glass-nav {
  background: var(--glass-bg);
  border-bottom: 1px solid var(--glass-border);

  /* #ifdef H5 */
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  /* #endif */

  /* #ifdef MP-WEIXIN || MP-TOUTIAO */
  /* 小程序不支持 backdrop-filter，降级 */
  background: var(--glass-bg-strong);
  /* #endif */

  /* #ifdef APP-PLUS */
  backdrop-filter: blur(20px);
  /* #endif */
}
```

### 多平台组合

```scss
/* #ifdef MP-WEIXIN || MP-TOUTIAO || MP-ALIPAY */
/* 所有小程序生效 */
/* #endif */

/* #ifndef H5 */
/* 除 H5 外所有端生效 */
/* #endif */
```

---

## 平台差异注意事项

### 1. backdrop-filter 玻璃拟态

| 平台 | 支持 | 处理 |
| --- | --- | --- |
| H5 | ✅ | 直接使用 |
| 微信小程序 | ❌ | 降级 `--glass-bg-strong` (85%) |
| 抖音小程序 | ❌ | 降级 `--glass-bg-strong` (85%) |
| iOS App | ✅ | 直接使用 |
| Android App | ⚠️ 部分 | 降级 `--glass-bg-strong` |

详见[玻璃拟态文档](../design/glass.md)。

### 2. 搜索框 type

小程序的 `<input type="search">` 行为与 H5 不一致：

```vue
<template>
  <dd-search-bar
    v-model="keyword"
    placeholder="搜索歌曲、歌手"
  />
</template>
```

```scss
/* 小程序端搜索框需禁用原生键盘的「搜索」按钮样式 */
/* #ifdef MP */
.dd-search-bar input[type="search"]::-webkit-search-decoration {
  display: none;
}
/* #endif */
```

### 3. 状态栏处理

App 与小程序需处理状态栏高度：

```ts
const systemInfo = uni.getSystemInfoSync()
const statusBarHeight = systemInfo.statusBarHeight // 状态栏高度 px

// #ifdef APP-PLUS || MP-WEIXIN || MP-TOUTIAO
const navBarHeight = statusBarHeight + 44
// #endif

// #ifdef H5
const navBarHeight = 44
// #endif
```

```vue
<template>
  <view class="custom-nav" :style="{ paddingTop: statusBarHeight + 'px' }">
    <view class="nav-content">帝到 KTV</view>
  </view>
</template>
```

### 4. 胶囊按钮（小程序专属）

微信小程序右上角原生胶囊按钮需预留空间：

```vue
<template>
  <view class="nav-bar">
    <!-- #ifdef MP-WEIXIN -->
    <view class="capsule-placeholder" :style="{ width: capsuleWidth + 'px' }" />
    <!-- #endif -->
    <text class="nav-title">帝到 KTV</text>
  </view>
</template>

<script setup lang="ts">
const capsuleWidth = ref(0)

// #ifdef MP-WEIXIN
const menuButton = uni.getMenuButtonBoundingClientRect()
capsuleWidth.value = menuButton.width + 16
// #endif
</script>
```

### 5. rpx 与 px

| 单位 | 平台 | 换算 |
| --- | --- | --- |
| `rpx` | 小程序 | 750rpx = 屏宽 |
| `px` | H5 / App | 物理像素 |
| `upx` | uni-app 通用 | 等同 rpx |

设计稿以 375px 宽为基准时，`1px = 2rpx`。组件库 CSS 变量以 `px` 定义，小程序端可在 `uni.scss` 中以 `rpx` 重定义关键变量。

### 6. 字体加载

Google Fonts CDN 在小程序端不可用，需改用本地字体或系统字体：

```scss
/* #ifdef H5 */
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700;800&display=swap');
/* #endif */

/* #ifdef MP || APP-PLUS */
/* 小程序 / App 使用系统字体回退 */
--font-heading: 'PingFang SC', 'Helvetica Neue', sans-serif;
--font-body: 'PingFang SC', 'Helvetica Neue', sans-serif;
/* #endif */
```

### 7. 长按复制

H5 端文本默认可选中复制，小程序端需配置 `user-select`：

```vue
<text user-select>{{ orderNo }}</text>
```

### 8. 滚动行为

| 行为 | H5 | 小程序 |
| --- | --- | --- |
| `position: sticky` | ✅ | ⚠️ 部分组件不支持 |
| `overflow: scroll` | ✅ | ❌ 用 `scroll-view` |
| 滚动惯性 | ✅ | ⚠️ iOS 支持较好 |

滚动列表统一使用 `<scroll-view>` 组件，避免直接依赖 CSS overflow。

---

## 各端编译验证

| 端 | 验证要点 |
| --- | --- |
| H5 | backdrop-filter 生效、字体加载、路由跳转 |
| 微信小程序 | 胶囊按钮避让、rpx 换算、字体回退 |
| 抖音小程序 | 同微信，额外验证 tt.* API 兼容 |
| Android | 状态栏沉浸、字体回退、backdrop-filter 降级 |
| iOS | 状态栏沉浸、字体回退、backdrop-filter 生效 |

---

## 最佳实践

- **能用条件编译不写两套代码**：差异用 `#ifdef` 处理，公共逻辑保持一份。
- **小程序优先用组件**：原生 `<input>`、`<scroll-view>` 优于自定义实现。
- **rpx 用于布局，px 用于细部**：布局尺寸用 rpx 适配各屏，边框、阴影用 px 保持精细。
- **字体准备回退**：Google Fonts 仅 H5 可用，小程序/App 需系统字体回退方案。
- **状态栏统一处理**：自定义导航栏时，所有端需计算 `statusBarHeight`。
- **逐端验证**：每次改动后至少在 H5 + 一个小程序端回归，避免平台差异引入 bug。
