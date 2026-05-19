export type Project = {
  slug: string
  name: string
  category: string
  status: 'Live' | 'Building' | 'Idea'
  type: 'B2B' | 'B2C'
  currentlyBuilding?: boolean
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
  whatILearned: { en: string; zh: string }
}

export const projects: Project[] = [
  {
    slug: 'buildwithvibecode',
    type: 'B2C',
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
    whatILearned: {
      en: 'Building a directory is 80% content curation, 20% tech. The hard part isn\'t the site — it\'s getting people to submit consistently. Seed it manually before building an automated submission flow.',
      zh: '建立目錄網站 80% 是內容策展，20% 是技術。難點不在於建站，而在於讓人們持續提交。在建立自動化提交流程之前先手動填充初始內容。',
    },
  },
  {
    slug: 'muse-digital-print',
    type: 'B2C',
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
    whatILearned: {
      en: 'Digital products on Etsy are largely an SEO game — title, tags, and thumbnail are everything. Midjourney + minimal post-processing can produce commercial-quality fine art prints in hours, not weeks.',
      zh: 'Etsy 上的數位產品很大程度上是 SEO 遊戲——標題、標籤和縮圖決定一切。Midjourney 加最少後期處理，可在幾小時而非幾週內產出商業品質的精緻藝術印刷品。',
    },
  },
  {
    slug: 'cs-engine',
    type: 'B2B',
    image: '/photos/csengine-v2.png',
    name: 'CS Engine',
    category: 'AI Agent',
    status: 'Live',
    currentlyBuilding: true,
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
    whatILearned: {
      en: 'Building AI for a real client forces you to care about reliability, not just cleverness. Edge cases in production are 10x harder than in dev. Start simple, nail the 80% case, then layer in sophistication.',
      zh: '為真實客戶建立 AI 系統迫使你關注可靠性而非只是聰明。生產環境的邊緣情況比開發測試難 10 倍。從簡單開始，解決 80% 的情況，再逐步增加複雜度。',
    },
  },
  {
    slug: 'snap2color',
    type: 'B2C',
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
    whatILearned: {
      en: 'Simple utility apps are the most underrated. They do one thing, do it well, and users get the value instantly. AI compressed what would\'ve been a multi-day build into a single afternoon.',
      zh: '簡單的工具應用程式是最被低估的。它們只做一件事、做得很好，用戶能立即理解價值。AI 把一個多天的專案壓縮成一個下午的作業。',
    },
  },
  {
    slug: 'saas-foundry',
    type: 'B2B',
    image: null,
    name: 'SaaS Foundry',
    category: 'AI App',
    status: 'Building',
    currentlyBuilding: true,
    shortDescription: {
      en: 'Audit your business and generate validated SaaS ideas that drive free organic traffic.',
      zh: '審查你的業務並生成經過驗證的 SaaS 創意，帶來免費自然流量。',
    },
    longDescription: {
      en: 'SaaS Foundry takes your existing business or niche and runs a deep audit to uncover gaps, underserved audiences, and untapped traffic opportunities. It then generates actionable SaaS product ideas tailored to your context — each one designed to attract free organic traffic through SEO and content. Think of it as a startup idea generator that actually understands your business.',
      zh: 'SaaS Foundry 針對你現有的業務或利基進行深度審查，發現缺口、未被服務的受眾和未開發的流量機會。然後生成針對你情境的可執行 SaaS 產品創意——每個都旨在透過 SEO 和內容吸引免費自然流量。把它想像成一個真正了解你業務的創業點子生成器。',
    },
    projectUrl: '#',
    mrr: 0,
    monthlyVisitors: 0,
    totalRevenue: 0,
    tools: ['Next.js', 'Claude API', 'Tailwind CSS', 'Vercel'],
    monetization: {
      en: 'Freemium — free for one business audit, paid plan at $19/month for unlimited audits and idea exports.',
      zh: 'Freemium——一次業務審查免費，付費方案每月 19 美元享有無限次審查和創意匯出。',
    },
    marketingPlan: {
      en: 'Target bootstrapped founders and solopreneurs on X and indie hacker communities. SEO content around SaaS ideas and traffic generation keywords.',
      zh: '鎖定 X 和獨立駭客社群上的自力更生創辦人和獨立創業者。針對 SaaS 創意和流量生成關鍵字進行 SEO 內容建設。',
    },
    whatILearned: {
      en: 'Idea generation tools are hard to monetize — users want "the answer", not a process. Still figuring out the right angle. The audit framework is solid but the output needs to be more opinionated.',
      zh: '創意生成工具很難變現——用戶想要「答案」而非流程。仍在摸索正確切入點。審查框架很紮實，但輸出需要更有觀點。',
    },
  },
  {
    slug: 'dreamteller',
    type: 'B2C',
    image: '/photos/dreamteller.png',
    name: 'DreamTeller',
    category: 'AI App',
    status: 'Live',
    shortDescription: {
      en: 'A dream analysis app that helps dream analysis learners interpret and understand their dreams using AI.',
      zh: 'AI 夢境分析應用，幫助夢境研究學習者解讀和理解自己的夢。',
    },
    longDescription: {
      en: 'DreamTeller is an AI-powered dream analysis app built for people who want to learn and understand the art of dream interpretation. Describe your dream and the app breaks down the symbols, emotions, and narrative to help you uncover deeper meaning. Whether you\'re a curious beginner or someone seriously studying dream analysis, DreamTeller gives you a guided, educational experience every time you log a dream.',
      zh: 'DreamTeller 是一款由 AI 驅動的夢境分析應用，專為想學習和理解夢境解析藝術的人而打造。描述你的夢境，應用程式分解其中的符號、情緒和敘事，幫助你發現更深層的含義。無論你是好奇的初學者還是認真研究夢境分析的人，DreamTeller 每次記錄夢境時都能給你提供有引導性的教育體驗。',
    },
    projectUrl: 'https://mydreamteller.vercel.app',
    mrr: 0,
    monthlyVisitors: 0,
    totalRevenue: 0,
    tools: ['Next.js', 'Claude API', 'Supabase', 'Tailwind CSS', 'Vercel'],
    monetization: {
      en: 'Freemium — 5 free dream analyses per month. Pro plan at $7/month for unlimited analyses, pattern tracking and dream history.',
      zh: 'Freemium——每月 5 次免費夢境分析。Pro 方案每月 7 美元，享有無限次分析、模式追蹤和夢境歷史記錄。',
    },
    marketingPlan: {
      en: 'Target wellness and self-improvement communities on TikTok, Instagram and Reddit. Dream content is highly shareable — leaning into viral dream interpretation posts.',
      zh: '鎖定 TikTok、Instagram 和 Reddit 上的健康和自我提升社群。夢境內容高度可分享——利用病毒式夢境解析貼文。',
    },
    whatILearned: {
      en: 'Niche communities care about authenticity above everything. Dream analysis enthusiasts can spot a generic AI response immediately. The product has to genuinely understand the craft.',
      zh: '利基社群最在乎真實性。夢境分析愛好者能立刻識別通用的 AI 回應。產品必須真正理解這門技藝。',
    },
  },
  {
    slug: 'agent-squad',
    type: 'B2B',
    image: '/photos/agentsquad.png',
    name: 'Agent Squad',
    category: 'AI Agent',
    status: 'Live',
    shortDescription: {
      en: 'Build a full AI-powered marketing team — strategy, content, ads and analytics, all on autopilot.',
      zh: '打造完整的 AI 行銷團隊——策略、內容、廣告和分析，全部自動運行。',
    },
    longDescription: {
      en: 'Agent Squad lets you assemble a full marketing team made entirely of AI agents. Each agent has a specialised role — brand strategist, content writer, ad copywriter, social media manager, SEO analyst — and they work together autonomously to execute your marketing. Instead of hiring a team or juggling multiple tools, you deploy your squad and let them run.',
      zh: 'Agent Squad 讓你組建一個完全由 AI 智能體組成的完整行銷團隊。每個智能體都有專門的角色——品牌策略師、內容撰稿人、廣告文案、社群媒體經理、SEO 分析師——他們自主協作執行你的行銷。不需要招募團隊或切換多個工具，只需部署你的智能體小隊讓他們運行。',
    },
    projectUrl: 'http://agentsquads.co/',
    mrr: 0,
    monthlyVisitors: 0,
    totalRevenue: 0,
    tools: ['Next.js', 'Claude API', 'Vercel', 'Tailwind CSS', 'Supabase'],
    monetization: {
      en: 'Subscription model — $29/month for a starter squad, $79/month for a full marketing team with all agents unlocked.',
      zh: '訂閱模式——入門小隊每月 29 美元，完整行銷團隊解鎖所有智能體每月 79 美元。',
    },
    marketingPlan: {
      en: 'Targeting founders and solo marketers on X and LinkedIn. Demo videos showing AI agents in action will be the primary growth engine.',
      zh: '鎖定 X 和 LinkedIn 上的創辦人和單人行銷人員。展示 AI 智能體實際運作的示範影片將是主要增長引擎。',
    },
    whatILearned: {
      en: 'The hardest part of multi-agent systems isn\'t the AI — it\'s defining roles precisely enough that agents don\'t overlap or conflict. Treat each agent like a job description, not a prompt.',
      zh: '多智能體系統最難的不是 AI——而是精確定義角色，讓智能體不重疊或衝突。把每個智能體當作職位描述而非提示詞。',
    },
  },
  {
    slug: 'startup-weekend',
    type: 'B2C',
    image: null,
    name: 'Startup Weekend Playbook',
    category: 'Playbook',
    status: 'Building',
    currentlyBuilding: true,
    shortDescription: {
      en: 'A step-by-step playbook to help you build and launch your startup in 48 hours — just one weekend.',
      zh: '一本手把手的行動手冊，幫助你在 48 小時內打造並上線你的創業產品——就一個週末。',
    },
    longDescription: {
      en: 'StartupWeekend Online Sprint is a structured playbook designed to take you from idea to launched product in a single weekend — 48 hours, no excuses. It breaks the process into clear time-boxed sprints: Friday night for idea validation, Saturday for building, Sunday for launching and getting your first users. With AI tools doing the heavy lifting, one weekend is genuinely enough to ship something real. This is for people who keep saying "I\'ll start next week" — the playbook forces you to start now.',
      zh: 'StartupWeekend Online Sprint 是一本結構化的行動手冊，旨在讓你在一個週末內從想法到上線產品——48 小時，沒有藉口。它將過程分解為清晰的時間盒衝刺：週五晚上驗證想法，週六打造產品，週日上線並獲得第一批用戶。有了 AI 工具承擔繁重工作，一個週末確實足夠發布真實的東西。這是為那些總說「我下週開始」的人準備的——這本手冊強迫你現在就開始。',
    },
    projectUrl: '#',
    mrr: 0,
    monthlyVisitors: 0,
    totalRevenue: 0,
    tools: ['Notion', 'Claude API', 'v0', 'Vercel'],
    monetization: {
      en: 'One-time purchase playbook at $19. Potential to bundle with live cohort sprints at $99 per weekend session.',
      zh: '一次性購買手冊定價 19 美元。有潛力與每週末 99 美元的現場隊列衝刺活動捆綁銷售。',
    },
    marketingPlan: {
      en: 'Target procrastinating founders on X and indie hacker communities. "I built a startup in 48 hours" content will drive organic interest.',
      zh: '鎖定 X 和獨立駭客社群上拖延的創辦人。「我在 48 小時內建了一個創業公司」的內容將帶動自然關注。',
    },
    whatILearned: {
      en: 'A good playbook is one you could follow half-asleep. If the instructions need interpretation, they\'re too vague. The 48-hour constraint is a feature, not a bug — constraints force decisions.',
      zh: '好的行動手冊是你半睡半醒也能跟著做的。如果指引需要詮釋，那就太模糊了。48 小時限制是特性而非缺陷——約束迫使決策。',
    },
  },
  {
    slug: 'career-ai',
    type: 'B2C',
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
    whatILearned: {
      en: 'Career tools require an extraordinary level of trust. People are putting their livelihoods in your hands. The product needs to be accurate and feel deeply human, not just technically correct.',
      zh: '職涯工具需要極高程度的信任。人們把生計交到你手上。產品需要準確，且感覺非常人性化，而不只是技術上正確。',
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

export function getCurrentlyBuilding(): Project[] {
  return projects.filter((p) => p.currentlyBuilding)
}

export function getBuildNumber(slug: string): string {
  const index = projects.findIndex((p) => p.slug === slug)
  if (index === -1) return '#???'
  return `#${String(index + 1).padStart(3, '0')}`
}
