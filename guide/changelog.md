# 更新日志

本页面记录帝到 KTV UI（`@didaoktv/didaoui-uniapp`）的版本变更。

---

## v1.2.0

发布日期：2026-08-22

### ✨ 新增

#### 组件（新增 17 个，总数 84）

面向三端页面（customer / staff / boss）补齐文本/富媒体、键盘输入、商城规格与 canvas 绘制能力，新组件统一参考 **Vant + mp-html 等主流组件库**同名组件 API、符合 uni-app 多端规范，并同步进设计系统（消费 `scss/_variables.scss` 既有 `$dd-*` token）。文档站新增「Canvas 绘制」分类。

| 组件 | 类型 | 用途 | 参考基准 |
|------|------|------|---------|
| `dd-text` | 数据展示 | 文本（主题色 / 价格 / 手机号 / 姓名脱敏 / 日期 / 超链接模式、图标、行数省略） | 主流组件库同名组件 |
| `dd-link` | 数据展示 | 超链接（H5 新窗口 / APP 内置浏览器 / 小程序复制到剪贴板） | 主流组件库同名组件 |
| `dd-copy` | 数据展示 | 点击复制到剪贴板（toast / modal 两种提示） | 主流组件库同名组件 |
| `dd-album` | 数据展示 | 相册（单图自适应 / 多图九宫 / 行数 / 超出 +N / 点击预览） | 主流组件库同名组件 |
| `dd-parse` | 数据展示 | 富文本解析（mp-html v2.5.1 内核，图片懒加载 / 预览 / 视频 / 表格） | mp-html |
| `dd-markdown` | 数据展示 | Markdown 渲染（marked 解析 → dd-parse 渲染，代码块行号、明暗主题） | mp-html + marked |
| `dd-keyboard` | 表单输入 | 键盘面板（数字 / 身份证 / 车牌三模式，乱序、工具条、安全区适配） | 主流组件库同名组件 |
| `dd-number-keyboard` | 表单输入 | 数字键盘（数字 / 身份证、小数点、乱序、长按连删） | 主流组件库同名组件 |
| `dd-car-keyboard` | 表单输入 | 车牌键盘（省份简称 / 字母切换、中→英自动切换、乱序） | 主流组件库同名组件 |
| `dd-cascader` | 表单输入 | 级联选择器（多级联动、单/双列布局、垂直步骤头部、v-model 回显） | 主流组件库同名组件 |
| `dd-goods-sku` | 表单输入 | 商品规格选择（SKU 树 / 无效组合置灰 / 库存联动 / 步进器） | Vant SKU |
| `dd-coupon` | 数据展示 | 优惠券（券 / 红包 / 卡片三形状、尺寸、内置渐变主题） | 主流组件库同名组件 |
| `dd-avatar-group` | 数据展示 | 头像组（maxCount / 遮挡比例 / +N 更多提示） | 主流组件库同名组件 |
| `dd-barcode` | Canvas 绘制 | 条形码（CODE128 / CODE39 / EAN / UPC 系列，canvas 或图片输出） | JsBarcode 同族 API |
| `dd-cropper` | Canvas 绘制 | 图片裁剪（拖拽 / 双指缩放旋转 / 固定裁剪框 / 导出指定尺寸） | 社区裁剪方案 |
| `dd-signature` | Canvas 绘制 | 签名板（笔画粗细 / 8 色画笔 / 撤销清空 / 导出 PNG） | 社区 canvas 签名方案 |
| `dd-poster` | Canvas 绘制 | 海报生成（JSON 配置 text / image / qrcode / view，渐变背景，导出图片） | uni 插件市场 poster |

### 💥 破坏性变更

- **`dd-avatar` API 重构**：`size` 改为数值（默认 `40`），移除旧 `vip` / `online` 属性与 `xs/sm/md/lg/xl` 尺寸枚举；新增 `text` / `icon` / `bgColor` / `color` / `fontSize` / `mpAvatar` / `randomBgColor` / `defaultUrl` / `colorIndex` / `name` 等属性与 `click` 事件，图片加载失败自动回退内置默认头像。

### ✨ 组件增强

- `dd-tag` 新增 `bgColor` / `color` 属性：`bgColor` 自定义背景（outlined 时覆盖边框色），`color` 自定义文字颜色，兼容明暗主题。

### 📝 文档

- 文档站同步 17 篇新组件文档（Props / Events / Slots 表格均按源码对齐），`avatar.md` 按新 API 重写；侧边栏新增「Canvas 绘制」分类，首页分类网格计数更新为 84。

---

## v1.1.0

发布日期：2026-08-22

### ✨ 新增

#### 组件（新增 4 个，总数 67）

基于三端页面（customer / staff / boss）承接性评估补齐，新组件统一参考 **Vant 等主流组件库**同名组件 API、符合 uni-app 多端规范，并同步进设计系统（消费 `scss/_variables.scss` 既有 `$dd-*` token）。

| 组件 | 类型 | 用途 | 参考基准 |
|------|------|------|---------|
| `dd-bill-detail` | 布局/业务卡片 | 账单明细（商品项/小计/合计/状态/操作插槽） | Vant `Card` + GoodsAction 聚合 |
| `dd-workorder-card` | 布局/业务卡片 | 工单条目（类型/状态/进度/布置 checklist/完成确认） | Vant `Card` + `Tag` + Checklist |
| `dd-calendar` | 布局/业务卡片 | 月历 + 时段（日期单选/区间/禁选/时段格） | Vant `Calendar` |
| `dd-qrcode` | 布局/业务卡片 | canvas 二维码（无三方依赖，本地生成矩阵） | 主流二维码组件 API |

