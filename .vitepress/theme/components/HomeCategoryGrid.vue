<script setup lang="ts">
/**
 * HomeCategoryGrid — 首页分类导航网格
 * 8 个分类卡片，点击跳转到该分类第一个组件。
 * 计数 = components/ 下该分类的组件文档数（v1.2.0 起共 84 篇）。
 */
const categories = [
  { name: '表单输入', count: 19, link: '/components/button', emoji: '⌨️' },
  { name: '导航', count: 8, link: '/components/navigation', emoji: '🧭' },
  { name: '布局', count: 8, link: '/components/card', emoji: '📐' },
  { name: '数据展示', count: 27, link: '/components/avatar', emoji: '📊' },
  { name: '浮层反馈', count: 11, link: '/components/modal', emoji: '💬' },
  { name: '交互', count: 5, link: '/components/swipe', emoji: '👈' },
  { name: 'Canvas 绘制', count: 4, link: '/components/barcode', emoji: '🎨' },
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
