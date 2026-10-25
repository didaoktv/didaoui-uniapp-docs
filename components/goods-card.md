# 商品卡片 DdGoodsCard

> 商品信息卡片，用于下单/点单列表展示商品图片、名称、描述与价格；价格经库内 dd-price 渲染保持格式统一，金色角标承载「热卖」「售罄」等状态文案。

## 介绍

DdGoodsCard 是面向商品下单场景的业务卡片，默认横向布局（左图右文，贴合点单列表）；`layout="vertical"` 切换为竖向上图下文（宫格/瀑布流）。价格高亮为红色强调，可叠加灰色划线原价；`bottom` 插槽可承载数量步进器或加购按钮，卡片本身保持纯展示。`size="sm"` 提供小一号档位：横向小号用于购物车列表行，竖向小号适配一行三列的规格点选宫格；`size="xs"` 为超小号，仅竖向、一行四列的缩略图行（订单卡商品行），去掉卡片底色与阴影只留方图与名称。

## 代码演示

### 横向（默认）

`layout` 默认 `horizontal`，左侧商品图、右侧标题/描述/价格，适合点单列表逐行展示。

:::demo
<DemoBlock>

```vue
<template>
  <view style="display:flex;flex-direction:column;gap:16rpx">
    <dd-goods-card
      thumb="https://dummyimage.com/140x140"
      title="经典果盘"
      desc="当季水果现切 · 含蘸酱"
      :price="88"
      tag="热卖"
      @click="onClick"
    />
    <dd-goods-card
      thumb="https://dummyimage.com/140x140"
      title="欢乐畅饮套餐"
      desc="指定啤酒 / 软饮任选 6 瓶"
      :price="168"
      :origin-price="199"
      :num="2"
    />
  </view>
</template>
```

</DemoBlock>
:::

### 售罄态

`disabled` 整卡置灰并不可点击，配合 `tag="售罄"` 明确不可点单。

:::demo
<DemoBlock>

```vue
<template>
  <dd-goods-card
    thumb="https://dummyimage.com/140x140"
    title="限定特调鸡尾酒"
    desc="已售罄，下次补货后开放"
    :price="58"
    tag="售罄"
    disabled
  />
</template>
```

</DemoBlock>
:::

### 竖向

`layout="vertical"` 上图下文，适合宫格/瀑布流陈列。

:::demo
<DemoBlock>

```vue
<template>
  <view style="display:grid;grid-template-columns:repeat(2,1fr);gap:16rpx">
    <dd-goods-card layout="vertical" thumb="https://dummyimage.com/300x300" title="水果拼盘" :price="68" />
    <dd-goods-card layout="vertical" thumb="https://dummyimage.com/300x300" title="果盘全家福" :price="128" tag="新品" />
  </view>
</template>
```

</DemoBlock>
:::

### 横向小号（购物车列表）

`size="sm"` 叠加默认横向布局：图缩至 96rpx、字号收紧、不渲染描述（`desc` 传入也不显示）、价格整体小一号，适合购物车/已点列表逐行陈列，数量用 `num` 或 `price-right` 插槽。

:::demo
<DemoBlock>

```vue
<template>
  <view style="display:flex;flex-direction:column;gap:16rpx">
    <dd-goods-card size="sm" thumb="https://dummyimage.com/140x140" title="经典果盘" :price="38" :num="1" />
    <dd-goods-card size="sm" thumb="https://dummyimage.com/140x140" title="青岛啤酒经典" :price="8" :num="2" />
  </view>
</template>
```

</DemoBlock>
:::

### 竖向小号（一行三列）

`layout="vertical"` + `size="sm"`：方图 + 标题最多两行，外层三列栅格即得规格点选宫格（对齐套餐自选页样式）。

:::demo
<DemoBlock>

```vue
<template>
  <view style="display:grid;grid-template-columns:repeat(3,1fr);gap:16rpx">
    <dd-goods-card layout="vertical" size="sm" thumb="https://dummyimage.com/300x300" title="香辣鸡腿堡" :price="23" tag="人气必点" />
    <dd-goods-card layout="vertical" size="sm" thumb="https://dummyimage.com/300x300" title="味滋脆鸡肉堡（微辣）" :price="25" />
    <dd-goods-card layout="vertical" size="sm" thumb="https://dummyimage.com/300x300" title="阳光果蔬鸡肉堡" :price="21" />
  </view>
</template>
```

</DemoBlock>
:::

### 竖向超小号（一行四列）

`layout="vertical"` + `size="xs"`：去掉卡片底色与阴影，只留圆角方图 + 最多两行名称，外层四列栅格即得订单卡商品行（`num` 显示件数，不传不渲染）。超小号不渲染 `desc`；竖向 `sm`/`xs` 均为「价格在左、数量在右」，`xs` 档价格走 dd-price 最小档（xs）。

