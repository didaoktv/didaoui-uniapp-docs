<template>
  <dd-top-navbar title="级联选择器" />
  <view class="demo-page">

    <!-- 基础两级行政区 -->
    <view class="demo-section">
      <text class="demo-title">两级行政区（默认 optionsCols=2）</text>
      <view class="cs-btn" @click="show1 = true">选择省 / 市</view>
      <text class="demo-note">v-model：{{ model1.length ? model1.join(' / ') : '尚未选择' }} · {{ note1 || '确认后展示' }}</text>
      <dd-cascader
        v-model="model1"
        v-model:show="show1"
        :data="regions"
        @confirm="onConfirm1"
      />
    </view>

    <!-- optionsCols=1 单列 -->
    <view class="demo-section">
      <text class="demo-title">单列展示 optionsCols=1</text>
      <view class="cs-btn" @click="show2 = true">选择城市（单列）</view>
      <text class="demo-note">{{ note2 || '尚未选择' }}</text>
      <dd-cascader
        v-model="model2"
        v-model:show="show2"
        :data="regions"
        :optionsCols="1"
        @confirm="onConfirm2"
      />
    </view>

    <!-- column 模式 -->
    <view class="demo-section">
      <text class="demo-title">垂直步骤头 headerDirection="column"</text>
      <view class="cs-btn" @click="show3 = true">选择城市（column 模式）</view>
      <text class="demo-note">{{ note3 || '尚未选择' }}</text>
      <dd-cascader
        v-model="model3"
        v-model:show="show3"
        :data="regions"
        header-direction="column"
        @confirm="onConfirm3"
      />
    </view>

    <!-- autoClose -->
    <view class="demo-section">
      <text class="demo-title">选中末级自动关闭 autoClose</text>
      <view class="cs-btn" @click="show4 = true">选到末级自动确认关闭</view>
      <text class="demo-note">{{ note4 || '尚未选择' }}</text>
      <dd-cascader
        v-model="model4"
        v-model:show="show4"
        :data="regions"
        :autoClose="true"
        @confirm="onConfirm4"
      />
    </view>

    <!-- 自定义 valueKey / labelKey -->
    <view class="demo-section">
      <text class="demo-title">自定义 valueKey / labelKey / childrenKey</text>
      <view class="cs-btn" @click="show5 = true">选择门店区域（自定义字段）</view>
      <text class="demo-note">{{ note5 || '尚未选择' }}</text>
      <dd-cascader
        v-model="model5"
        v-model:show="show5"
        :data="stores"
        value-key="code"
        label-key="name"
        children-key="subs"
        @confirm="onConfirm5"
      />
    </view>

    <!-- 默认回显 modelValue -->
    <view class="demo-section">
      <text class="demo-title">默认回显（v-model 预填）</text>
      <view class="cs-btn" @click="show6 = true">打开（预选 广东省 / 深圳市）</view>
      <dd-cascader
        v-model="model6"
        v-model:show="show6"
        :data="regions"
      />
      <text class="demo-note">modelValue = ['gd', 'sz'] 打开时自动回显选中路径</text>
    </view>

    <demo-footer />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

/* 两级行政区数据 */
const regions = [
  {
    value: 'gd', label: '广东省',
    children: [
      { value: 'gz', label: '广州市' },
      { value: 'sz', label: '深圳市' },
      { value: 'dg', label: '东莞市' },
    ],
  },
  {
    value: 'js', label: '江苏省',
    children: [
      { value: 'nj', label: '南京市' },
      { value: 'sz2', label: '苏州市' },
    ],
  },
  {
    value: 'zj', label: '浙江省',
    children: [
      { value: 'hz', label: '杭州市' },
      { value: 'nb', label: '宁波市' },
    ],
  },
]

/* 自定义字段的数据：门店区域 */
const stores = [
  {
    code: 'downtown', name: '市中心商圈',
    subs: [
      { code: 'nanjinglu', name: '南京路店' },
      { code: 'huaihailu', name: '淮海路店' },
    ],
  },
  {
    code: 'suburb', name: '近郊商圈',
    subs: [
      { code: 'baocheng', name: '宝城店' },
      { code: 'longgang', name: '龙港店' },
    ],
  },
]

/* 状态 */
const show1 = ref(false)
const show2 = ref(false)
const show3 = ref(false)
const show4 = ref(false)
const show5 = ref(false)
const show6 = ref(false)

const model1 = ref<Array<string | number>>([])
const model2 = ref<Array<string | number>>([])
const model3 = ref<Array<string | number>>([])
const model4 = ref<Array<string | number>>([])
const model5 = ref<Array<string | number>>([])
const model6 = ref<Array<string | number>>(['gd', 'sz'])

const note1 = ref('')
const note2 = ref('')
const note3 = ref('')
const note4 = ref('')
const note5 = ref('')

/* confirm 回调：val 为各级 value 数组，借助数据映射出 label */
interface RegionNode {
  value: string
  label: string
  children?: RegionNode[]
}

function toLabels(val: Array<string | number>, data: RegionNode[] = regions): string {
  const labels: string[] = []
  let list: RegionNode[] = data
  for (const v of val) {
    const hit = list.find(item => item.value === v)
    if (!hit) break
    labels.push(hit.label)
    list = hit.children || []
  }
  return labels.join(' / ')
}

function onConfirm1(val: Array<string | number>) {
  note1.value = `confirm: ${toLabels(val)}`
}
function onConfirm2(val: Array<string | number>) {
  note2.value = `confirm: ${toLabels(val)}`
}
function onConfirm3(val: Array<string | number>) {
  note3.value = `confirm: ${toLabels(val)}`
}
function onConfirm4(val: Array<string | number>) {
  note4.value = `confirm: ${toLabels(val)}`
}
function onConfirm5(val: Array<string | number>) {
  note5.value = `confirm: ${val.join(' / ')}`
}
</script>

<style scoped>
.demo-page { padding: 24rpx 0; }

.cs-btn {
  padding: 20rpx;
  background: #2D4BA0;
  color: #fff;
  border-radius: 12rpx;
  font-size: 28rpx;
  text-align: center;
}
</style>
