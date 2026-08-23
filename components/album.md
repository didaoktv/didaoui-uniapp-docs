# 相册 DdAlbum

> 相册组件，类似聊九宫格图片列表：单图自适应尺寸、多图按行排列、超出 maxCount 显示 +N，点击可全屏预览。

## 介绍

DdAlbum `urls` 支持字符串数组或对象数组（配合 `keyName` 取图片地址）。单图时自动读取图片原始尺寸按 `singleSize` 长边缩放；多图按 `rowCount` 每行个数、`multipleSize` 边长排列。`previewFullImage` 开启点击预览（`uni.previewImage`），`showMore` 在超出 `maxCount` 时于最后一格显示剩余数量。

## 代码演示

### 基础用法（多图九宫）

:::demo
<DemoBlock>

```vue
<template>
  <dd-album :urls="urls" />
</template>

<script setup lang="ts">
const urls = [
  'https://img.didaoktv.com/room/1.jpg',
  'https://img.didaoktv.com/room/2.jpg',
  'https://img.didaoktv.com/room/3.jpg',
  'https://img.didaoktv.com/room/4.jpg',
]
</script>
```

</DemoBlock>
:::

### 对象数组 + 自定义行列

`keyName` 指定对象取值字段；`rowCount` 控制每行数量；`autoWrap` 自适应换行不受行数限制。

:::demo
<DemoBlock>

```vue
<template>
  <dd-album :urls="list" keyName="url" :rowCount="4" :multipleSize="60" :space="8" />
</template>

<script setup lang="ts">
const list = [
  { url: 'https://img.didaoktv.com/room/1.jpg' },
  { url: 'https://img.didaoktv.com/room/2.jpg' },
  { url: 'https://img.didaoktv.com/room/3.jpg' },
]
</script>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| urls | 图片地址列表，`Array<String>` 或 `Array<Object>` | `array` | `[]` |
| keyName | 指定从数组的对象元素中读取哪个属性作为图片地址 | `string` | `''` |
| singleSize | 单图时图片长边的长度 | `string \| number` | `180` |
| multipleSize | 多图时图片边长 | `string \| number` | `70` |
| space | 多图时图片水平和垂直之间的间隔 | `string \| number` | `6` |
| singleMode | 单图时图片缩放裁剪模式 | `string` | `'scaleToFill'` |
| multipleMode | 多图时图片缩放裁剪模式 | `string` | `'aspectFill'` |
| maxCount | 最多展示的图片数量，超出部分显示"+N" | `string \| number` | `9` |
| previewFullImage | 点击图片是否可以预览 | `boolean` | `true` |
| rowCount | 每行展示图片数量，如设置则 singleSize / multipleSize 失效 | `string \| number` | `3` |
| showMore | 超出 maxCount 时是否显示查看更多的提示 | `boolean` | `true` |
| shape | 图片形状，`circle` 圆形 / `square` 方形 | `string` | `'square'` |
| radius | 圆角值，数值时为 px | `string \| number` | `0` |
| autoWrap | 自适应换行模式，不受 rowCount 限制 | `boolean` | `false` |
| unit | 图片尺寸单位 | `string` | `'px'` |
| stop | 阻止点击冒泡 | `boolean` | `true` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| albumWidth | 单图时向外发送相册实际宽度，用于文字与相册宽度对齐等场景 | `width` |

## 设计规范

::: tip 最佳实践
- 房相/评价晒图用默认 `rowCount=3` 九宫布局；晒图张数不固定时开 `autoWrap`。
- 朋友圈式"最多 9 张 +1 张溢出"效果：`maxCount=9` 且传入更多 urls。
:::

::: warning 注意事项
- 单图模式会通过 `uni.getImageInfo` 读取图片尺寸，远程图片需可访问。
- `urls` 传对象数组时必须配置 `keyName`，否则取不到地址。
:::
