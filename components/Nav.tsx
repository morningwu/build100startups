'use client'

import { useLang } from '@/context/LanguageContext'
import { t, tr } from '@/lib/i18n'

export default function Nav() {
  const { lang, setLang } = useLang()

  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="font-bold text-gray-900 text-lg tracking-tight">
          Build 100 Startups
        </a>
        <div className="flex items-center gap-6">
          <nav className="flex gap-6 text-sm text-gray-500">
            <a href="#projects" className="hover:text-gray-900 transition-colors">{tr(t.nav.projects, lang)}</a>
            <a href="#about" className="hover:text-gray-900 transition-colors">{tr(t.nav.about, lang)}</a>
          </nav>
          <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1 text-sm">
            <button
              onClick={() => setLang('en')}
              className={`px-2 py-1 rounded-md transition-colors ${lang === 'en' ? 'bg-white shadow-sm font-medium text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
            >
              🇬🇧 EN
            </button>
            <button
              onClick={() => setLang('zh')}
              className={`px-2 py-1 rounded-md transition-colors ${lang === 'zh' ? 'bg-white shadow-sm font-medium text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
            >
              🇹🇼 中文
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
