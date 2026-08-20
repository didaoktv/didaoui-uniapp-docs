# 色彩系统

帝到 KTV 的色彩体系围绕**帝王金**与**皇家蓝**的戏剧性张力构建，专为暗色移动端场景而生。整体气质是「夜店奢华 × 电商精致」——纯黑背景上的金色霓虹如夜街招牌，蓝色提供纵深而不抢金色主导地位。

品牌主色为 `#F5A623`（didao-primary-500，帝王金），用于主按钮、激活态导航指示、焦点环、填充标签与发光效果。辅色为 `#2D4BA0`（didao-accent-500，皇家蓝），用于次级强调与信息语义。系统标志性渐变为金色对角渐变（primary-400 → primary-600），贯穿全系统形成统一视觉签名。

---

## 色彩组总览

| 组名 | 语义 | 主色 (500) | 用途 |
| --- | --- | --- | --- |
| `primary` | 帝王金 | `#F5A623` | 主操作、激活态、焦点环、金色霓虹 |
| `accent` | 皇家蓝 | `#2D4BA0` | 次级强调、卡片媒体渐变、蓝色霓虹 |
| `success` | 成功 | `#4CAF50` | 完成、在线、正向反馈 |
| `warning` | 警示 | `#F9A825` | 提醒、待处理、限时 |
| `error` | 错误 | `#E53935` | 失败、危险、删除 |
| `info` | 信息 | `#00BCD4` | 中性提示、辅助说明 |
| `neutral` | 纯黑系 | `#424242` (600) | 背景、表面、边框、文本层级 |
| `vip` | 紫色 | `#9C27B0` | 勋章、VIP 卡、特权标识 |

> 中性色 `neutral` 在系统中以 600 为基准色（`isPrimary` 标记），实际页面背景使用更深的 800/900。

---

## 完整色阶

### Primary · 帝王金

<ColorCard name="primary-50" hex="#FFF8E1" />
<ColorCard name="primary-100" hex="#FFEDB3" />
<ColorCard name="primary-200" hex="#FFE082" />
<ColorCard name="primary-300" hex="#FFD54F" />
<ColorCard name="primary-400" hex="#FFC107" />
<ColorCard name="primary-500" hex="#F5A623" />
<ColorCard name="primary-600" hex="#D4891A" />
<ColorCard name="primary-700" hex="#B26D12" />
<ColorCard name="primary-800" hex="#8F520B" />
<ColorCard name="primary-900" hex="#6B3A05" />

| Token | Hex | 用法 |
| --- | --- | --- |
| `--didao-primary-50` | `#FFF8E1` | 容器浅底、hover 底色 |
| `--didao-primary-100` | `#FFEDB3` | 浅色描边、填充辅助 |
| `--didao-primary-200` | `#FFE082` | 标签浅色文本 |
| `--didao-primary-300` | `#FFD54F` | 装饰渐变中间色 |
| `--didao-primary-400` | `#FFC107` | 链接色、激活态文本 |
| `--didao-primary-500` | `#F5A623` | **主色**，主按钮填充 |
| `--didao-primary-600` | `#D4891A` | 卡片媒体渐变起点 |
| `--didao-primary-700` | `#B26D12` | 深色描边 |
| `--didao-primary-800` | `#8F520B` | 暗色容器填充 |
| `--didao-primary-900` | `#6B3A05` | primary-container 底色 |

### Accent · 皇家蓝

<ColorCard name="accent-50" hex="#E8EEF5" />
<ColorCard name="accent-100" hex="#C5D3E8" />
<ColorCard name="accent-200" hex="#9BB3D6" />
<ColorCard name="accent-300" hex="#728FC4" />
<ColorCard name="accent-400" hex="#4E6EB2" />
<ColorCard name="accent-500" hex="#2D4BA0" />
<ColorCard name="accent-600" hex="#1E3A8A" />
<ColorCard name="accent-700" hex="#152B6B" />
<ColorCard name="accent-800" hex="#0D1E4D" />
<ColorCard name="accent-900" hex="#061230" />

| Token | Hex | 用法 |
| --- | --- | --- |
| `--didao-accent-400` | `#4E6EB2` | 蓝色文字、图标 |
| `--didao-accent-500` | `#2D4BA0` | **辅色**，蓝色发光源 |
| `--didao-accent-700` | `#152B6B` | 卡片媒体渐变终点 |

### Success · 成功

<ColorCard name="success-50" hex="#E8F5E9" />
<ColorCard name="success-400" hex="#66BB6A" />
<ColorCard name="success-500" hex="#4CAF50" />
<ColorCard name="success-600" hex="#388E3C" />
<ColorCard name="success-800" hex="#1B5E20" />

| Token | Hex | 用法 |
| --- | --- | --- |
| `--didao-success-400` | `#66BB6A` | 成功图标浅色 |
| `--didao-success-500` | `#4CAF50` | **基准**，成功发光源 |
| `--didao-success-600` | `#388E3C` | 成功深色文本 |

### Warning · 警示

