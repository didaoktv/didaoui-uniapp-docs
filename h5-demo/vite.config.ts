import { defineConfig } from 'vite'
import uniPlugin from '@dcloudio/vite-plugin-uni'
import { fileURLToPath, URL } from 'node:url'
import { existsSync } from 'node:fs'

// uni-app H5 demo — 端口在 manifest.json (h5.devServer.port=5174) 配置
// ponytail: CJS/ESM interop — @dcloudio/vite-plugin-uni 用 exports.default，
// ESM import 拿到的是 { default: fn, ... }，需要解包
const uni = (uniPlugin as any).default ?? uniPlugin

// 本地存在组件库源码时 alias 过去（含 4 个业务组件 bill-detail/workorder-card/calendar/qrcode），
// 指向「目录」而非 index.ts——目录自带 package.json 的 exports：
//   顶层 '@didaoktv/didaoui-uniapp'        → resolves "." → index.ts
//   深路径 '.../components/dd-toast/dd-toast.vue' → matches "./components/*"
// CI/装 npm 包时回落到 node_modules（需含 v1.1.0+）。
const libEntry = fileURLToPath(new URL('../../DidaoUI-uniapp', import.meta.url))
const viteAlias = existsSync(libEntry)
  ? { resolve: { alias: { '@didaoktv/didaoui-uniapp': libEntry } } }
  : {}

export default defineConfig({
  plugins: [uni()],
  ...viteAlias,
})
