export type Project = {
  slug: string
  name: string
  category: string
  status: 'Live' | 'Building' | 'Idea'
  shortDescription: { en: string; zh: string }
  longDescription: { en: string; zh: string }
  projectUrl: string
  mrr: number
  monthlyVisitors: number
  totalRevenue: number
  tools: string[]
  monetization: { en: string; zh: string }
  marketingPlan: { en: string; zh: string }
}

export const projects: Project[] = [
  {
    slug: 'buildwithvibecode',
    name: 'BuildWithVibe Code',
    category: 'Directory Site',
    status: 'Live',
    shortDescription: {
      en: 'A curated directory of the best vibe coding tools, resources and communities for builders.',
      zh: '精選的最佳 Vibe Coding 工具、資源與社群目錄，專為創作者打造。',
    },
    longDescription: {
      en: 'BuildWithVibe Code is a hand-curated directory that helps non-developers and indie hackers discover the best AI-powered coding tools, no-code platforms, communities, and learning resources. The goal is to lower the barrier to building — if you have an idea, this is where you find the tools to make it real.',
      zh: 'BuildWithVibe Code 是一個精心策劃的目錄，幫助非開發者和獨立駭客發現最好的 AI 程式工具、無程式碼平台、社群和學習資源。目標是降低建造的門檻——如果你有想法，這裡就是你找到工具實現它的地方。',
    },
    projectUrl: 'https://buildwithvibecode.com',
    mrr: 0,
    monthlyVisitors: 320,
    totalRevenue: 0,
    tools: ['Next.js', 'Tailwind CSS', 'Notion API', 'Vercel'],
    monetization: {
      en: 'Sponsored listings and affiliate links from tool providers. Planning to add a premium "featured" placement tier.',
      zh: '透過工具商的贊助列表和聯盟連結獲利。計畫新增付費「精選」置頂方案。',
    },
    marketingPlan: {
      en: 'Launched on Product Hunt and shared in indie hacker communities. Growing organically via SEO by targeting long-tail keywords around AI coding tools.',
      zh: '在 Product Hunt 上線並分享至獨立駭客社群。透過 SEO 針對 AI 程式工具的長尾關鍵字實現自然增長。',
    },
  },
  {
    slug: 'muse-digital-print',
    name: 'Muse Digital Print',
    category: 'Etsy Store',
    status: 'Live',
    shortDescription: {
      en: 'An Etsy store selling AI-generated digital art prints — instant download, no shipping needed.',
      zh: '在 Etsy 銷售 AI 生成數位藝術印刷品——即時下載，無需運送。',
    },
    longDescription: {
      en: 'Muse Digital Print is an Etsy shop offering high-quality, AI-generated art prints available for instant digital download. Customers purchase, download, and print at home or at a local print shop. The store focuses on minimalist aesthetic designs — wall art, motivational prints, and abstract pieces.',
      zh: 'Muse Digital Print 是一家 Etsy 商店，提供高品質、AI 生成的藝術印刷品，可即時數位下載。顧客購買後下載，在家或在當地印刷店自行列印。商店專注於簡約美學設計——牆面藝術、勵志印刷品和抽象作品。',
    },
    projectUrl: 'https://etsy.com/shop/MuseDigitalPrint',
    mrr: 85,
    monthlyVisitors: 1200,
    totalRevenue: 340,
    tools: ['Midjourney', 'Canva', 'Etsy', 'Printify'],
    monetization: {
      en: 'Direct product sales on Etsy. Each digital file is sold at $3–$8. No inventory, no shipping — pure digital margin.',
      zh: '在 Etsy 直接銷售產品。每個數位檔案售價 3–8 美元。無庫存、無運費——純數位利潤。',
    },
    marketingPlan: {
      en: 'Etsy SEO optimization is the main growth driver. Also posting designs on Pinterest and Instagram to drive external traffic to the shop.',
      zh: 'Etsy SEO 優化是主要增長驅動力。同時在 Pinterest 和 Instagram 發布設計，為商店帶來外部流量。',
    },
  },
  {
    slug: 'aws-lab',
    name: 'AWS Lab',
    category: 'AI Learning App',
    status: 'Building',
    shortDescription: {
      en: 'An interactive AI learning app that helps beginners understand AWS through hands-on labs and AI-guided explanations.',
      zh: '互動式 AI 學習應用，透過實作練習和 AI 引導說明，幫助初學者了解 AWS。',
    },
    longDescription: {
      en: 'AWS Lab makes cloud computing accessible to non-engineers by combining bite-sized lessons with interactive sandbox environments. Powered by AI, it explains complex AWS concepts in plain English, provides guided labs, and quizzes users as they progress. The aim is to help people get AWS certified without needing a CS degree.',
      zh: 'AWS Lab 透過結合碎片化課程和互動沙盒環境，讓非工程師也能輕鬆接觸雲端運算。由 AI 驅動，以平易近人的語言解釋複雜的 AWS 概念，提供引導式實驗，並在學習過程中測驗用戶。目標是幫助人們在不需要電腦科學學位的情況下取得 AWS 認證。',
    },
    projectUrl: 'https://awslab.io',
    mrr: 0,
    monthlyVisitors: 0,
    totalRevenue: 0,
    tools: ['Next.js', 'OpenAI API', 'Supabase', 'Vercel', 'Tailwind CSS'],
    monetization: {
      en: 'Freemium SaaS model — free for basic lessons, $9/month for full lab access and AI tutor features.',
      zh: 'Freemium SaaS 模式——基礎課程免費，完整實驗室存取和 AI 導師功能每月 9 美元。',
    },
    marketingPlan: {
      en: 'Targeting AWS exam prep communities on Reddit and Discord. Plan to publish SEO content around popular AWS certification queries.',
      zh: '鎖定 Reddit 和 Discord 上的 AWS 考試準備社群。計畫針對熱門 AWS 認證查詢發布 SEO 內容。',
    },
  },
  {
    slug: 'daily-ai-digest',
    name: 'Daily AI Digest',
    category: 'Newsletter',
    status: 'Building',
    shortDescription: {
      en: 'A daily 3-minute newsletter that curates the most important AI news — no hype, just signal.',
      zh: '每日 3 分鐘電子報，精選最重要的 AI 新聞——去除炒作，只留重點。',
    },
    longDescription: {
      en: 'Daily AI Digest cuts through the noise of the AI space. Every morning, subscribers get a clean digest of the 3 most impactful AI developments of the day — explained simply, with context on why it matters. No fluff, no hype. Built for busy people who want to stay informed without spending hours reading tech news.',
      zh: 'Daily AI Digest 穿透 AI 領域的雜訊。每天早上，訂閱者收到當天 3 個最具影響力的 AI 發展簡報——以簡單方式解釋，並說明其重要性的背景。無廢話、無炒作。專為忙碌的人設計，讓他們無需花費數小時閱讀科技新聞即可保持知情。',
    },
    projectUrl: 'https://dailyaidigest.com',
    mrr: 0,
    monthlyVisitors: 0,
    totalRevenue: 0,
    tools: ['Beehiiv', 'Claude API', 'Zapier', 'Twitter/X'],
    monetization: {
      en: 'Sponsorships once the list hits 1,000 subscribers. Long-term plan includes a paid premium tier with deeper AI analysis.',
      zh: '訂閱人數達到 1,000 人後開始接受贊助。長期計畫包括提供更深入 AI 分析的付費高級版本。',
    },
    marketingPlan: {
      en: 'Growing through X (Twitter) posts and cross-promotion with other AI newsletters. Referral program planned for launch.',
      zh: '透過 X（Twitter）貼文和與其他 AI 電子報的交叉推廣來增長。計畫在上線時推出推薦計畫。',
    },
  },
  {
    slug: 'pixelstore',
    name: 'PixelStore',
    category: 'Digital Marketplace',
    status: 'Idea',
    shortDescription: {
      en: 'A marketplace for buying and selling AI-generated digital assets — icons, illustrations, UI kits and more.',
      zh: '買賣 AI 生成數位資產的市集——圖示、插圖、UI 套件等。',
    },
    longDescription: {
      en: 'PixelStore is a digital asset marketplace specifically for AI-generated content. Designers and builders can buy ready-to-use icon sets, illustration packs, UI templates, and brand kits — all created with AI tools. Sellers upload, price, and earn. Buyers get instant downloads. The platform focuses on quality curation over volume.',
      zh: 'PixelStore 是專為 AI 生成內容設計的數位資產市集。設計師和創作者可以購買可直接使用的圖示集、插圖包、UI 模板和品牌套件——全部使用 AI 工具創建。賣家上傳、定價並賺取收益。買家即時下載。平台專注於質量策劃而非數量。',
    },
    projectUrl: '#',
    mrr: 0,
    monthlyVisitors: 0,
    totalRevenue: 0,
    tools: ['Next.js', 'Stripe', 'Supabase', 'Cloudflare R2', 'Tailwind CSS'],
    monetization: {
      en: 'Platform takes 20% commission on each sale. Premium seller accounts at $15/month for reduced commission and analytics.',
      zh: '平台抽取每筆銷售額的 20% 佣金。高級賣家帳戶每月 15 美元，享有降低佣金和數據分析功能。',
    },
    marketingPlan: {
      en: 'Launch on Product Hunt and target design communities on X, Dribbble and Behance. SEO targeting design asset and UI kit keywords.',
      zh: '在 Product Hunt 上線，並鎖定 X、Dribbble 和 Behance 上的設計社群。SEO 針對設計資產和 UI 套件關鍵字。',
    },
  },
  {
    slug: 'career-ai',
    name: 'CareerAI',
    category: 'AI Agent',
    status: 'Idea',
    shortDescription: {
      en: 'An AI career coach that reviews your resume, preps you for interviews, and maps out your next career move.',
      zh: 'AI 職涯教練，審查你的履歷、幫你準備面試，並規劃你的下一步職涯發展。',
    },
    longDescription: {
      en: 'CareerAI is a personal career coach powered by AI. Upload your resume and it gives you instant feedback, rewrites weak sections, and tailors it to specific job descriptions. It also runs mock interviews, asks role-specific questions, and coaches you on your answers. Think of it as having a career advisor on-demand, 24/7, at a fraction of the cost.',
      zh: 'CareerAI 是由 AI 驅動的個人職涯教練。上傳你的履歷，即可獲得即時反饋、改寫薄弱部分，並針對特定職位描述進行調整。它還能進行模擬面試、提問特定職位問題，並指導你的回答。可以把它想像成隨需即用的職涯顧問，24/7 全天候，費用只需一小部分。',
    },
    projectUrl: '#',
    mrr: 0,
    monthlyVisitors: 0,
    totalRevenue: 0,
    tools: ['Next.js', 'Claude API', 'Supabase', 'Stripe', 'Vercel'],
    monetization: {
      en: 'Freemium model — 3 free resume reviews per month. Pro plan at $12/month for unlimited access, mock interviews and job tracking.',
      zh: 'Freemium 模式——每月 3 次免費履歷審查。Pro 方案每月 12 美元，享有無限次存取、模擬面試和求職追蹤功能。',
    },
    marketingPlan: {
      en: 'Target job seekers on LinkedIn and Reddit career communities. Partner with bootcamps and career transition communities for co-marketing.',
      zh: '鎖定 LinkedIn 和 Reddit 職涯社群的求職者。與訓練營和職涯轉換社群合作進行聯合行銷。',
    },
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getTotalMRR(): number {
  return projects.reduce((sum, p) => sum + p.mrr, 0)
}

export function getTotalRevenue(): number {
  return projects.reduce((sum, p) => sum + p.totalRevenue, 0)
}

export function getShippedCount(): number {
  return projects.filter((p) => p.status === 'Live').length
}
