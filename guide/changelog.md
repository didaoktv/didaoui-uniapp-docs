# 更新日志

本页面记录帝到 KTV UI（`@didaoktv/didaoui-uniapp`）的版本变更。

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