<ColorCard name="warning-50" hex="#FFFDE7" />
<ColorCard name="warning-400" hex="#FDD835" />
<ColorCard name="warning-500" hex="#F9A825" />
<ColorCard name="warning-600" hex="#F57F17" />
<ColorCard name="warning-800" hex="#994200" />

| Token | Hex | 用法 |
| --- | --- | --- |
| `--didao-warning-400` | `#FDD835` | 警示图标 |
| `--didao-warning-500` | `#F9A825` | **基准**，警示发光源 |
| `--didao-warning-600` | `#F57F17` | 警示深色文本 |

### Error · 错误

<ColorCard name="error-50" hex="#FFEBEE" />
<ColorCard name="error-400" hex="#EF5350" />
<ColorCard name="error-500" hex="#E53935" />
<ColorCard name="error-600" hex="#C62828" />
<ColorCard name="error-800" hex="#6D1212" />

| Token | Hex | 用法 |
| --- | --- | --- |
| `--didao-error-400` | `#EF5350` | 错误图标浅色 |
| `--didao-error-500` | `#E53935` | **基准**，错误发光源 |
| `--didao-error-800` | `#6D1212` | 错误容器深底 |

### Info · 信息

<ColorCard name="info-50" hex="#E0F7FA" />
<ColorCard name="info-400" hex="#26C6DA" />
<ColorCard name="info-500" hex="#00BCD4" />
<ColorCard name="info-600" hex="#0097A7" />
<ColorCard name="info-800" hex="#00535A" />

| Token | Hex | 用法 |
| --- | --- | --- |
| `--didao-info-400` | `#26C6DA` | 信息图标 |
| `--didao-info-500` | `#00BCD4` | **基准**，信息发光源 |
| `--didao-info-600` | `#0097A7` | 信息深色文本 |

### Neutral · 纯黑系

<ColorCard name="neutral-50" hex="#F5F5F5" />
<ColorCard name="neutral-200" hex="#BDBDBD" />
<ColorCard name="neutral-400" hex="#757575" />
<ColorCard name="neutral-500" hex="#616161" />
<ColorCard name="neutral-600" hex="#424242" />
<ColorCard name="neutral-700" hex="#2A2A2A" />
<ColorCard name="neutral-800" hex="#171717" />
<ColorCard name="neutral-900" hex="#0A0A0A" />
<ColorCard name="neutral-950" hex="#050505" />

| Token | Hex | 用法 |
| --- | --- | --- |
| `--didao-neutral-50` | `#F5F5F5` | 暗色模式主文本 |
| `--didao-neutral-200` | `#BDBDBD` | 次级文本 |
| `--didao-neutral-400` | `#757575` | muted 辅助文本 |
| `--didao-neutral-500` | `#616161` | 步骤未激活色 |
| `--didao-neutral-600` | `#424242` | **基准**，最高表面 |
| `--didao-neutral-700` | `#2A2A2A` | 边框、分隔线 |
| `--didao-neutral-800` | `#171717` | 卡片表面、容器 |
| `--didao-neutral-900` | `#0A0A0A` | **页面默认背景** |
| `--didao-neutral-950` | `#050505` | 极深背景 |

### VIP · 紫色

<ColorCard name="vip-500" hex="#9C27B0" />
<ColorCard name="vip-700" hex="#6A1B9A" />

> VIP 色阶仅定义 500/700 两档，用于勋章、VIP 卡等特权场景，不参与常规交互层级。

| Token | Hex | 用法 |
| --- | --- | --- |
| `--didao-vip-500` | `#9C27B0` | VIP 渐变起点、紫色发光源 |
| `--didao-vip-700` | `#6A1B9A` | VIP 渐变终点 |

---

## 语义别名

为屏蔽色阶细节，系统提供两层语义别名。**业务代码应优先使用别名**，仅在需要明确色阶时回退到 `didao-*` token。

### Layer 2 · 短别名

```css
:root {
  --primary: var(--didao-primary-500);
  --accent:  var(--didao-accent-500);
  --bg:      var(--didao-neutral-900);
  --fg:      var(--didao-neutral-50);
  --muted:   var(--didao-neutral-400);
  --rule:    var(--didao-neutral-700);
  --link:    var(--didao-primary-400);
  --surface: var(--didao-neutral-900);
  --surface-dim:            var(--didao-neutral-800);
  --surface-container-low:  var(--didao-neutral-800);
  --surface-container:      var(--didao-neutral-800);
  --surface-container-high: var(--didao-neutral-700);
  --surface-container-highest: var(--didao-neutral-600);
  --bg-section: var(--didao-neutral-800);
  --bg-card:    var(--didao-neutral-800);
  --error:      var(--didao-error-500);
  --error-container: var(--didao-error-900);
  --on-error:         #FFFFFF;
  --on-error-container: var(--didao-error-50);
  --interactive-hover:  rgba(255,255,255,0.08);
  --interactive-focus:  rgba(255,255,255,0.12);
  --interactive-press:  rgba(255,255,255,0.16);
}
```

### Layer 3 · 便携别名

遵循 shadcn/Tailwind 风格命名，便于跨框架迁移：

