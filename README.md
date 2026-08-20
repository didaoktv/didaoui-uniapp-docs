# DidaoUI-uniapp-docs

[@didaoktv/didaoui-uniapp](https://www.npmjs.com/package/@didaoktv/didaoui-uniapp) 组件库的文档站 — VitePress 构建，内嵌 uni-app H5 实时演示。

## 目录结构

```
├── .vitepress/          # VitePress 配置与自定义主题
│   ├── config.ts        # 站点配置（侧边栏 / 导航 / alias）
│   └── theme/           # DemoBlock、ColorCard、手机模拟器等主题组件
├── components/          # 61 个组件文档（md）
├── design/              # 设计规范文档（色彩 / 字体 / 间距 / 玻璃拟态...）
├── guide/               # 指南（快速上手 / 多端编译 / 主题定制）
├── h5-demo/             # uni-app H5 演示应用（iframe 嵌入文档站）
│   └── src/pages/       # 每组件一个 demo 页面
├── public/              # 静态资源
└── scripts/
    ├── build-docs.mjs   # 构建编排：H5 demo → public/h5-demo → VitePress
    └── check-md.mjs     # md 自检：代码围栏成对 + DemoBlock 配平
```

## 本地开发

```bash
# 依赖需装两层（文档根目录 + h5-demo 子目录）
npm install
cd h5-demo && npm install && cd ..

# 同时启动文档站(5173)和 H5 demo(5174)
npm run dev
```

本地若存在同级组件库源码目录（`../DidaoUI-uniapp`），VitePress 会自动 alias 过去，改组件源码即时热更新；CI / 线上环境自动回落到 npm 包。

## 构建

```bash
npm run build
# 产物: .vitepress/dist/
```

构建流程（见 `scripts/build-docs.mjs`）：
1. 构建 h5-demo（uni-app H5）
2. 复制产物到 `public/h5-demo/`（VitePress 以根路径服务）
3. 构建 VitePress

提交前可跑 `node scripts/check-md.mjs` 自检文档语法（围栏未闭合会直接炸构建，这是历史踩过的坑）。

## 部署（Vercel）

| 配置项 | 值 |
|---|---|
| Framework Preset | VitePress |
| Install Command | `npm install && cd h5-demo && npm install` |
| Build Command | `npm run build` |
| Output Directory | `.vitepress/dist` |

推送 main 自动部署，PR 自动生成预览链接。

## 组件库版本联动

文档站依赖 npm 上的 `@didaoktv/didaoui-uniapp`（非本地路径）。组件库发新版本后需在此目录执行：

```bash
npm update @didaoktv/didaoui-uniapp
cd h5-demo && npm update @didaoktv/didaoui-uniapp
```

再提交推送，文档站才会用上新版组件。

## 相关仓库

- 组件库源码: [didaoktv/didaoui-uniapp](https://github.com/didaoktv/didaoui-uniapp)
- 本文档站: [didaoktv/didaoui-uniapp-docs](https://github.com/didaoktv/didaoui-uniapp-docs)
