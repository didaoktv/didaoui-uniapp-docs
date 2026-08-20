# 上传 DdUpload

> 图片上传网格使用 uni.chooseImage，160rpx 方形缩略图配删除按钮，maxSize 校验触发 oversize 事件，预览走 uni.previewImage —— video/file 的 accept 类型实际未实现。

## 介绍

DdUpload 用于包房照片、用户头像、评价图片等场景的图片上传。flex-wrap 网格中每个预览项为 160rpx 方形缩略图，右上角带红色圆形删除按钮。点击 + 按钮调用 uni.chooseImage 选择图片，`maxSize` 校验超限文件并触发 `oversize` 事件。点击预览项调用 uni.previewImage 全屏查看。`maxCount` 达到上限时隐藏 + 按钮。注意：仅实现了图片选择，video/file 类型未实现。

## 代码演示

### 基础用法

:::demo
<DemoBlock>

```vue
<template>
  <dd-upload v-model:file-list="files" :max-count="9" @after-read="onRead" />
</template>

<script setup>
import { ref } from 'vue'
const files = ref([])
function onRead(list) {
  // 此处可上传到服务器
  console.log('新增文件：', list)
}
</script>
```

</DemoBlock>
:::

### 限制数量与大小

`max-count` 限制总数；`max-size` 校验单文件大小（字节），超限触发 oversize。

:::demo
<DemoBlock>

```vue
<template>
  <dd-upload
    v-model:file-list="files"
    :max-count="3"
    :max-size="2 * 1024 * 1024"
    @oversize="onOversize"
  />
</template>

<script setup>
import { ref } from 'vue'
const files = ref([])
function onOversize(rejected) {
  console.log('超限文件：', rejected)
}
</script>
```

</DemoBlock>
:::

### 禁用与单选

`disabled` 隐藏添加与删除按钮，仅可预览；`multiple=false` 单次仅选一张。

:::demo
<DemoBlock>

```vue
<template>
  <dd-upload
    v-model:file-list="files"
    :multiple="false"
    :max-count="1"
    image-fit="cover"
  />
</template>

<script setup>
import { ref } from 'vue'
const files = ref([
  { url: 'https://via.placeholder.com/80' },
])
</script>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| fileList (v-model:file-list) | 文件列表 | `UploadFileItem[]` | `[]` |
| maxCount | 最大上传数量 | `number` | `9` |
| maxSize | 单文件大小上限（字节），0 为不限制 | `number` | `0` |
| multiple | 是否允许多选 | `boolean` | `true` |
| disabled | 是否禁用（隐藏添加与删除按钮） | `boolean` | `false` |
| imageFit | 图片填充方式 | `'cover' \| 'contain' \| 'fill'` | `'cover'` |
| sourceType | 图片来源 | `('album' \| 'camera')[]` | `['album', 'camera']` |

> `UploadFileItem = { url: string; [key: string]: any }`

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:fileList | 文件列表变化时触发 | `val: UploadFileItem[]` |
| change | 文件列表变化时触发 | `val: UploadFileItem[]` |
| oversize | 选择文件超限时触发（返回被拒绝的文件） | `val: UploadFileItem[]` |
| delete | 删除文件时触发 | `{ index: number; file: UploadFileItem }` |
| afterRead | 选择并接受新文件后触发 | `val: UploadFileItem[]` |

## 设计规范

::: tip 最佳实践
- 用于包房照片、用户头像、评价图片等图片上传。
- 通过 maxCount 限制数量（默认 9）。
- 通过 maxSize 拒绝超大文件。
- 缩略图使用 imageFit='cover' 保持统一比例。
- 在 afterRead 中处理上传到服务器的逻辑。
:::

::: warning 注意事项
- 仅实现了图片选择（uni.chooseImage），不要期望 video/file 类型可用。
- 必须处理 oversize 事件——超限文件会被静默排除在 fileList 之外。
- fileList 中的 tempFilePaths 是临时路径，不永久有效。
:::
