# 渐变

帝到 KTV 的渐变体系是「霓虹质感」的核心载体——从按钮填充到文字高光，从径向光晕到玻璃光泽，所有渐变都统一在一套 token 中，避免硬编码散落。

::: tip 设计哲学
**光泽即生命**。纯黑背景上，渐变让平面拥有了光泽和体积——金色渐变是主操作的「金属感」，玻璃渐变是卡片的「通透感」，文字渐变是标题的「贵气」。渐变永远服务于质感，不为装饰而装饰。
:::

---

## 渐变分类

| 类别 | 命名模式 | 数量 | 典型用途 |
| --- | --- | --- | --- |
| **标准渐变** | `--gradient-{color}` | 7 色 | 按钮、标签、卡片填充（135°，400→600） |
| **宽幅渐变** | `--gradient-{color}-wide` | 2 色 | Hero 区域、大幅背景（135°，300→600/700） |
| **三段渐变** | `--gradient-{color}-triple` | 1 色 | 金属质感按钮（135°，三段色阶） |
| **方向渐变** | `--gradient-{color}-{v\|h}` | 2 色 | 导航栏、进度条（90° 或 180°） |
| **文字渐变** | `--gradient-text-{variant}` | 3 种 | 标题、价格、强调文字 |
| **径向光斑** | `--gradient-spot-{color}` | 2 种 | 背景氛围、卡片角落光晕 |
| **光泽渐变** | `--gradient-sheen-{direction}` | 2 种 | 玻璃卡片、按钮高光 |

---

## 标准渐变（135°）

7 种语义色，统一角度 **135°**，统一跨度 **400 → 600**（VIP 为 500→700）。所有按钮、标签、小面积填充一律使用标准渐变。

| Token | 方向 | 色阶 | 用途 |
| --- | --- | --- | --- |
| `--gradient-primary` | 135° | primary-400 → primary-600 | 主按钮、主操作 |
| `--gradient-accent` | 135° | accent-400 → accent-600 | 辅按钮、次级强调 |
| `--gradient-success` | 135° | success-400 → success-600 | 成功态、完成标记 |
| `--gradient-warning` | 135° | warning-400 → warning-600 | 提醒、限时活动 |
| `--gradient-error` | 135° | error-400 → error-600 | 错误、危险操作 |
| `--gradient-info` | 135° | info-400 → info-600 | 信息提示、中性标签 |
| `--gradient-vip` | 135° | vip-500 → vip-700 | VIP 专属、特权标识 |
| `--gradient-neutral` | 135° | neutral-600 → neutral-800 | 暗色卡片、低调填充 |

```css
:root {
  --gradient-primary:  linear-gradient(135deg, var(--didao-primary-400), var(--didao-primary-600));
  --gradient-accent:   linear-gradient(135deg, var(--didao-accent-400), var(--didao-accent-600));
  --gradient-success:  linear-gradient(135deg, var(--didao-success-400), var(--didao-success-600));
  --gradient-warning:  linear-gradient(135deg, var(--didao-warning-400), var(--didao-warning-600));
  --gradient-error:    linear-gradient(135deg, var(--didao-error-400), var(--didao-error-600));
  --gradient-info:     linear-gradient(135deg, var(--didao-info-400), var(--didao-info-600));
  --gradient-vip:      linear-gradient(135deg, var(--didao-vip-500), var(--didao-vip-700));
  --gradient-neutral:  linear-gradient(135deg, var(--didao-neutral-600), var(--didao-neutral-800));
}
```

---

## 宽幅渐变

跨度更大（300→600 或 300→700），色彩更丰富，用于**大面积背景**如 Hero 区块、活动 Banner。

| Token | 方向 | 色阶 | 用途 |
| --- | --- | --- | --- |
| `--gradient-primary-wide` | 135° | primary-300 → primary-600 | 金色宽幅，主视觉背景 |
| `--gradient-accent-wide` | 135° | accent-300 → accent-700 | 蓝色宽幅，辅视觉背景 |

```css
:root {
  --gradient-primary-wide: linear-gradient(135deg, var(--didao-primary-300), var(--didao-primary-600));
  --gradient-accent-wide:  linear-gradient(135deg, var(--didao-accent-300), var(--didao-accent-700));
}
```

---

## 三段渐变

三段色阶（亮→中→暗）模拟**金属质感**，用于高级按钮或特色卡片。

| Token | 方向 | 色阶 | 用途 |
| --- | --- | --- | --- |
| `--gradient-primary-triple` | 135° | primary-300 → primary-500 → primary-600 | 金属质感主按钮 |

```css
:root {
  --gradient-primary-triple: linear-gradient(
    135deg,
    var(--didao-primary-300) 0%,
    var(--didao-primary-500) 50%,
    var(--didao-primary-600) 100%
  );
}
```

---

## 方向渐变

标准色阶但不同方向，用于水平/垂直填充的场景。

