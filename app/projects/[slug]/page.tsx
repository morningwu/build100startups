'use client'

import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { useLang } from '@/context/LanguageContext'
import { t, tr } from '@/lib/i18n'
import { getProjectBySlug } from '@/lib/projects'
import { withUTM } from '@/lib/utils'
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

        {/* Hero image */}
        {project.image ? (
          <Image
            src={project.image}
            alt={project.name}
            width={1200}
            height={630}
            className="w-full aspect-[1200/630] object-cover rounded-2xl mb-8"
          />
        ) : (
          <div className="w-full aspect-[1200/630] bg-gray-100 rounded-2xl mb-8 flex items-center justify-center">
            <span className="text-7xl font-bold text-gray-200 select-none">
              {project.name.split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase()}
            </span>
          </div>
        )}

        {/* Title row */}
        <div className="flex items-start justify-between gap-4 mb-2">
          <h1 className="text-3xl font-bold text-gray-900">{project.name}</h1>
          <span className={`text-sm px-3 py-1 rounded-full font-medium shrink-0 ${statusColors[project.status]}`}>
            {tr(t.status[project.status], lang)}
          </span>
        </div>
        <div className="flex items-center gap-3 mb-8">
          <span className="text-gray-400 text-sm">{project.category}</span>
          {project.projectUrl !== '#' && (
            <a
              href={withUTM(project.projectUrl)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
            >
              {project.projectUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')}
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>

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
