<script setup lang="ts">
/**
 * DocPhoneSimulator — 全局手机模拟器 (核心)
 * 固定在文档右侧，读取当前路由，提取组件名，
 * 在 iframe 中加载 H5 demo 真实运行组件交互。
 *
 * - dev:  http://localhost:5174/#/pages/{component}/demo
 * - prod: ${base}h5-demo/#/pages/{component}/demo
 *
 * 非组件页 (路径不以 /components/ 开头) 隐藏模拟器。
 */
import { computed, ref } from 'vue'
import { useRoute, useData } from 'vitepress'
import PhoneFrame from './PhoneFrame.vue'

const route = useRoute()
const { site } = useData()

/** 从路径提取组件 slug：/components/button → button */
const componentSlug = computed(() => {
  const m = route.path.match(/^\/components\/([^/]+)/)
  return m ? m[1] : ''
})

/** 是否为组件页 (显示模拟器) */
const isComponentPage = computed(() => Boolean(componentSlug.value))

/** iframe URL：dev 走本地 5174，prod 走 base 子路径 */
const demoUrl = computed(() => {
  const slug = componentSlug.value
  if (!slug) return ''
  // ponytail: import.meta.env.DEV 由 Vite 注入，区分 dev/prod
  const isDev = import.meta.env?.DEV
  const base = isDev ? '' : site.value.base
  const origin = isDev ? 'http://localhost:5174' : `${base}h5-demo/`
  return `${origin}/#/pages/${slug}/demo`
})

/** 折叠状态 */
const collapsed = ref(false)

function toggle() {
  collapsed.value = !collapsed.value
}
</script>

<template>
  <div
    v-if="isComponentPage"
    class="doc-phone-simulator"
    :class="{ collapsed }"
  >
    <button
      class="doc-phone-simulator__toggle"
      :title="collapsed ? '展开预览' : '收起预览'"
      @click="toggle"
    >
      {{ collapsed ? '◂' : '▸' }}
    </button>
    <PhoneFrame :status-title="componentSlug">
      <iframe
        v-if="demoUrl"
        :key="componentSlug"
        :src="demoUrl"
        class="doc-phone-simulator__iframe"
        frameborder="0"
        scrolling="yes"
        allow="clipboard-read; clipboard-write"
      />
      <div v-else class="doc-phone-simulator__placeholder">
        加载预览失败
      </div>
    </PhoneFrame>
  </div>
</template>

<style scoped>
.doc-phone-simulator__iframe {
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
  background: #0a0a0a;
}

.doc-phone-simulator__placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: var(--vp-c-text-3);
  font-size: 14px;
}
</style>
