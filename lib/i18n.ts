export type Lang = 'en' | 'zh'

export const t = {
  nav: {
    projects: { en: 'Projects', zh: '專案' },
    about: { en: 'About', zh: '關於' },
  },
  hero: {
    headline: { en: 'Building 100 Startups', zh: '挑戰打造 100 個創業專案' },
    oneliner: { en: 'Shipping 100 online products in public — one build at a time.', zh: '公開上線 100 個網路產品——一次一個專案。' },
    greeting: { en: 'Hey, I\'m Morning Wu 👋', zh: '嗨，我是 Morning Wu 👋' },
    bio: {
      en: 'Not a developer — just a curious guy trying to survive the AI era. AI is changing everything and I want to see how far a non-coder can go. So I set myself a challenge: build and ship 100 online products — SaaS tools, AI agents, stores, directories — and document every step publicly. The goal? Learn fast, ship faster, and make enough before AI replaces me 😅',
      zh: '我不是開發者——只是一個對 AI 時代充滿好奇、努力求生的普通人。AI 正在改變一切，我想看看一個非程式設計師能走多遠。所以我給自己設定了一個挑戰：打造並上線 100 個網路產品——SaaS 工具、AI 智能體、商店、目錄網站——並公開記錄每一步。目標？快速學習、更快出貨，在 AI 取代我之前賺夠錢 😅',
    },
    connectX: { en: 'Follow on X', zh: '追蹤 X' },
    connectLinkedIn: { en: 'Connect on LinkedIn', zh: '在 LinkedIn 聯繫' },
  },
  stats: {
    shipped: { en: 'Products Built', zh: '已建造產品' },
    mrr: { en: 'Current MRR', zh: '當前每月經常性收入' },
    revenue: { en: 'Total Revenue', zh: '總收入' },
  },
  projects: {
    title: { en: 'All Products', zh: '所有產品' },
    subtitle: { en: 'Every product I\'ve built, documented in public.', zh: '我建造的每個產品，公開記錄。' },
    viewDetails: { en: 'View Details', zh: '查看詳情' },
    visitProject: { en: 'Visit Project', zh: '前往專案' },
    mrr: { en: 'MRR', zh: '每月收入' },
    status: { en: 'Status', zh: '狀態' },
    filterAll: { en: 'All', zh: '全部' },
    filterLive: { en: 'Live', zh: '已上線' },
    filterBuilding: { en: 'Building', zh: '建造中' },
    filterIdea: { en: 'Idea', zh: '構想中' },
  },
  detail: {
    backToAll: { en: '← All Builds', zh: '← 所有專案' },
    currentMRR: { en: 'Current MRR', zh: '當前每月收入' },
    monthlyVisitors: { en: 'Monthly Visitors', zh: '每月訪客' },
    totalRevenue: { en: 'Total Revenue', zh: '總收入' },
    about: { en: 'About This Build', zh: '關於此專案' },
    visitProject: { en: 'Visit Project →', zh: '前往專案 →' },
    monetization: { en: 'Monetization', zh: '獲利模式' },
    tools: { en: 'Tools Used', zh: '使用工具' },
    marketing: { en: 'Marketing & Launch Plan', zh: '行銷與上線計畫' },
  },
  status: {
    Live: { en: 'Live', zh: '已上線' },
    Building: { en: 'Building', zh: '建造中' },
    Idea: { en: 'Idea', zh: '構想中' },
  },
  footer: {
    text: { en: 'Built by Morning Wu · Building 100 Startups in public', zh: '由 Morning Wu 打造 · 公開建造 100 個創業專案' },
  },
}

export function tr(obj: { en: string; zh: string }, lang: Lang): string {
  return obj[lang]
}