`dd-qrcode` 默认前景/背景为黑白，是保证可扫描性的刻意例外（仅此组件一处）。

#### 能力说明

- 二维码由库内 `libs/utils` 的 QR 编码器本地生成（移植自 Project Nayuki，含 Reed-Solomon 纠错、8 掩码择优与自动版本选择），不发起网络请求，H5 / 微信 / 抖音通用。
- 新增日期工具与 QR 工具（`pad2` / `dateFormat` / `generateQR` 等）随 `libs/utils` 一同具名导出。

满足三端缺口：账单明细（C端 `order/bill`、店员 `room-bill`）、工单（店员 todo/布置工单）、日历（排班 / 预订时段价目）、二维码（收款码 / 会员码 / 连房贴码 / 邀请函 / 开票码）。

---

## v1.0.0

发布日期：2026-08-10

### 🎉 首次发布

帝到 KTV UI 首个正式版本。基于 uni-app + Vue 3 构建，专为暗色移动端 KTV 娱乐场景设计，融合帝王金 + 皇家蓝品牌色彩与抖音商城式柔和圆角。

### ✨ 新增

#### 组件（61 个）

覆盖 7 大类别，全面满足点歌、订房、会员管理等 KTV 核心业务流程：

| 类别 | 数量 | 组件 |
| --- | --- | --- |
| 表单输入 | 12 | Button, Input, Switch, Checkbox, Radio, Search Bar, Slider, Stepper, Date Picker, Field, Picker, Rate, Upload |
| 导航 | 10 | Bottom Tab Navigation, Top NavBar, Segmented Tab, Swipeable Tab, Drawer, Tabbar, Tabbar Item, Backtop, Collapse, Collapse Item, Dropdown Menu, Dropdown Item |
| 布局 | 4 | Card, Room Card, Feature Grid, Sticky |
| 数据展示 | 15 | Tag, Stat Card, Champion Card, Avatar, Badge, List Cell, Cell, Cell Group, Count Down, Divider, Image, Progress, Skeleton, Empty State, Step, Steps |
| 浮层反馈 | 8 | Modal, Action Sheet, Toast, Alert, Loading/Spinner, Dialog, Overlay, Popup, Popover, Popover Item |
| 交互 | 4 | Swipe Action, Swipe, Swipe Item, Pull Refresh |
| 小程序专属 | 2 | Capsule Button, Mini Program NavBar |

#### 设计系统

- **色彩**：8 色彩组（primary 帝王金 / accent 皇家蓝 / success / warning / error / info / neutral 纯黑系 / vip 紫），完整 50-950 色阶
- **排版**：4 字体族（Playfair Display / Noto Sans SC / JetBrains Mono），9 字号 / 9 字重 / 9 行高
- **间距**：8 级（4-64px），4px 栅格基础
- **圆角**：6 级（sm 2px - full 9999px），Vant 对齐 + 抖音商城风柔和
- **阴影**：5 层（Card → Overlay）+ 13+ 发光变体（金/蓝/绿/黄/红/青/紫 × sm/md/lg）
- **玻璃拟态**：3 档透明度（72% / 85% / 95%）+ 20px 模糊，含小程序降级方案

#### 多端支持

一次开发，五端编译：

| 端 | 状态 |
| --- | --- |
| H5 | ✅ 完整支持 |
| 微信小程序 | ✅ 完整支持（玻璃拟态降级） |
| 抖音小程序 | ✅ 完整支持（玻璃拟态降级） |
| Android | ✅ 完整支持（backdrop-filter 部分降级） |
| iOS | ✅ 完整支持 |

#### 主题能力

- 暗色优先，亮色模式镜像支持
- SCSS 变量编译期覆盖
- CSS 变量运行时切换
- `.dark` / `.light` 主题类切换
- 跟随系统主题偏好

### 🎨 设计风格

- **暗色优先**：纯黑背景（`#0A0A0A`）+ 卡片表面（`#171717`）
- **金色霓虹**：主操作金色发光，模拟夜街霓虹招牌
- **金色签名渐变**：卡片媒体与品牌渐变统一采用 primary-400 → primary-600 金色对角渐变
- **柔和圆角**：Vant 式小圆角 + 抖音商城式容器大圆角
- **厚重排版**：标题 700-800 字重，正文 500 中等字重

### 📦 安装

```bash
npm install @didaoktv/didaoui-uniapp
```

### 🔗 链接

- [安装指南](./install.md)
- [快速开始](./quick-start.md)
- [设计系统](../design/color.md)

---

## 版本规范

本项目遵循 [Semantic Versioning](https://semver.org/lang/zh-CN/)：

- **主版本号**：不兼容的 API 变更
- **次版本号**：向下兼容的功能新增
- **修订号**：向下兼容的 bug 修复

### 变更类型标记

| 标记 | 含义 |
| --- | --- |
| 🎉 | 重大发布 / 里程碑 |
| ✨ | 新增功能 |
| 🎨 | 设计 / 样式调整 |
| 🐛 | Bug 修复 |
| ⚡ | 性能优化 |
| 💥 | 破坏性变更 |
| 📦 | 打包 / 依赖变更 |
| 📝 | 文档变更 |
| 🗑️ | 废弃功能 |
