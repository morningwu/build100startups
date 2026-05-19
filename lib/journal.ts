export type JournalEntry = {
  id: string
  date: string // "YYYY-MM-DD"
  title: { en: string; zh: string }
  excerpt: { en: string; zh: string }
  body: { en: string; zh: string }
  projectSlug?: string
}

export const journalEntries: JournalEntry[] = [
  {
    id: 'why-100-startups',
    date: '2026-05-01',
    title: {
      en: 'Why I\'m Building 100 Startups',
      zh: '為什麼我要挑戰打造 100 個創業專案',
    },
    excerpt: {
      en: 'I\'m not a developer. I\'m just someone who refuses to be a spectator while AI reshapes everything around us.',
      zh: '我不是開發者。我只是一個拒絕當旁觀者的人，不想看著 AI 重塑我們周圍的一切而無所作為。',
    },
    body: {
      en: 'I\'m not a developer. I\'m just someone who refuses to be a spectator while AI reshapes everything around us. The honest truth: I was terrified. Every week I\'d read about another thing AI could now do — write code, design products, run marketing campaigns. And I thought, what do I actually bring to the table?\n\nSo instead of spiralling, I made a decision. I\'d use AI to build. Not just one thing — 100 things. Every product I\'ve ever wanted to make but couldn\'t because I didn\'t know how to code. I figured: if AI is the tool that breaks down that wall, I\'m picking it up.\n\nThis isn\'t about the money (though it would be nice). It\'s about proving to myself — and maybe to you — that the barrier to building has fundamentally changed. Let\'s find out how far a non-coder can go.',
      zh: '我不是開發者。我只是一個拒絕當旁觀者的人，不想看著 AI 重塑我們周圍的一切而無所作為。老實說：我很害怕。每週都看到關於 AI 又能做什麼新事情的報導——寫程式、設計產品、執行行銷活動。我心想，我到底能帶來什麼價值？\n\n所以我沒有繼續螺旋式焦慮，而是做了一個決定。我要用 AI 來建造東西。不只是一件事——而是 100 件事。每個我一直想做但因為不會寫程式而做不到的產品。我想：如果 AI 是能打破這道牆的工具，那我就拿起它。\n\n這不只是為了錢（雖然有錢當然很好）。而是為了向自己證明——也許也向你證明——建造東西的門檻已經從根本上改變了。讓我們看看一個非程式設計師能走多遠。',
    },
  },
  {
    id: 'first-mrr',
    date: '2026-05-10',
    title: {
      en: 'First $85 MRR — From a Digital Art Store on Etsy',
      zh: '第一筆 $85 月收入——來自 Etsy 數位藝術商店',
    },
    excerpt: {
      en: 'I made my first recurring revenue from selling AI-generated fine art prints. No shipping, no inventory, just pure digital margin.',
      zh: '我靠販售 AI 生成的精緻藝術印刷品獲得了第一筆定期收入。無需運送、無需庫存，純數位利潤。',
    },
    body: {
      en: 'Week three, and I\'ve made my first real money. $85 MRR from Muse Prints Digital — an Etsy shop selling AI-generated fine art prints as digital downloads. I used Midjourney to generate the artwork, Canva for minor touch-ups, and listed them at $3–$8 each.\n\nWhat surprised me: Etsy SEO is a real skill. The first week I sold nothing. Then I rewrote my titles and tags based on what people actually search for ("printable wall art", "abstract digital download", "minimalist art print") and sales started trickling in.\n\nThe margin is wild for a digital product. No inventory. No shipping. Just a file sold over and over. This is the model I want to repeat — find underserved markets for digital products and use AI to fill them fast.',
      zh: '第三週，我賺到了第一筆真正的錢。Muse Prints Digital 帶來了 $85 的月收入——這是一家在 Etsy 上以數位下載形式銷售 AI 生成精緻藝術印刷品的商店。我用 Midjourney 生成藝術作品，用 Canva 進行微調，定價每件 $3–$8。\n\n讓我驚訝的是：Etsy SEO 是一門真正的技術。第一週我什麼都沒賣出去。然後我根據人們實際搜尋的內容重寫了標題和標籤（「可列印牆面藝術」、「抽象數位下載」、「極簡藝術印刷品」），銷售開始慢慢進來了。\n\n數位產品的利潤令人咋舌。無庫存。無運費。只是一個文件一遍又一遍地被售出。這是我想重複的模式——找到數位產品未被服務的市場，並用 AI 快速填補它們。',
    },
    projectSlug: 'muse-digital-print',
  },
  {
    id: 'ai-agents-are-harder',
    date: '2026-05-17',
    title: {
      en: 'AI Agents Are Harder Than They Look',
      zh: 'AI 智能體比看起來難得多',
    },
    excerpt: {
      en: 'I spent two weeks building an AI agent for a real client. Here\'s what no one tells you about production AI systems.',
      zh: '我花了兩週為真實客戶建立 AI 智能體。這是沒人告訴你的關於生產環境 AI 系統的事。',
    },
    body: {
      en: 'Everyone talks about AI agents like they\'re magic. Build a prompt, add some tools, deploy — done. Reality check: production AI systems are genuinely hard.\n\nBuilding CS Engine for a real ecommerce client taught me this fast. The demo worked beautifully. The production version hit edge cases immediately: ambiguous queries, multi-language customers, requests the AI confidently answered incorrectly.\n\nThe lesson? Reliability > cleverness. A system that handles 80% of cases perfectly and gracefully escalates the rest is infinitely more valuable than one that attempts 100% and gets 15% badly wrong. Start simple. Get the boring stuff working. Then make it smart.\n\nAlso: clients don\'t care about your tech stack. They care about whether their support tickets go down. Build for outcomes, not architecture.',
      zh: '每個人談論 AI 智能體時都像在說魔法。建立一個提示詞，加一些工具，部署——完成。現實點：生產環境 AI 系統真的很難。\n\n為真實電商客戶建立 CS Engine 讓我很快學到這一點。演示版效果很好。生產版立刻遇到了邊緣情況：模糊的查詢、多語言客戶、AI 自信地錯誤回答的請求。\n\n教訓？可靠性 > 聰明度。一個能完美處理 80% 情況並優雅升級其餘情況的系統，遠比試圖處理 100% 但有 15% 嚴重出錯的系統更有價值。從簡單開始。讓無聊的東西先運作。然後讓它變得聰明。\n\n另外：客戶不在乎你的技術棧。他們在乎他們的支援工單是否減少了。為結果而建，而非為架構而建。',
    },
    projectSlug: 'cs-engine',
  },
]
