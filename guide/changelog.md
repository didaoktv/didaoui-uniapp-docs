# 更新日志

本页面记录帝到 KTV UI（`@didaoktv/didaoui-uniapp`）的版本变更。

---

## v2.8.0

发布日期：2026-10-23

### ✨ 新增

- 新组件 `dd-order-list` 订单列表：外卖平台式订单卡片（头部多选圈+标题+时间+状态、品项行名称×数量+小计、底部件数+合计），`v-model:selected` 多选受控，选中态主色描边；适配收银页待结算订单多选合并收款。

---

## v2.7.0

发布日期：2026-10-23

### ✨ 组件增强

- `dd-goods-card` 新增 `size` 档位（`sm` / `md`）：横向小号适配购物车列表行（96rpx 紧凑图、不渲染描述），竖向小号适配一行三列宫格。
- `dd-price` 新增 `size` 三档（`sm` / `md` / `lg`）。

### 🎨 样式与重构

- `dd-cart-bar` 弹层商品行复用 `dd-goods-card` 小号横卡；清空二次确认由 `uni.showModal` 改库内 `dd-dialog`（H5 端恒在弹层之上）；`label` 默认值改为空；入口圆钮与栏体对齐。
- `theme.scss` 新增 H5 平台弹层补丁：`uni.showModal` / `showToast` / `showActionSheet` 层级抬到 2050，底色 / 文字 / 按钮跟随库内明暗主题换肤。
- 弹层打开时底栏抬升保持到关闭动画结束，修复关闭瞬间下滑面板盖住栏体。

---

## v2.6.0

发布日期：2026-10-22

### ✨ 新增

- 新组件 `dd-cart-bar` 购物车栏：外卖式入口圆钮 + 数量角标弹跳 → 弹出已选商品弹层（复用 `dd-popup`），减到 0 移除、清空二次确认、空车自动禁结算；弹层打开时栏抬升至 popup+1 档保持可点。
- `dd-package-sku` 支持 `perQty` 单次选中份数：加价合计按份 ×N、摘要名称 ×N，与 `qty` 库存语义正交（ADR-0026）。

### ✨ 组件增强

- `dd-goods-sku` / `dd-package-sku` 新增划线原价展示；库存取值改 `??` 兜底（0 为合法值）并禁用售罄规格。
- `dd-goods-card` `price-right` 插槽布局优化（单行省略 + flex 收缩防挤出）。

---

## v2.5.0

发布日期：2026-10-21

### ✨ 组件增强

- `dd-goods-card` / `dd-goods-sku` / `dd-package-sku` 缺图时渲染文字占位（主题随机底色 + 名称前 2 字）。
- `dd-package-sku` 单选组点击直接替换选中项。

---

## v2.4.0

发布日期：2026-10-21

### ✨ 组件增强

- `dd-goods-card` 新增 `price-right` 插槽（价格与操作同排）。

---

## v2.3.0

发布日期：2026-10-19

### ✨ 新增

- 新组件 `dd-package-sku` 套餐可选组弹层（N 选 M / 加价合计 / 售罄置灰 / FIXED 只读）。

---

## v2.2.0

发布日期：2026-10-15

### 🎨 样式与重构

- 控件高度统一 rpx 档位体系，输入框与默认按钮同档等高。

---

## v2.1.0

发布日期：2026-10-14

### ✨ 组件增强

- `dd-popup` 新增标题行（`title` prop + `#title` 插槽）。

---

## v2.0.1

发布日期：2026-10-14

### 🐛 问题修复

- `dd-icon` 默认 `size` 置空，避免 fontSize 误设 `inherit`；`dd-poster` 合并重复 style 绑定修复 z-index 丢失。

---

## v2.0.0

发布日期：2026-10-10

### 💥 破坏性变更

- z-index 收编为唯一档位真源（ADR 0013，`libs/config/zIndex.js`）：组件只准选档或档内 +1 派生，禁止手写魔数。

### 📦 打包 / 依赖

- bump-consumers 脚本移除已弃用的 uniapp-boss，消费方措辞更新为两端。

---

## v1.4.3

发布日期：2026-09-28

### ✨ 新增

- 新组件 `dd-goods-card` 商品卡片，并登记首页引入版本徽标规则。

---

## v1.4.2

发布日期：2026-09-28

### 🎨 样式与重构

- `dd-sidebar` 导航徽标内联贴文字并淡化禁用态；`dd-tree-select` 回退金色选中背景；主题 `bg-section` 加深以区分左右栏。

---

## v1.4.1

发布日期：2026-09-28

### 🎨 样式与重构

- `dd-tree-select` 选中项改为金色背景反白展示。

### 📝 文档

- 全库清除存量 Vant 指涉表述，统一为中性描述。

---

## v1.4.0

发布日期：2026-09-27

### ✨ 新增

- 新组件 `dd-tree-select` / `dd-sidebar` / `dd-submit-bar` / `dd-price`。

---

## v1.3.9

发布日期：2026-09-07

### ✨ 组件增强

- `dd-icon` 新增 `iconLabels` 导出与图标中文名映射。

### 🎨 样式与重构

- 图标库切换至 iconfont 项目 5222155 并校正字形编码；统一弹窗类组件背景色变量与样式写法。

---

## v1.3.8

发布日期：2026-09-04

### ✨ 组件增强

- 新增 digit 输入类型与按钮 `plain` 样式。

