<script setup lang="ts">
/**
 * ColorCard — 色彩展示卡片 (颜色块 + 名称 + hex 值)
 * 用于设计文档色彩页。
 */
defineProps<{
  /** 颜色值，任意 CSS color */
  hex: string
  /** 颜色名称 */
  name: string
  /** 可选描述 */
  desc?: string
}>()
</script>

<template>
  <div class="color-card">
    <div class="color-card__swatch" :style="{ background: hex }" />
    <div class="color-card__info">
      <div class="color-card__name">{{ name }}</div>
      <div class="color-card__hex">{{ hex.toUpperCase() }}</div>
      <div v-if="desc" class="color-card__desc">{{ desc }}</div>
    </div>
  </div>
</template>

<style scoped>
.color-card__info {
  min-width: 0;
}

.color-card__desc {
  font-size: 12px;
  color: var(--vp-c-text-3);
  margin-top: 2px;
}
</style>
