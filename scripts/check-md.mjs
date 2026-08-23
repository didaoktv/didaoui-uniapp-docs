// 自检: 所有 md 的代码围栏必须成对、<DemoBlock> 必须配平（构建挂掉前先在这里红）
// 自检: components/*.md ↔ h5-demo/src/pages/{slug}/demo.vue 双向 1:1（防悬空 md 白屏 / 孤儿 demo 页）
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const roots = ['components', 'design', 'guide']
// 无 md 的合法演示页：h5-demo 首页与图标速查页
const demoWithoutMdAllowlist = ['index', 'icon-usage']
let bad = 0

for (const dir of roots) {
  for (const f of readdirSync(dir)) {
    if (!f.endsWith('.md')) continue
    const src = readFileSync(join(dir, f), 'utf8')
    const fences = (src.match(/^```/gm) || []).length
    const opens = (src.match(/^<DemoBlock>/gm) || []).length
    const closes = (src.match(/^<\/DemoBlock>/gm) || []).length
    if (fences % 2 !== 0) { console.log(`${dir}/${f}: 代码围栏 ${fences} 个（奇数，缺闭合）`); bad++ }
    if (opens !== closes) { console.log(`${dir}/${f}: DemoBlock ${opens} 开 ${closes} 闭`); bad++ }
  }
}

// 正向: 每个 components md 必须有对应 demo 页（DocPhoneSimulator 按 slug 1:1 加载 iframe）
const demoPagesDir = join('h5-demo', 'src', 'pages')
for (const f of readdirSync('components')) {
  if (!f.endsWith('.md')) continue
  const slug = f.replace(/\.md$/, '')
  if (!existsSync(join(demoPagesDir, slug, 'demo.vue'))) {
    console.log(`components/${f}: 缺少 h5-demo/src/pages/${slug}/demo.vue（模拟器将白屏）`)
    bad++
  }
}

// 反向: 每个 demo 页必须有对应 md（豁免清单除外）
for (const slug of readdirSync(demoPagesDir)) {
  if (!statSync(join(demoPagesDir, slug)).isDirectory()) continue
  if (demoWithoutMdAllowlist.includes(slug)) continue
  if (!existsSync(join('components', `${slug}.md`))) {
    console.log(`h5-demo/src/pages/${slug}/demo.vue: 缺少 components/${slug}.md（孤儿演示页）`)
    bad++
  }
}

console.log(bad === 0 ? 'OK: 围栏与 DemoBlock 全部配平，md↔demo 1:1' : `发现 ${bad} 处问题`)
process.exit(bad === 0 ? 0 : 1)
