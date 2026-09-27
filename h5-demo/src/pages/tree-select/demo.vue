<template>
  <dd-top-navbar title="分类选择" />
  <view class="demo-page">

    <!-- 基础单选 -->
    <view class="demo-section">
      <text class="demo-title">基础用法（单选）</text>
      <dd-tree-select
        :items="basicItems"
        v-model:main-active-index="basicIndex"
        v-model:active-id="basicId"
        @click-item="onBasicClick"
      />
      <text class="demo-note">mainActiveIndex = {{ basicIndex }} · activeId = {{ basicId }}{{ basicNote }}</text>
    </view>

    <!-- 多选 + max -->
    <view class="demo-section">
      <text class="demo-title">多选 + 数量上限 max=3</text>
      <dd-tree-select
        :items="multiItems"
        :max="3"
        v-model:main-active-index="multiIndex"
        v-model:active-id="multiIds"
      />
      <text class="demo-note">activeIds = [{{ multiIds.join(', ') }}]（最多 3 个，再点已选项取消）</text>
    </view>

    <!-- 禁用 / 红点 / 徽标 -->
    <view class="demo-section">
      <text class="demo-title">禁用 / 红点 / 徽标 / 自定义高度</text>
      <dd-tree-select
        :items="stateItems"
        height="500rpx"
        v-model:active-id="stateId"
      />
      <text class="demo-note">activeId = {{ stateId }}（禁用类与禁用项点击无效）</text>
    </view>

    <!-- 受控回显 -->
    <view class="demo-section">
      <text class="demo-title">默认回显（v-model 预填）</text>
      <dd-tree-select
        :items="basicItems"
        v-model:main-active-index="echoIndex"
        v-model:active-id="echoId"
      />
      <text class="demo-note">mainActiveIndex = 1 · activeId = 3，打开即定位到「小食 / 果盘」</text>
    </view>

    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

/* 基础数据：酒水小食分类 */
const basicItems = [
  { text: '洋酒', children: [{ id: 1, text: '威士忌' }, { id: 2, text: '白兰地' }, { id: 12, text: '龙舌兰' }] },
  { text: '小食', children: [{ id: 3, text: '果盘' }, { id: 4, text: '坚果' }] },
  { text: '软饮', children: [{ id: 5, text: '可乐' }, { id: 6, text: '苏打水' }] },
]

/* 多选数据 */
const multiItems = [
  { text: '果盘', children: [{ id: 1, text: '水果拼盘' }, { id: 2, text: '坚果拼盘' }, { id: 3, text: '卤味拼盘' }] },
  { text: '酒水', children: [{ id: 4, text: '威士忌' }, { id: 5, text: '香槟' }] },
]

/* 状态数据：禁用/红点/徽标 */
const stateItems = [
  { text: '洋酒', dot: true, children: [{ id: 1, text: '威士忌' }, { id: 2, text: '白兰地', disabled: true }] },
  { text: '小食', badge: 6, children: [{ id: 3, text: '果盘' }, { id: 4, text: '坚果' }] },
  { text: '已售罄', disabled: true, children: [{ id: 5, text: '香槟' }] },
]

/* 状态 */
const basicIndex = ref(0)
const basicId = ref<string | number>(0)
const basicNote = ref('')

const multiIndex = ref(0)
const multiIds = ref<Array<string | number>>([])

const stateId = ref<string | number>(1)

const echoIndex = ref(1)
const echoId = ref<string | number>(3)

function onBasicClick(item: { id: number; text: string }) {
  basicNote.value = `（click-item: ${item.text}）`
}
</script>

<style scoped>
.demo-page { padding: 24rpx 0; }
</style>
