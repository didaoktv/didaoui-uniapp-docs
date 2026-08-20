<script setup lang="ts">
/**
 * DemoBlock — 代码展示块
 * 默认展开 (不折叠)，包含 "复制代码" 按钮。
 * 支持 default slot (代码内容) 和 title prop。
 */
import { ref } from 'vue'

const props = defineProps<{
  title?: string
}>()

const copied = ref(false)

async function copyCode() {
  // ponytail: 从 slot 渲染的 DOM 提取纯文本；无框架依赖
  const el = document.querySelector(`#demo-block-${instanceId} .demo-block__body pre`)
  const text = el?.textContent ?? ''
  try {
    await navigator.clipboard.writeText(text)
    copied.value = true
    setTimeout(() => (copied.value = false), 1500)
  } catch {
    // ponytail: clipboard API 在非 HTTPS / 旧浏览器降级，文档站 dev 场景够用
  }
}

// 简单实例 id (单文件内自增)
const instanceId = Math.random().toString(36).slice(2, 8)
void props
</script>

<template>
  <div :id="`demo-block-${instanceId}`" class="demo-block">
    <div class="demo-block__header">
      <span class="demo-block__title">{{ title ?? '示例' }}</span>
      <button class="demo-block__copy" @click="copyCode">
        {{ copied ? '已复制 ✓' : '复制代码' }}
      </button>
    </div>
    <div class="demo-block__body">
      <slot />
    </div>
  </div>
</template>
