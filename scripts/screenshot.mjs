import puppeteer from 'puppeteer'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const [url, filename] = process.argv.slice(2)

if (!url || !filename) {
  console.error('Usage: node scripts/screenshot.js <url> <filename>')
  console.error('Example: node scripts/screenshot.js https://builtwithvibecode.com buildwithvibecode')
  process.exit(1)
}

const outputPath = path.join(__dirname, '..', 'public', 'photos', `${filename}.png`)

console.log(`📸 Screenshotting ${url} ...`)

const browser = await puppeteer.launch({ headless: true })
const page = await browser.newPage()

await page.setViewport({ width: 1200, height: 630 })
await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 })

// Small pause so web fonts / animations settle
await new Promise((r) => setTimeout(r, 1500))

await page.screenshot({ path: outputPath, type: 'png' })
await browser.close()

console.log(`✅ Saved to public/photos/${filename}.png`)
