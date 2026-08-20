<script setup lang="ts">
/**
 * PhoneFrame — 纯手机外壳框 (375×812, 圆角 40px, 刘海, 状态栏)
 * 可复用于首页展示 / 文档内嵌预览。内容通过默认 slot 注入。
 */
defineProps<{
  /** 状态栏标题，默认显示时间 */
  statusTitle?: string
}>()
</script>

<template>
  <div class="phone-frame">
    <!-- 刘海 -->
    <div class="phone-frame__notch" />
    <!-- 状态栏 -->
    <div class="phone-frame__status-bar">
      <span class="phone-frame__time">{{ statusTitle ?? '9:41' }}</span>
      <span class="phone-frame__icons">
        <span class="phone-frame__signal" />
        <span class="phone-frame__battery" />
      </span>
    </div>
    <!-- 内容区 -->
    <div class="phone-frame__screen">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.phone-frame {
  position: relative;
  width: 375px;
  height: 812px;
  background: #0a0a0a;
  border-radius: 40px;
  border: 8px solid #1a1a1a;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.6), 0 0 24px rgba(245, 166, 35, 0.15);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.phone-frame__notch {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
  height: 28px;
  background: #0a0a0a;
  border-radius: 0 0 18px 18px;
  z-index: 10;
}

.phone-frame__status-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 44px;
  padding: 0 28px 0 24px;
  font-size: 14px;
  font-weight: 600;
  color: #f5f5f5;
  flex-shrink: 0;
}

.phone-frame__time {
  font-family: 'Noto Sans SC', sans-serif;
}

.phone-frame__icons {
  display: flex;
  align-items: center;
  gap: 6px;
}

.phone-frame__signal {
  width: 18px;
  height: 10px;
  background: linear-gradient(to top, #f5f5f5 0%, #f5f5f5 30%, transparent 30%, transparent 50%, #f5f5f5 50%, #f5f5f5 70%, transparent 70%);
  clip-path: polygon(0 100%, 25% 60%, 50% 100%, 75% 30%, 100% 100%);
}

.phone-frame__battery {
  width: 24px;
  height: 12px;
  border: 1.5px solid #f5f5f5;
  border-radius: 3px;
  position: relative;
  padding: 1px;
}

.phone-frame__battery::after {
  content: '';
  position: absolute;
  right: -3px;
  top: 3px;
  width: 2px;
  height: 4px;
  background: #f5f5f5;
  border-radius: 0 1px 1px 0;
}

.phone-frame__battery::before {
  content: '';
  display: block;
  width: 80%;
  height: 100%;
  background: #f5a623;
  border-radius: 1px;
}

.phone-frame__screen {
  flex: 1;
  overflow: auto;
  background: #0a0a0a;
  -webkit-overflow-scrolling: touch;
}

/* ponytail: 缩放变体，用于首页展示区 (200px 宽预览卡) */
.phone-frame--mini {
  width: 200px;
  height: 432px;
  border-radius: 22px;
  border-width: 4px;
}

.phone-frame--mini .phone-frame__notch {
  width: 80px;
  height: 16px;
  border-radius: 0 0 10px 10px;
}

.phone-frame--mini .phone-frame__status-bar {
  height: 24px;
  font-size: 10px;
  padding: 0 14px;
}
</style>