:::demo
<DemoBlock>

```vue
<template>
  <view style="display:grid;grid-template-columns:repeat(4,1fr);gap:16rpx">
    <dd-goods-card layout="vertical" size="xs" thumb="https://dummyimage.com/300x300/e53935/ffffff&text=鸡腿堡" title="香辣鸡腿堡" :num="2" />
    <dd-goods-card layout="vertical" size="xs" thumb="https://dummyimage.com/300x300/ff9800/ffffff&text=鸡排堡" title="香辣鸡排堡" />
    <dd-goods-card layout="vertical" size="xs" thumb="https://dummyimage.com/300x300/4caf50/ffffff&text=薯条" title="黄金薯条" :num="3" />
    <dd-goods-card layout="vertical" size="xs" title="青岛啤酒经典" />
  </view>
</template>
```

</DemoBlock>
:::

### 自定义插槽

`bottom` 插槽可放入数量步进器或加购按钮，实现下单页「点单」交互。

:::demo
<DemoBlock>

```vue
<template>
  <dd-goods-card thumb="https://dummyimage.com/140x140" title="单份果盘" :price="38">
    <template #bottom>
      <dd-button type="primary" size="sm" style="width:100%">加入购物车</dd-button>
    </template>
  </dd-goods-card>
</template>
```

</DemoBlock>
:::

### 价格行右侧（操作同排）

`price-right` 插槽位于价格行右端，适合放步进器/加购按钮，使价格与操作同排并一起贴在卡片底部；不传该插槽时回退渲染 `num`（`×2`）。

:::demo
<DemoBlock>

```vue
<template>
  <dd-goods-card thumb="https://dummyimage.com/140x140" title="单份果盘" desc="当季水果现切" :price="38">
    <template #price-right>
      <dd-button type="primary" size="sm">加入购物车</dd-button>
    </template>
  </dd-goods-card>
</template>
```

</DemoBlock>
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| thumb | 商品图片地址；缺图时显示文字占位块（主题随机底色 + 名称前 2 字） | `string` | `''` |
| title | 商品名称 | `string` | `''` |
| desc | 商品描述/规格说明 | `string` | `''` |
| price | 单价（元，直接展示，不传不渲染） | `string \| number` | `undefined` |
| originPrice | 划线原价（元，直接展示） | `string \| number` | `''` |
| currency | 货币符号 | `string` | `'¥'` |
| decimalLength | 价格小数位数 | `string \| number` | `2` |
| tag | 角标文案（如「热卖」「售罄」） | `string` | `''` |
| layout | 布局：横向/竖向 | `'horizontal' \| 'vertical'` | `'horizontal'` |
| size | 尺寸：md 常规 / sm 小号（横向用于购物车列表行，不渲染描述；竖向用于一行三列宫格） / xs 超小号（竖向一行四列缩略图，用于订单卡商品行，不渲染描述、无卡片底色与阴影） | `'sm' \| 'md' \| 'xs'` | `'md'` |
| num | 已选数量（右下角，不传不渲染） | `string \| number` | `''` |
| disabled | 置灰且不可点击（售罄等场景） | `boolean` | `false` |
| thumbMode | 图片裁剪模式，透传 image mode | `string` | `'aspectFill'` |
| hoverable | 是否启用按压反馈 | `boolean` | `true` |
| customStyle | 自定义根节点样式 | `string` | `''` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click | 点击卡片时触发（disabled 时不触发） | `Event` |

### Slots

| 插槽名 | 说明 |
|--------|------|
| thumb | 自定义缩略图区域 |
| default | 覆盖默认信息区（title/desc/价格等） |
| price-right | 价格行右侧扩展区（步进器/加购按钮，与价格同排贴底；未用时渲染 num） |
| bottom | 底部扩展区（独占一行的步进器/加购按钮） |

## 设计规范

::: tip 最佳实践
- 点单列表逐行展示用默认横向布局。
- 宫格/瀑布流陈列用 `layout="vertical"`。
- 购物车/已点列表行用 `size="sm"` 横向小号；规格点选一行三列用 `layout="vertical"` + `size="sm"`；订单卡内一行四列的商品缩略图用 `layout="vertical"` + `size="xs"`。
- 价格展示统一走组件内置的 dd-price，保持与库内金额样式一致。
- 数量步进/加购通过 `bottom` 插槽注入，卡片保持纯展示、逻辑留给业务侧。
:::

::: warning 注意事项
- `price` 以「元」为单位直接传入（与 dd-price 口径一致），勿传「分」。
- 目录商品无图时直接不传 `thumb`，组件自动渲染主题随机底色 + 名称前 2 字的占位块；需完全自定义时再用 `#thumb` 插槽覆盖。
- 同一列表内不要混用横向与竖向布局。
- `disabled` 用于售罄等不可点场景时，建议同时设置 `tag="售罄"` 明确语义。
:::