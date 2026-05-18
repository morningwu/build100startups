'use client'

import Link from 'next/link'
import { notFound } from 'next/navigation'
import { useLang } from '@/context/LanguageContext'
import { t, tr } from '@/lib/i18n'
import { getProjectBySlug } from '@/lib/projects'
import { use } from 'react'

const statusColors: Record<string, string> = {
  Live: 'bg-green-100 text-green-700',
  Building: 'bg-yellow-100 text-yellow-700',
  Idea: 'bg-gray-100 text-gray-500',
}

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const { lang } = useLang()
  const project = getProjectBySlug(slug)

  if (!project) notFound()

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="max-w-3xl mx-auto px-6 py-12">

        {/* Back */}
        <Link href="/" className="text-sm text-gray-400 hover:text-gray-700 transition-colors inline-block mb-8">
          {tr(t.detail.backToAll, lang)}
        </Link>

        {/* Title row */}
        <div className="flex items-start justify-between gap-4 mb-2">
          <h1 className="text-3xl font-bold text-gray-900">{project.name}</h1>
          <span className={`text-sm px-3 py-1 rounded-full font-medium shrink-0 ${statusColors[project.status]}`}>
            {tr(t.status[project.status], lang)}
          </span>
        </div>
        <p className="text-gray-400 text-sm mb-8">{project.category}</p>

        {/* 3-grid stats */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-gray-900">${project.mrr}</p>
            <p className="text-gray-500 text-xs mt-1">{tr(t.detail.currentMRR, lang)}</p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-gray-900">{project.monthlyVisitors.toLocaleString()}</p>
            <p className="text-gray-500 text-xs mt-1">{tr(t.detail.monthlyVisitors, lang)}</p>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-gray-900">${project.totalRevenue}</p>
            <p className="text-gray-500 text-xs mt-1">{tr(t.detail.totalRevenue, lang)}</p>
          </div>
        </div>

        {/* About */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">{tr(t.detail.about, lang)}</h2>
          <p className="text-gray-600 leading-relaxed">{tr(project.longDescription, lang)}</p>
          {project.projectUrl !== '#' && (
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              {tr(t.detail.visitProject, lang)}
            </a>
          )}
        </section>

        <hr className="border-gray-100 mb-8" />

        {/* Monetization */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">{tr(t.detail.monetization, lang)}</h2>
          <p className="text-gray-600 leading-relaxed">{tr(project.monetization, lang)}</p>
        </section>

        <hr className="border-gray-100 mb-8" />

        {/* Tools */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">{tr(t.detail.tools, lang)}</h2>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span key={tool} className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
                {tool}
              </span>
            ))}
          </div>
        </section>

        <hr className="border-gray-100 mb-8" />

        {/* Marketing */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">{tr(t.detail.marketing, lang)}</h2>
          <p className="text-gray-600 leading-relaxed">{tr(project.marketingPlan, lang)}</p>
        </section>

      </div>
    </main>
  )
}
