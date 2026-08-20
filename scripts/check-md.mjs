// 自检: 所有 md 的代码围栏必须成对、<DemoBlock> 必须配平（构建挂掉前先在这里红）
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

const roots = ['components', 'design', 'guide']
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

console.log(bad === 0 ? 'OK: 围栏与 DemoBlock 全部配平' : `发现 ${bad} 处问题`)
process.exit(bad === 0 ? 0 : 1)
