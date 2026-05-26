'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useLang } from '@/context/LanguageContext'
import { t, tr } from '@/lib/i18n'
import { projects, getTotalMRR, getTotalRevenue, getShippedCount, getCurrentlyBuilding } from '@/lib/projects'

import type { Project } from '@/lib/projects'
import { withUTM } from '@/lib/utils'

type StatusFilter = 'All' | 'Live' | 'Building' | 'Idea'
type TypeFilter = 'All' | 'B2B' | 'B2C'

const statusColors: Record<string, string> = {
  Live: 'bg-green-100 text-green-700',
  Building: 'bg-yellow-100 text-yellow-700',
  Idea: 'bg-gray-100 text-gray-500',
}

const cardBorderColors: Record<string, string> = {
  Live: 'border-green-300 hover:border-green-400',
  Building: 'border-yellow-300 hover:border-yellow-400',
  Idea: 'border-gray-200 hover:border-gray-300',
}

const TOTAL_GOAL = 100

export default function Home() {
  const { lang } = useLang()
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('All')
  const [typeFilter, setTypeFilter] = useState<TypeFilter>('All')
  const [email, setEmail] = useState('')
  const [emailSubmitted, setEmailSubmitted] = useState(false)

  const filtered: Project[] = projects.filter((p) => {
    const statusMatch = statusFilter === 'All' || p.status === statusFilter
    const typeMatch = typeFilter === 'All' || p.type === typeFilter
    return statusMatch && typeMatch
  })

  const currentlyBuildingList = getCurrentlyBuilding()
  const shippedCount = getShippedCount()
  const progressPct = Math.round((shippedCount / TOTAL_GOAL) * 100)

  const statusFilters: { key: StatusFilter; label: { en: string; zh: string } }[] = [
    { key: 'All', label: t.projects.filterAll },
    { key: 'Live', label: t.projects.filterLive },
    { key: 'Building', label: t.projects.filterBuilding },
    { key: 'Idea', label: t.projects.filterIdea },
  ]

  const typeFilters: { key: TypeFilter; label: { en: string; zh: string } }[] = [
    { key: 'All', label: t.projects.filterAll },
    { key: 'B2B', label: t.projects.filterB2B },
    { key: 'B2C', label: t.projects.filterB2C },
  ]

  function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    // TODO: wire up to email service (e.g. Mailchimp, Buttondown, ConvertKit)
    setEmailSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-10 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          {tr(t.hero.headline, lang)}
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          {tr(t.hero.subheadline, lang)}
        </p>

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
                href={withUTM('https://x.com/morningwuu')}
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
                href={withUTM('https://www.linkedin.com/in/morningwu/')}
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
        <div className="max-w-5xl mx-auto px-6 py-10">
          <div className="grid grid-cols-3 gap-6 text-center mb-8">
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

          {/* Progress bar */}
          <div className="max-w-md mx-auto">
            <div className="flex items-center justify-between mb-2 text-sm">
              <span className="font-medium text-gray-700">
                {lang === 'zh' ? '挑戰進度' : 'Challenge Progress'}
              </span>
              <span className="font-bold text-gray-900">
                {shippedCount} <span className="text-gray-400 font-normal">/ {TOTAL_GOAL}</span>
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
              <div
                className="bg-gray-900 h-2.5 rounded-full transition-all duration-500"
                style={{ width: `${progressPct}%` }}
              />
            </div>
            <p className="text-xs text-gray-400 mt-1.5 text-right">{progressPct}% {lang === 'zh' ? '完成' : 'complete'}</p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-1">{tr(t.projects.title, lang)}</h2>
          <p className="text-gray-500">{tr(t.projects.subtitle, lang)}</p>
        </div>

        {/* Currently Building callout */}
        {currentlyBuildingList.length > 0 && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-5 py-4 mb-8">
            <p className="text-yellow-700 font-semibold text-xs uppercase tracking-wide mb-3">
              {tr(t.currentlyBuilding.label, lang)}
            </p>
            <div className="flex flex-wrap gap-2">
              {currentlyBuildingList.map((p) => (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="inline-flex items-center gap-1.5 bg-white border border-yellow-200 text-gray-800 text-sm font-medium px-3 py-1.5 rounded-lg hover:bg-yellow-100 transition-colors"
                >
                  {p.name}
                  <svg className="w-3 h-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Filters */}
        <div className="flex flex-col items-center gap-3 mb-10">
          {/* Status filter */}
          <div className="flex items-center gap-2">
            {statusFilters.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setStatusFilter(key)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  statusFilter === key
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
              >
                {tr(label, lang)}
                <span className={`ml-1.5 text-xs ${statusFilter === key ? 'text-gray-300' : 'text-gray-400'}`}>
                  {key === 'All' ? projects.length : projects.filter((p) => p.status === key).length}
                </span>
              </button>
            ))}
          </div>
          {/* Type filter */}
          <div className="flex items-center gap-2">
            {typeFilters.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setTypeFilter(key)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  typeFilter === key
                    ? 'bg-indigo-600 text-white'
                    : 'bg-indigo-50 text-indigo-400 hover:bg-indigo-100'
                }`}
              >
                {tr(label, lang)}
                <span className={`ml-1.5 text-xs ${typeFilter === key ? 'text-indigo-200' : 'text-indigo-300'}`}>
                  {key === 'All' ? projects.length : projects.filter((p) => p.type === key).length}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => {
            const buildIndex = projects.findIndex((p) => p.slug === project.slug)
            const buildNumber = `#${String(buildIndex + 1).padStart(3, '0')}`
            return (
              <div
                key={project.slug}
                className={`border-2 rounded-xl overflow-hidden flex flex-col hover:shadow-md transition-all bg-white ${cardBorderColors[project.status]}`}
              >
                {/* Thumbnail */}
                {project.image ? (
                  <Image src={project.image} alt={project.name} width={1200} height={630} className="w-full aspect-[1200/630] object-cover" />
                ) : (
                  <div className="w-full aspect-[1200/630] bg-gray-100 flex items-center justify-center">
                    <span className="text-4xl font-bold text-gray-300 select-none">
                      {project.name.split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase()}
                    </span>
                  </div>
                )}

                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-medium text-gray-300">{buildNumber}</span>
                      <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">{project.category}</span>
                    </div>
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
                      href={withUTM(project.projectUrl)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center text-sm font-medium bg-gray-900 text-white px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      {tr(t.projects.visitProject, lang)}
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Email capture */}
      <section className="border-t border-gray-100 bg-white">
        <div className="max-w-xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{tr(t.email.title, lang)}</h2>
          <p className="text-gray-500 mb-8 leading-relaxed">{tr(t.email.subtitle, lang)}</p>
          {emailSubmitted ? (
            <p className="text-green-600 font-medium text-lg">{tr(t.email.success, lang)}</p>
          ) : (
            <form onSubmit={handleEmailSubmit} className="flex gap-2 max-w-sm mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={tr(t.email.placeholder, lang)}
                className="flex-1 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-gray-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors whitespace-nowrap"
              >
                {tr(t.email.button, lang)}
              </button>
            </form>
          )}
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
            <a href={withUTM('https://x.com/morningwuu')} target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors">X</a>
            <a href={withUTM('https://www.linkedin.com/in/morningwu/')} target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