### 📦 打包 / 依赖

- 新增 bump-consumers 脚本，发版后对齐消费方依赖版本。

---

## v1.3.7

发布日期：2026-09-01

### 🎨 样式与重构

- 统一空状态、分段选项卡、弹窗组件样式与功能；优化 `dd-cell` 布局对齐与行高。

---

## v1.3.6

发布日期：2026-08-30

### 🐛 问题修复

- `dd-number-keyboard` 修复退格键重复触发及按键布局问题。

### 🎨 样式与重构

- `dd-car-keyboard` 改用 `dd-popup` 封装键盘弹窗；移除 `dd-cell-group` 冗余内缩外边距。

---

## v1.3.5

发布日期：2026-08-30

### 🎨 样式与重构

- 全局弹窗适配 `dd-portal` 组件；重构键盘组件与配置；`dd-car-keyboard` 重构为 TS + 组合式 API。

---

## v1.3.4

发布日期：2026-08-30

### ✨ 组件增强

- `dd-picker` 新增 `defaultIndexes` prop。

### 🐛 问题修复

- 修复 picker 指示条高度。

---

## v1.3.3

发布日期：2026-08-28

### ✨ 新增

- 新组件 `dd-code-button` 代码按钮。

### 🎨 样式与重构

- `dd-input` 简化 inputType 计算逻辑，移除 number 类型降级。

### 📝 文档

- 新增 `llms.txt` 组件索引；AGENTS.md 增补组件同步规则。

---

## v1.3.2

发布日期：2026-08-28

### 🐛 问题修复

- `dd-parse` 修复模块顶层调用 uni 导致的未定义错误。

### 📝 文档

- 新增 AGENTS.md 编码守则。

---

## v1.3.1

发布日期：2026-08-27

### 🎨 样式与重构

- 替换存量硬编码颜色为 CSS 变量。

---

## v1.3.0

发布日期：2026-08-26

### ✨ 新增

- 主题系统：全量组件切换为 CSS 变量主题方案（编译期 SCSS 覆盖 → 运行时 CSS 变量 → `.dark` / `.light` 类 delta 覆盖）。

---

## v1.2.3

发布日期：2026-08-25

### 🐛 问题修复

- `dd-cropper` 修复 2D 画布拖动残影和透明像素透出问题。

---

## v1.2.2

发布日期：2026-08-25

### 🎨 样式与重构

- 移除 i18n 模块，文案统一硬编码中文；优化 `dd-coupon` 与 `dd-cropper` 组件。

---

## v1.2.1

发布日期：2026-08-23

### 🐛 问题修复

- `dd-badge` 修复徽章显示逻辑与内容处理问题。

---

## v1.2.0

发布日期：2026-08-22

### ✨ 新增

#### 组件（新增 17 个，总数 84）

面向三端页面（customer / staff / boss）补齐文本/富媒体、键盘输入、商城规格与 canvas 绘制能力，新组件统一参考 **mp-html 等主流组件库**同名组件 API、符合 uni-app 多端规范，并同步进设计系统（消费 `scss/_variables.scss` 既有 `$dd-*` token）。文档站新增「Canvas 绘制」分类。

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
| `dd-goods-sku` | 表单输入 | 商品规格选择（SKU 树 / 无效组合置灰 / 库存联动 / 步进器） | 主流商城 SKU 组件 |
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

基于三端页面（customer / staff / boss）承接性评估补齐，新组件统一参考 **主流组件库**同名组件 API、符合 uni-app 多端规范，并同步进设计系统（消费 `scss/_variables.scss` 既有 `$dd-*` token）。

| 组件 | 类型 | 用途 | 参考基准 |
|------|------|------|---------|
| `dd-bill-detail` | 布局/业务卡片 | 账单明细（商品项/小计/合计/状态/操作插槽） | 卡片 + 底部操作条聚合 |
| `dd-workorder-card` | 布局/业务卡片 | 工单条目（类型/状态/进度/布置 checklist/完成确认） | 卡片 + 标签 + 清单聚合 |
| `dd-calendar` | 布局/业务卡片 | 月历 + 时段（日期单选/区间/禁选/时段格） | 主流日历组件 |
| `dd-qrcode` | 布局/业务卡片 | canvas 二维码（无三方依赖，本地生成矩阵） | 主流二维码组件 API |

`dd-qrcode` 默认前景/背景为黑白，是保证可扫描性的刻意例外（仅此组件一处）。

#### 能力说明

- 二维码由库内 `libs/utils` 的 QR 编码器本地生成（移植自 Project Nayuki，含 Reed-Solomon 纠错、8 掩码择优与自动版本选择），不发起网络请求，H5 / 微信 / 抖音通用。
- 新增日期工具与 QR 工具（`pad2` / `dateFormat` / `generateQR` 等）随 `libs/utils` 一同具名导出。

满足三端缺口：账单明细（C端 `order/bill`、店员 `room-bill`）、工单（店员 todo/布置工单）、日历（排班 / 预订时段价目）、二维码（收款码 / 会员码 / 连房贴码 / 邀请函 / 开票码）。

---

## v1.0.1

发布日期：2026-08-20

### 📝 文档

- README 精简冗余标语描述。

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
- **圆角**：6 级（sm 2px - full 9999px），克制小圆角 + 抖音商城风柔和
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
- **柔和圆角**：克制小圆角 + 抖音商城式容器大圆角
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
