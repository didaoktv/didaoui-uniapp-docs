<script setup lang="ts">
/**
 * HomeCategoryGrid — 首页分类导航网格
 * 7 个分类卡片，点击跳转到该分类第一个组件。
 * ponytail: 任务文字写 "6 个"，但侧边栏明确为 7 分类，此处与侧边栏对齐 7 个。
 */
const categories = [
  { name: '表单输入', count: 13, link: '/components/button', emoji: '⌨️' },
  { name: '导航', count: 7, link: '/components/navigation', emoji: '🧭' },
  { name: '布局', count: 7, link: '/components/card', emoji: '📐' },
  { name: '数据展示', count: 14, link: '/components/avatar', emoji: '📊' },
  { name: '浮层反馈', count: 10, link: '/components/modal', emoji: '💬' },
  { name: '交互', count: 4, link: '/components/swipe', emoji: '👈' },
  { name: '小程序专属', count: 2, link: '/components/mini-program-navbar', emoji: '🟢' },
]
</script>

<template>
  <section class="home-category-grid">
    <a
      v-for="cat in categories"
      :key="cat.name"
      class="home-category-card"
      :href="cat.link"
    >
      <div class="home-category-card__emoji">{{ cat.emoji }}</div>
      <div class="home-category-card__count">{{ cat.count }}</div>
      <div class="home-category-card__name">{{ cat.name }}</div>
    </a>
  </section>
</template>

<style scoped>
.home-category-card__emoji {
  font-size: 24px;
  margin-bottom: 8px;
}
</style>
