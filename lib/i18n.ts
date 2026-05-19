export type Lang = 'en' | 'zh'

export const t = {
  nav: {
    projects: { en: 'Projects', zh: '專案' },
    about: { en: 'About', zh: '關於' },
  },
  hero: {
    headline: { en: 'Building 100 Startups', zh: '挑戰打造 100 個創業專案' },
    subheadline: {
      en: 'AI is everywhere — and instead of just talking about it, I\'m building with it. I\'m challenging myself to ship 100 startups using AI, and documenting every win, every failure, and everything in between. No gatekeeping, just raw and honest building in public.',
      zh: 'AI 無所不在——與其只是談論它，不如直接動手做。我挑戰自己用 AI 打造 100 個創業產品，並記錄每一次成功、每一次失敗，以及所有過程中的起伏。沒有門檻，只有真實、誠實地公開建造。',
    },
    greeting: { en: 'Hey, I\'m Morning Wu 👋', zh: '嗨，我是 Morning Wu 👋' },
    bio: {
      en: 'Not a developer — just a curious guy trying to survive the AI era. AI is changing everything and I want to see how far a non-coder can go. So I set myself a challenge: build and ship 100 online products — SaaS tools, AI agents, stores, directories — and document every step publicly. The goal? Learn fast, ship faster, and make enough before AI replaces me 😅',
      zh: '我不是開發者——只是一個對 AI 時代充滿好奇、努力求生的普通人。AI 正在改變一切，我想看看一個非程式設計師能走多遠。所以我給自己設定了一個挑戰：打造並上線 100 個網路產品——SaaS 工具、AI 智能體、商店、目錄網站——並公開記錄每一步。目標？快速學習、更快出貨，在 AI 取代我之前賺夠錢 😅',
    },
    connectX: { en: 'Follow on X', zh: '追蹤 X' },
    connectLinkedIn: { en: 'Connect on LinkedIn', zh: '在 LinkedIn 聯繫' },
  },
  stats: {
    shipped: { en: '🚀 Products Built', zh: '🚀 已建造產品' },
    mrr: { en: '💰 Current MRR', zh: '💰 當前月收入' },
    revenue: { en: '💵 Total Revenue', zh: '💵 總收入' },
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
    filterB2B: { en: 'B2B', zh: 'B2B' },
    filterB2C: { en: 'B2C', zh: 'B2C' },
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
    whatILearned: { en: '💡 What I Learned', zh: '💡 我學到了什麼' },
  },
  journal: {
    title: { en: 'Builder\'s Journal', zh: '創業日誌' },
    subtitle: { en: 'Raw thoughts, lessons, and updates from the journey.', zh: '來自這段旅程的真實想法、心得與更新。' },
    readMore: { en: 'Read more →', zh: '閱讀更多 →' },
  },
  currentlyBuilding: {
    label: { en: '🔨 Currently Building', zh: '🔨 目前建造中' },
    cta: { en: 'See details →', zh: '查看詳情 →' },
  },
  email: {
    title: { en: 'Follow the Journey', zh: '追蹤這段旅程' },
    subtitle: { en: 'Get a quick update every time I ship something new. No spam, unsubscribe anytime.', zh: '每次我發布新產品時收到簡短更新。無垃圾郵件，隨時可取消訂閱。' },
    placeholder: { en: 'your@email.com', zh: 'your@email.com' },
    button: { en: 'Subscribe', zh: '訂閱' },
    success: { en: '🎉 You\'re in! I\'ll keep you posted.', zh: '🎉 訂閱成功！我會持續更新你。' },
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
