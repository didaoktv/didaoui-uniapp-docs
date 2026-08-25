<script setup lang="ts">
import { onLaunch, onShow } from '@dcloudio/uni-app'

// ============================================================
// 主题切换（H5）— 库 v1.3.0 主题机制的消费方示例
// 机制: :root 发射 base+dark 默认值，html.light 覆盖 44 个翻转 delta
// 持久化: localStorage['dd-theme']，默认暗色
// ============================================================
const THEME_KEY = 'dd-theme'
type Theme = 'dark' | 'light'

/* #ifdef H5 */
const SUN = '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="5"/><path d="M12 1.5v2.5M12 20v2.5M1.5 12H4M20 12h2.5M4.6 4.6l1.8 1.8M17.6 17.6l1.8 1.8M19.4 4.6l-1.8 1.8M6.4 17.6l-1.8 1.8" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"/></svg>'
const MOON = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.4 14.2A9 9 0 1 1 9.8 2.6a7.2 7.2 0 0 0 11.6 11.6z"/></svg>'

function currentTheme(): Theme {
  return localStorage.getItem(THEME_KEY) === 'light' ? 'light' : 'dark'
}

function applyTheme(t: Theme) {
  document.documentElement.classList.toggle('light', t === 'light')
  const btn = document.getElementById('dd-theme-toggle')
  if (btn) {
    // 当前浅色 → 显示月亮（点击切回暗色）；当前暗色 → 显示太阳
    btn.innerHTML = t === 'light' ? MOON : SUN
    btn.title = t === 'light' ? '切换暗色主题' : '切换浅色主题'
  }
}

function mountThemeToggle() {
  if (document.getElementById('dd-theme-toggle')) return
  const btn = document.createElement('button')
  btn.id = 'dd-theme-toggle'
  btn.className = 'dd-theme-toggle'
  btn.type = 'button'
  btn.addEventListener('click', () => {
    const next: Theme = currentTheme() === 'light' ? 'dark' : 'light'
    localStorage.setItem(THEME_KEY, next)
    applyTheme(next)
  })
  document.body.appendChild(btn)
  applyTheme(currentTheme()) // 挂载后补初始图标
}
/* #endif */

onLaunch(() => {
  // #ifdef H5
  applyTheme(currentTheme())
  mountThemeToggle()
  // #endif
  // eslint-disable-next-line no-console
  console.log('[DidaoUI-uniapp] demo launched')
})

onShow(() => {
  // page show hook (no-op)
})
</script>

<style lang="scss">
/* 库主题输出：:root/page 发射 base(59)+dark(44) 全量默认值，.light 类覆盖翻转层 */
@import '@didaoktv/didaoui-uniapp/scss/theme';

/* ============================================================
   全局 demo 样式 — 全部消费 --dd-* 语义 token，随明暗主题自动翻转
   （var 第二参为不引主题文件时的兜底，与库组件 var 写法同构）
   ============================================================ */
page {
  background: var(--dd-bg, #0a0a0a);
  color: var(--dd-fg, #f5f5f5);
  font-family: 'Noto Sans SC', -apple-system, sans-serif;
  font-size: 28rpx;
  min-height: 100vh;
}

/* demo 容器：限制手机宽度 375px，居中 */
.demo-page {
  max-width: 375px;
  margin: 0 auto;
  min-height: 100vh;
  padding: 24rpx 24rpx 24rpx;
  box-sizing: border-box;
  background: var(--dd-bg, #0a0a0a);
}

.demo-section {
  background: var(--dd-bg-card, #171717);
  border-radius: 16rpx;
  padding: 28rpx 24rpx;
  margin-bottom: 24rpx;
}

.demo-title {
  display: block;
  font-size: 26rpx;
  font-weight: 700;
  color: var(--dd-primary, #ffc107);
  margin-bottom: 20rpx;
  letter-spacing: 1rpx;
}

.demo-subtitle {
  display: block;
  font-size: 22rpx;
  color: var(--dd-muted, #9e9e9e);
  margin-bottom: 16rpx;
  margin-top: 20rpx;
}

.demo-row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20rpx;
  align-items: center;
}

.demo-col {
  display: flex;
  flex-direction: column;
  gap: 20rpx;
}

.demo-label {
  display: inline-block;
  font-size: 22rpx;
  color: var(--dd-muted, #9e9e9e);
  margin-right: 16rpx;
  margin-bottom: 16rpx;
}

.demo-note {
  display: block;
  font-size: 22rpx;
  color: var(--dd-text-tertiary, #757575);
  margin-top: 16rpx;
  line-height: 1.5;
}

.demo-spacer {
  height: 1200rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--dd-text-tertiary, #424242);
  font-size: 24rpx;
}

.demo-fill {
  width: 100%;
}

/* === 自定义滚动条 (帝王金, 品牌色不随明暗翻转) === */
/* Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: rgba(245, 166, 35, 0.35) transparent;
}

/* Chromium / WebKit / Edge / Safari */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: rgba(245, 166, 35, 0.35);
  border-radius: 9999px;
}

::-webkit-scrollbar-thumb:hover {
  background: #f5a623;
}

::-webkit-scrollbar-corner {
  background: transparent;
}

/* #ifdef H5 */
/* overscroll 露出的 body 底色跟随主题 */
body {
  background: var(--dd-bg, #0a0a0a);
}

/* === 浮动主题切换按钮（App.vue onLaunch 注入的原生 DOM）=== */
.dd-theme-toggle {
  position: fixed;
  right: 14px;
  bottom: calc(14px + env(safe-area-inset-bottom));
  z-index: 9999;
  width: 42px;
  height: 42px;
  border-radius: 9999px;
  border: 1px solid var(--dd-border-default, rgba(255, 255, 255, 0.08));
  background: var(--dd-bg-card, #171717);
  color: var(--dd-primary, #f5a623);
  box-shadow: var(--dd-shadow-3, 0 12px 32px rgba(0, 0, 0, 0.5));
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  transition: transform 0.15s ease;
}

.dd-theme-toggle:hover {
  transform: scale(1.08);
}

.dd-theme-toggle:active {
  transform: scale(0.95);
}

.dd-theme-toggle svg {
  width: 20px;
  height: 20px;
  display: block;
}
/* #endif */
</style>