| Token | 方向 | 色阶 | 用途 |
| --- | --- | --- | --- |
| `--gradient-primary-h` | 90°（水平） | primary-400 → primary-600 | 导航栏、Tab 指示器 |
| `--gradient-primary-v` | 180°（垂直） | primary-400 → primary-600 | 顶栏、底部操作栏 |
| `--gradient-accent-h` | 90°（水平） | accent-400 → accent-600 | 辅色顶栏、标签条 |

```css
:root {
  --gradient-primary-h: linear-gradient(90deg, var(--didao-primary-400), var(--didao-primary-600));
  --gradient-primary-v: linear-gradient(180deg, var(--didao-primary-400), var(--didao-primary-600));
  --gradient-accent-h:  linear-gradient(90deg, var(--didao-accent-400), var(--didao-accent-600));
}
```

---

## 文字渐变

专门用于 `background-clip: text` 的文字渐变效果，提供金色、浅金、蓝色三种。

### 使用方式

```css
.text-gradient-gold {
  background: var(--gradient-text-gold);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}
```

### 三种文字渐变

| Token | 色阶 | 适用场景 |
| --- | --- | --- |
| `--gradient-text-gold` | primary-300 → primary-500 | 深色背景上的金色标题 |
| `--gradient-text-gold-light` | white → primary-200 | 深色背景上的浅色金文字（VIP 感） |
| `--gradient-text-blue` | accent-300 → accent-500 | 辅色标题、标签文字 |

```css
:root {
  --gradient-text-gold:       linear-gradient(135deg, var(--didao-primary-300), var(--didao-primary-500));
  --gradient-text-gold-light: linear-gradient(135deg, var(--color-white), var(--didao-primary-200));
  --gradient-text-blue:       linear-gradient(135deg, var(--didao-accent-300), var(--didao-accent-500));
}
```

---

## 径向光斑

`radial-gradient` 径向渐变，用作**背景氛围装饰**——在页面角落或卡片上投下淡淡的彩色光晕。

| Token | 形态 | 颜色 | 用途 |
| --- | --- | --- | --- |
| `--gradient-spot-gold` | 顶部椭圆辐射，60% 处透明 | gold 8% 透明度 | 页面顶部金色氛围 |
| `--gradient-spot-blue` | 右下角椭圆辐射，60% 处透明 | blue 8% 透明度 | 页面底部蓝色氛围 |

```css
:root {
  --gradient-spot-gold: radial-gradient(ellipse at top, rgba(245,166,35,0.08), transparent 60%);
  --gradient-spot-blue: radial-gradient(ellipse at bottom right, rgba(45,75,160,0.08), transparent 60%);
}
```

---

## 光泽渐变（Sheen）

基于 `--sheen` 变量（白色 8% 透明度）的光泽效果，模拟玻璃/金属表面的高光反射。

| Token | 方向 | 用途 |
| --- | --- | --- |
| `--gradient-sheen-top` | 180°（从上到下） | 卡片顶部高光、玻璃顶边 |
| `--gradient-sheen-diagonal` | 135°（斜向） | 按钮斜向光泽、图标高光 |

```css
:root {
  --sheen: rgba(255, 255, 255, 0.08);

  --gradient-sheen-top:      linear-gradient(180deg, var(--sheen) 0%, transparent 100%);
  --gradient-sheen-diagonal: linear-gradient(135deg, var(--sheen) 0%, transparent 50%);
}
```

---

## 玻璃模糊档位

玻璃态（Glassmorphism）的 `backdrop-filter` 模糊强度三档：

| Token | 值 | 用途 |
| --- | --- | --- |
| `--glass-blur-sm` | `blur(4px)` | 轻量玻璃：标签、小浮层 |
| `--glass-blur-md` | `blur(10px)` | 标准玻璃：卡片、弹窗 |
| `--glass-blur-lg` | `blur(24px)` | 深度玻璃：导航栏、全屏遮罩 |

通常配合 `--glass-bg`（半透明白色）使用：

```css
.glass-card {
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur-md);
  -webkit-backdrop-filter: var(--glass-blur-md);
}
```

---

## 使用准则

- **优先用标准渐变**：小面积填充一律 `--gradient-{color}`，宽幅/三段仅在视觉需要时使用。
- **文字渐变用专用 token**：不要用普通渐变做文字效果，`--gradient-text-*` 已针对文字可读性优化。
- **角度约定**：主渐变统一 135°，水平填充用 `-h`，垂直填充用 `-v`，不随意自定义角度。
- **光泽节制**：sheen 渐变只加在有玻璃/金属质感的元素上，同屏不超过 2 处。
- **光斑做背景**：spot 渐变仅用于页面级背景氛围，不直接叠加在内容上。
- **玻璃模糊选档**：卡片用 md，导航栏用 lg，小标签用 sm。
- **禁止硬编码渐变**：所有 `linear-gradient` / `radial-gradient` 必须走 token，不在组件内直接写色值。
