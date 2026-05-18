export type Project = {
  slug: string
  name: string
  category: string
  status: 'Live' | 'Building' | 'Idea'
  image: string | null
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
    image: '/photos/buildwithvibecode.png',
    name: 'BuiltWith VibeCode',
    category: 'Directory Site',
    status: 'Live',
    shortDescription: {
      en: 'A directory of projects built using AI vibe coding tools like v0, Gemini, Claude Code and more.',
      zh: '收錄使用 AI Vibe Coding 工具（如 v0、Gemini、Claude Code 等）打造的專案目錄。',
    },
    longDescription: {
      en: 'BuiltWith VibeCode is a curated directory showcasing projects built using AI-powered vibe coding tools — v0, Gemini, Claude Code, Cursor, and more. It\'s a place for builders to discover what\'s possible with these tools and get inspired by real projects shipped by real people. If you\'ve built something with a vibe coding tool, this is where it belongs.',
      zh: 'BuiltWith VibeCode 是一個精選目錄，展示使用 AI Vibe Coding 工具打造的專案——v0、Gemini、Claude Code、Cursor 等。這是一個讓創作者發現這些工具可能性、並從真實專案中獲得靈感的地方。如果你用 Vibe Coding 工具做了些東西，這裡就是它的歸屬。',
    },
    projectUrl: 'https://www.builtwithvibecode.com/',
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
    image: '/photos/museprintsdigital-v2.png',
    name: 'Muse Prints Digital',
    category: 'Etsy Store',
    status: 'Live',
    shortDescription: {
      en: 'An Etsy store selling Digital Fine Art prints — instant download, no shipping needed.',
      zh: '在 Etsy 銷售數位精緻藝術印刷品——即時下載，無需運送。',
    },
    longDescription: {
      en: 'Muse Prints Digital is an Etsy shop offering high-quality Digital Fine Art prints available for instant digital download. Customers purchase, download, and print at home or at a local print shop. The store focuses on fine art aesthetic designs — wall art, artistic prints, and abstract pieces.',
      zh: 'Muse Prints Digital 是一家 Etsy 商店，提供高品質數位精緻藝術印刷品，可即時數位下載。顧客購買後下載，在家或在當地印刷店自行列印。商店專注於精緻藝術美學設計——牆面藝術、藝術印刷品和抽象作品。',
    },
    projectUrl: 'https://www.etsy.com/shop/MusePrintsDigital',
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
    slug: 'cs-engine',
    image: '/photos/csengine-v2.png',
    name: 'CS Engine',
    category: 'AI Agent',
    status: 'Building',
    shortDescription: {
      en: 'An AI-powered Customer Intelligence Engine built for an ecommerce brand to automate CS workflows and turn support data into growth insights.',
      zh: '為電商品牌打造的 AI 客服智能引擎，自動化客服流程並將支援數據轉化為成長洞察。',
    },
    longDescription: {
      en: 'CS Engine is an internal AI system built for an ecommerce brand to fully automate their customer service workflow. It handles inbound support queries end-to-end — understanding context, resolving common issues, and escalating only when truly needed. But the real value goes beyond automation: every customer question is captured and analysed as marketing intelligence. Frequently asked questions reveal product confusion, unmet needs, and hidden demand — turning the support inbox into a growth discovery engine. This is a private, internal tool and not available to the public.',
      zh: 'CS Engine 是為一個電商品牌打造的內部 AI 系統，旨在全面自動化其客服工作流程。它端對端處理入站支援查詢——理解上下文、解決常見問題，並僅在真正需要時升級處理。但真正的價值超越了自動化：每個客戶問題都被捕捉並分析為行銷情報。常見問題揭示產品混淆、未滿足的需求和隱藏的需求——將支援收件匣轉化為成長發現引擎。這是一個私有的內部工具，不對外公開。',
    },
    projectUrl: '#',
    mrr: 0,
    monthlyVisitors: 0,
    totalRevenue: 0,
    tools: ['Claude API', 'n8n', 'Supabase', 'Shopify API', 'Make'],
    monetization: {
      en: 'Built as a custom internal solution for a single ecommerce client. Potential to productise into a multi-tenant SaaS for Shopify brands in the future.',
      zh: '作為單一電商客戶的客製化內部解決方案打造。未來有潛力產品化為面向 Shopify 品牌的多租戶 SaaS。',
    },
    marketingPlan: {
      en: 'Internal use only — no public launch planned at this stage. If productised, the go-to-market would target Shopify merchants via communities, DTC forums, and direct outreach.',
      zh: '僅供內部使用——目前階段無公開上線計畫。若產品化，上市策略將透過社群、DTC 論壇和直接外展鎖定 Shopify 商家。',
    },
  },
  {
    slug: 'snap2color',
    image: '/photos/snap2color.png',
    name: 'Snap2Color',
    category: 'AI App',
    status: 'Live',
    shortDescription: {
      en: 'Turn any image into a printable coloring page instantly using AI.',
      zh: '使用 AI 即時將任何圖片轉換為可列印的著色頁。',
    },
    longDescription: {
      en: 'Snap2Color is a simple but delightful AI-powered app that transforms any photo or image into a clean coloring page — ready to print and color. Upload a photo, pick a style, and get a printable coloring sheet in seconds. Great for kids, educators, artists, and anyone who loves coloring. No design skills needed.',
      zh: 'Snap2Color 是一款簡單而令人愉快的 AI 應用，能將任何照片或圖片轉換為清晰的著色頁——隨時可列印上色。上傳照片，選擇風格，幾秒內即可獲得可列印的著色頁。非常適合孩子、教育工作者、藝術家以及所有喜愛著色的人。無需設計技能。',
    },
    projectUrl: 'https://snap2color.vercel.app/',
    mrr: 0,
    monthlyVisitors: 0,
    totalRevenue: 0,
    tools: ['Next.js', 'Vercel', 'Tailwind CSS', 'Claude API'],
    monetization: {
      en: 'Freemium model — free for basic conversions, paid plan for higher resolution exports and batch processing.',
      zh: 'Freemium 模式——基本轉換免費，付費方案提供更高解析度匯出和批次處理功能。',
    },
    marketingPlan: {
      en: 'Targeting parents, teachers and coloring enthusiasts on Pinterest and TikTok. SEO content around "photo to coloring page" keywords.',
      zh: '鎖定 Pinterest 和 TikTok 上的家長、教師和著色愛好者。針對「照片轉著色頁」關鍵字進行 SEO 內容建設。',
    },
  },
  {
    slug: 'daily-ai-digest',
    image: null,
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
    image: null,
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
    image: null,
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
  return projects.length
}
