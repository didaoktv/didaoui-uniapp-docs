// 文档站构建编排: 先构建 H5 demo → 复制到 public/h5-demo → 构建 VitePress
import { execSync } from 'node:child_process'
import { cpSync, rmSync, mkdirSync, existsSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

// 1. 构建 H5 demo → h5-demo/dist/build/h5/
console.log('[1/3] 构建 H5 demo...')
execSync('npm run build:h5', { cwd: resolve(root, 'h5-demo'), stdio: 'inherit' })

// 2. 复制到 public/h5-demo/ (VitePress 将 public/ 作为根路径服务)
const src = resolve(root, 'h5-demo/dist/build/h5')
const dest = resolve(root, 'public/h5-demo')
if (!existsSync(src)) {
  console.error(`H5 demo 构建产物未找到: ${src}`)
  process.exit(1)
}
console.log('[2/3] 复制 H5 demo 到 public/h5-demo/')
rmSync(dest, { recursive: true, force: true })
mkdirSync(dest, { recursive: true })
cpSync(src, dest, { recursive: true })

// 3. 构建 VitePress
console.log('[3/3] 构建 VitePress...')
execSync('npx vitepress build', { cwd: root, stdio: 'inherit' })

console.log('✓ 文档站构建完成')
