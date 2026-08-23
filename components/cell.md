# 单元格 DdCell

> Vant 风格列表单元格，支持 sm/md 尺寸、可选必填星号，isLink 控制箭头并门控 click 触发。

## 介绍

DdCell 是结构化的列表行，由左侧图标、中部标题 + 描述（label）、右侧数值 + 箭头组成。支持 `sm`/`md` 两档尺寸，`required` 显示红色星号，`isLink` 渲染箭头并仅在开启时向外抛 click。`arrowDirection` 控制箭头朝向，`center` 控制垂直对齐，`borderless` 去除底部分割线。

## 代码演示

### 基础用法

`isLink` 显示右向箭头，点击触发 click（仅 isLink 时触发）。

:::demo
<DemoBlock>

```vue
<template>
  <view style="background:#1f1f1f">
    <dd-cell title="会员等级" value="黄金会员" is-link />
    <dd-cell title="我的钱包" value="¥128.00" is-link />
    <dd-cell title="收货地址" is-link />
  </view>
</template>
```

</DemoBlock>
:::

### 带描述与必填

`label` 在标题下方补充说明；`required` 显示红色星号，适合表单展示行。

:::demo
<DemoBlock>

```vue
<template>
  <view style="background:#1f1f1f">
    <dd-cell title="包房 A01" label="当前空闲" size="sm" />
    <dd-cell title="预订人" value="张先生" required />
  </view>
</template>
```

</DemoBlock>
:::

### 箭头方向

`arrow-direction` 控制箭头朝向，配合自定义右侧内容。

:::demo
<DemoBlock>

```vue
<template>
  <view style="background:#1f1f1f">
    <dd-cell title="展开详情" is-link arrow-direction="down" />
    <dd-cell title="返回上级" is-link arrow-direction="left" />
  </view>
</template>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| title | 标题文字 | `string` | `''` |
| label | 标题下方的描述文字 | `string` | `''` |
| value | 右侧数值文字 | `string` | `''` |
| icon | 左侧图标字符 | `string` | `''` |
| size | 尺寸 | `'sm' \| 'md'` | `'md'` |
| isLink | 是否为导航行（渲染箭头，开启 click） | `boolean` | `false` |
| arrowDirection | 箭头方向 | `'left' \| 'right' \| 'up' \| 'down'` | `'right'` |
| required | 是否必填（显示红色星号） | `boolean` | `false` |
| center | 是否垂直居中 | `boolean` | `false` |
| borderless | 是否去除底部分割线 | `boolean` | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click | 点击单元格时触发（仅 `isLink=true` 时触发） | `event: Event` |

### Slots

| 名称 | 说明 |
|------|------|
| icon | 自定义左侧图标（优先于 icon prop） |
| label | 自定义描述内容（优先于 label prop） |
| value | 自定义右侧数值内容（优先于 value prop） |
| right-icon | 右侧图标区，位于数值与箭头之间 |

## 设计规范

::: tip 最佳实践
- 配合 `dd-cell-group` 进行分组展示。
- 导航行设置 `isLink` 以渲染箭头。
- 使用 `label` 在标题下补充次级描述。
:::

::: warning 注意事项
- 未设置 `isLink` 时 click 不会触发（handleClick 仅在 isLink 时 emit）。
- 嵌入交互控件时注意关闭 `isLink` 箭头以免误触。
:::

## 单元格组 DdCellGroup

> 最小化的分组单元格容器，裁剪为 radius-lg 圆角并去除最后一个子元素的底边框，保证圆角处干净无溢出。

DdCellGroup 用于将多个 `dd-cell` 或 `dd-list-cell` 组织为带圆角的分组区块。可选的 `title` 作为分节标题，body 区域裁剪溢出并自动隐藏最后一项的底部分割线，避免在圆角处出现多余边线。

### 代码演示

#### 基础用法

将 `dd-cell` 作为默认插槽子项，`title` 作为分节标题。

:::demo
<DemoBlock>

```vue
<template>
  <dd-cell-group title="预订信息">
    <dd-cell title="包房类型" value="大包" is-link />
    <dd-cell title="预订时间" value="19:00-21:00" is-link />
    <dd-cell title="联系人" value="张先生" is-link />
  </dd-cell-group>
</template>
```

</DemoBlock>
:::

#### 多分组

多个 cell-group 上下排列，配合 list-cell 混合使用。

:::demo
<DemoBlock>

```vue
<template>
  <view style="display:flex;flex-direction:column;gap:16rpx">
    <dd-cell-group title="账户">
      <dd-list-cell title="会员等级" value="黄金" is-link />
      <dd-list-cell title="账户余额" value="¥128.00" is-link />
    </dd-cell-group>
    <dd-cell-group title="其它">
      <dd-list-cell title="消息通知" is-link />
      <dd-list-cell title="帮助中心" is-link />
    </dd-cell-group>
  </view>
</template>
```

</DemoBlock>
:::

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| title | 分组标题 | `string` | `''` |

### Slots

| 名称 | 说明 |
|------|------|
| title | 自定义标题内容（优先于 title prop） |
| default | 分组内容，通常放置 `dd-cell` 或 `dd-list-cell` |

### 设计规范

::: tip 最佳实践
- 将 `dd-cell` 组件作为默认插槽子项放置。
- 使用 `title` 为分组设置节标题。
:::

::: warning 注意事项
- 不要混入非 cell 子元素 —— 容器仅负责清理最后一个 cell 的底边框。
:::
