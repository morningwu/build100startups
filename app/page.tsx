'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useLang } from '@/context/LanguageContext'
import { t, tr } from '@/lib/i18n'
import { projects, getTotalMRR, getTotalRevenue, getShippedCount } from '@/lib/projects'
import type { Project } from '@/lib/projects'

type Filter = 'All' | 'Live' | 'Building' | 'Idea'

const statusColors: Record<string, string> = {
  Live: 'bg-green-100 text-green-700',
  Building: 'bg-yellow-100 text-yellow-700',
  Idea: 'bg-gray-100 text-gray-500',
}

export default function Home() {
  const { lang } = useLang()
  const [filter, setFilter] = useState<Filter>('All')

  const filtered: Project[] = filter === 'All' ? projects : projects.filter((p) => p.status === filter)

  const filters: { key: Filter; label: { en: string; zh: string } }[] = [
    { key: 'All', label: t.projects.filterAll },
    { key: 'Live', label: t.projects.filterLive },
    { key: 'Building', label: t.projects.filterBuilding },
    { key: 'Idea', label: t.projects.filterIdea },
  ]

  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-10 text-center">
        {/* Big headline */}
        <p className="text-sm font-semibold text-indigo-500 uppercase tracking-widest mb-3">
          {tr(t.hero.oneliner, lang)}
        </p>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-10">
          {tr(t.hero.headline, lang)}
        </h1>

        {/* Profile card */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 text-left bg-gray-50 border border-gray-100 rounded-2xl p-6 max-w-2xl mx-auto">
          <Image
            src="/photos/profile-pic.jpg"
            alt="Morning Wu"
            width={80}
            height={80}
            className="rounded-full object-cover ring-4 ring-white shrink-0"
          />
          <div className="flex-1 text-center md:text-left">
            <p className="font-semibold text-gray-900 mb-1">{tr(t.hero.greeting, lang)}</p>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              {tr(t.hero.bio, lang)}
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2 flex-wrap">
              <a
                href="https://x.com/morningwuu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-black text-white px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-gray-800 transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                {tr(t.hero.connectX, lang)}
              </a>
              <a
                href="https://www.linkedin.com/in/morningwu/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-blue-600 text-white px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-blue-700 transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                {tr(t.hero.connectLinkedIn, lang)}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-gray-100 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-4xl font-bold text-gray-900">{getShippedCount()}</p>
            <p className="text-gray-500 text-sm mt-1">{tr(t.stats.shipped, lang)}</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-gray-900">${getTotalMRR()}</p>
            <p className="text-gray-500 text-sm mt-1">{tr(t.stats.mrr, lang)}</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-gray-900">${getTotalRevenue()}</p>
            <p className="text-gray-500 text-sm mt-1">{tr(t.stats.revenue, lang)}</p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-1">{tr(t.projects.title, lang)}</h2>
          <p className="text-gray-500">{tr(t.projects.subtitle, lang)}</p>
        </div>

        {/* Filter tabs */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {filters.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                filter === key
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
              }`}
            >
              {tr(label, lang)}
              <span className={`ml-1.5 text-xs ${filter === key ? 'text-gray-300' : 'text-gray-400'}`}>
                {key === 'All' ? projects.length : projects.filter((p) => p.status === key).length}
              </span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div
              key={project.slug}
              className="border border-gray-200 rounded-xl p-5 flex flex-col hover:shadow-md transition-shadow bg-white"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">{project.category}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${statusColors[project.status]}`}>
                  {tr(t.status[project.status], lang)}
                </span>
              </div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">{project.name}</h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">
                {tr(project.shortDescription, lang)}
              </p>
              <div className="flex items-center gap-1 text-sm text-gray-400 mb-4">
                <span className="font-medium text-gray-700">${project.mrr}</span>
                <span>{tr(t.projects.mrr, lang)}</span>
              </div>
              <div className="flex gap-2 mt-auto">
                <Link
                  href={`/projects/${project.slug}`}
                  className="flex-1 text-center text-sm font-medium border border-gray-200 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  {tr(t.projects.viewDetails, lang)}
                </Link>
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center text-sm font-medium bg-gray-900 text-white px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  {tr(t.projects.visitProject, lang)}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-gray-100 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{tr(t.nav.about, lang)}</h2>
          <p className="text-gray-600 max-w-2xl leading-relaxed">
            {tr(t.hero.bio, lang)}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 px-6 py-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between text-sm text-gray-400">
          <span>{tr(t.footer.text, lang)}</span>
          <div className="flex gap-4">
            <a href="https://x.com/morningwuu" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors">X</a>
            <a href="https://www.linkedin.com/in/morningwu/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
