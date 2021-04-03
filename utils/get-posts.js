import fs, { readFileSync } from 'fs'
import path from 'path'

const getPosts = () => {
  const folder = path.join(process.cwd(), 'pages/posts')
  const files = fs.readdirSync(folder)
  const metaPattern = /export const meta = (\{[^]*?\})/

  return files
    .map(file => {
      const name = path.join(folder, file)
      const content = readFileSync(name, 'utf-8')
      const metaString = content.match(metaPattern)[1]
      const meta = Function(`'use strict'; return ${metaString}`)()
      const slug = file.replace(/\.mdx?$/, '')
      return { ...meta, slug }
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date))
}

export { getPosts }