```css
:root {
  --color-primary:               var(--primary);
  --color-primary-hover:         var(--didao-primary-400);
  --color-on-primary:            #0A0A0A;
  --color-primary-container:     var(--didao-primary-900);
  --color-on-primary-container:  var(--didao-primary-100);
  --color-background:  var(--bg);
  --color-foreground:  var(--fg);
  --color-surface:     var(--surface);
  --color-surface-container:        var(--surface-container);
  --color-surface-container-low:    var(--surface-container-low);
  --color-surface-container-high:   var(--surface-container-high);
  --color-surface-container-highest: var(--surface-container-highest);
  --color-card:                   var(--bg-card);
  --color-on-surface:             var(--fg);
  --color-on-surface-variant:     var(--muted);
  --color-muted-foreground:       var(--muted);
  --color-secondary:              var(--didao-neutral-700);
  --color-secondary-container:    var(--didao-neutral-700);
  --color-on-secondary-container: var(--didao-neutral-100);
  --color-error:          var(--error);
  --color-error-container: var(--error-container);
  --color-on-error:        var(--on-error);
  --color-on-error-container: var(--on-error-container);
  --color-outline:         var(--rule);
  --color-outline-variant: var(--didao-neutral-700);
  --color-border:          var(--rule);
}
```

> ponytail: `--color-success/warning/info` 别名未提供；`didao-*` 色阶组已直接覆盖这些语义，避免冗余映射。

### 辅助色与叠加

```css
:root {
  --color-white: #FFFFFF;
  --color-black: #000000;
  --color-primary-deep: #1A1200;   /* 极深金底 */
  --color-bronze:       #CD7F32;   /* 铜色辅助 */
  --color-overlay:        rgba(0,0,0,0.5);
  --color-overlay-strong: rgba(0,0,0,0.6);
  --color-overlay-soft:   rgba(0,0,0,0.4);
  --border-subtle: rgba(255,255,255,0.06);
  --surface-hover: rgba(255,255,255,0.1);
  --surface-press: rgba(255,255,255,0.2);
  --sheen:    rgba(255,255,255,0.25);  /* 高光 */
  --text-glow: rgba(255,255,255,0.3);  /* 文字辉光 */
}
```

---

## 暗色 / 亮色主题对照

系统**暗色优先**，亮色模式为镜像变体。主题通过 `class="dark"` / `class="light"` 切换。

| 语义 Token | Dark (默认) | Light |
| --- | --- | --- |
| `--bg` | `#0A0A0A` (neutral-900) | `#FAFAFA` |
| `--fg` | `#F5F5F5` (neutral-50) | `#0A0A0A` (neutral-900) |
| `--muted` | `#757575` (neutral-400) | `#616161` (neutral-500) |
| `--rule` | `#2A2A2A` (neutral-700) | `#BDBDBD` (neutral-200) |
| `--link` | `#FFC107` (primary-400) | `#D4891A` (primary-600) |
| `--surface` | `#0A0A0A` | `#FFFFFF` |
| `--surface-dim` | `#171717` (neutral-800) | `#F5F5F5` |
| `--surface-container` | `#171717` | `#FFFFFF` |
| `--surface-container-high` | `#2A2A2A` (neutral-700) | `#EEEEEE` |
| `--surface-container-highest` | `#424242` (neutral-600) | `#E0E0E0` |
| `--bg-section` | `#171717` | `#F5F5F5` |
| `--bg-card` | `#171717` | `#FFFFFF` |
| `--color-on-primary` | `#0A0A0A` | `#FFFFFF` |
| `--color-primary-container` | `#6B3A05` (primary-900) | `#FFF8E1` (primary-50) |
| `--interactive-hover` | `rgba(255,255,255,0.08)` | `rgba(0,0,0,0.06)` |
| `--interactive-focus` | `rgba(255,255,255,0.12)` | `rgba(0,0,0,0.10)` |
| `--interactive-press` | `rgba(255,255,255,0.16)` | `rgba(0,0,0,0.14)` |
| `--glass-bg` | `rgba(23,23,23,0.72)` | `rgba(255,255,255,0.72)` |
| `--glass-border` | `rgba(255,255,255,0.08)` | `rgba(0,0,0,0.06)` |

> 主色 `--primary` 与辅色 `--accent` 在两种主题下保持一致（金/蓝为品牌色，不随主题反转）。

---

## 使用准则

- **业务代码只用别名**：`var(--color-primary)`、`var(--bg-card)`，避免直接写 hex。
- **强调用金色**：主按钮、激活态、CTA 一律 `--color-primary`，禁止用蓝/紫替代。
- **次级强调用蓝色**：仅在需要与金区分时使用 `--accent`（如卡片媒体渐变）。
- **文本层级**：主文本 `--fg`，次级 `--muted`，禁用 neutral-300 以下（暗底对比不足）。
- **VIP 紫仅限特权场景**：勋章、VIP 卡、会员升级提示，不得用于普通交互。
- **暗色优先**：组件样式以暗色表面为基准编写，亮色模式需额外验证。
