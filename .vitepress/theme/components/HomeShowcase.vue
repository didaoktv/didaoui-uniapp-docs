<script setup lang="ts">
/**
 * HomeShowcase — 首页组件展示区
 * 横向滚动的组件预览卡片，点击跳转对应文档页。
 * ponytail: 预览用 emoji + 名称占位，真实组件预览由 DocPhoneSimulator iframe 承载
 */
const showcase = [
  { name: 'Button', link: '/components/button', emoji: '🔘', desc: '按钮' },
  { name: 'RoomCard', link: '/components/room-card', emoji: '🎤', desc: '房间卡' },
  { name: 'ChampionCard', link: '/components/champion-card', emoji: '🏆', desc: '冠军卡' },
  { name: 'StatCard', link: '/components/stat-card', emoji: '📈', desc: '统计卡' },
  { name: 'Tabbar', link: '/components/tabbar', emoji: '📱', desc: '标签栏' },
  { name: 'Modal', link: '/components/modal', emoji: '🪟', desc: '弹层' },
  { name: 'Avatar', link: '/components/avatar', emoji: '👤', desc: '头像' },
  { name: 'Steps', link: '/components/steps', emoji: '🪜', desc: '步骤条' },
]
</script>

<template>
  <section class="home-showcase">
    <a
      v-for="item in showcase"
      :key="item.name"
      class="home-showcase__item glass-card"
      :href="item.link"
    >
      <div class="home-showcase__emoji">{{ item.emoji }}</div>
      <div class="home-showcase__name">{{ item.name }}</div>
      <div class="home-showcase__desc">{{ item.desc }}</div>
    </a>
  </section>
</template>

<style scoped>
.home-showcase__item {
  display: block;
  padding: 20px;
  text-decoration: none;
  color: inherit;
  text-align: center;
}

.home-showcase__emoji {
  font-size: 36px;
  margin-bottom: 8px;
}

.home-showcase__name {
  font-family: var(--font-display);
  font-size: 16px;
  font-weight: 800;
  color: var(--didao-primary-500);
}

.home-showcase__desc {
  font-size: 12px;
  color: var(--vp-c-text-3);
  margin-top: 2px;
}
</style>
