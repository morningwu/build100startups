'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLang } from '@/context/LanguageContext'
import { t, tr } from '@/lib/i18n'
import { projects } from '@/lib/projects'
import type { Project } from '@/lib/projects'
import { withUTM } from '@/lib/utils'

function getFaviconUrl(projectUrl: string): string | null {
  if (!projectUrl || projectUrl === '#') return null
  try {
    const domain = new URL(projectUrl).hostname
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`
  } catch {
    return null
  }
}

export default function Home() {
  const { lang } = useLang()
  const TOP_ORDER = ['afterwork-startup', 'agent-squad', 'scammer-scanner']
  const liveProjects = projects.filter((p) => p.status === 'Live')
  const filtered: Project[] = [
    ...TOP_ORDER.map((slug) => liveProjects.find((p) => p.slug === slug)).filter(Boolean) as Project[],
    ...liveProjects.filter((p) => !TOP_ORDER.includes(p.slug)),
  ]

  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-4 md:px-6 pt-12 md:pt-16 pb-10 md:pb-12">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <Image
            src="/photos/profile-pic.jpg"
            alt="Morning Wu"
            width={120}
            height={120}
            className="rounded-full object-cover ring-4 ring-gray-100 shrink-0"
          />
          <div className="flex-1 text-center md:text-left">
            <p className="text-2xl font-bold text-gray-900 mb-2">{tr(t.hero.greeting, lang)}</p>
            <p className="text-gray-600 text-base leading-relaxed mb-6 max-w-2xl">
              {tr(t.hero.bio, lang)}
            </p>
            <div className="flex items-center justify-center md:justify-start gap-3 flex-wrap">
              <a
                href={withUTM('https://x.com/morningwuu')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                {tr(t.hero.connectX, lang)}
              </a>
              <a
                href={withUTM('https://www.linkedin.com/in/morningwu/')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                {tr(t.hero.connectLinkedIn, lang)}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects list */}
      <section id="projects" className="max-w-3xl mx-auto px-4 md:px-6 pb-16 md:pb-20">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
          {tr(t.projects.title, lang)}
        </p>
        <div className="divide-y divide-gray-100 border-t border-gray-100">
          {filtered.map((project) => {
            const favicon = getFaviconUrl(project.projectUrl)
            return (
              <div key={project.slug} className="flex items-start gap-4 py-5 md:py-6 group">

                {/* Icon */}
                <div className="shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center overflow-hidden mt-0.5">
                  {favicon ? (
                    <img src={favicon} alt="" width={24} height={24} className="w-5 h-5 md:w-6 md:h-6" />
                  ) : (
                    <span className="text-xs font-bold text-gray-300">
                      {project.name.split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase()}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  {/* Name + badge */}
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-semibold text-gray-900 text-base md:text-lg leading-snug">
                        {project.name}
                      </h3>
                      {project.badge && (
                        <span className="inline-flex items-center gap-1 text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200 px-2 py-0.5 rounded-full">
                          🏆 {project.badge}
                        </span>
                      )}
                    </div>
                    {/* Desktop button */}
                    {project.projectUrl !== '#' && (
                      <a
                        href={withUTM(project.projectUrl)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:flex shrink-0 items-center gap-1.5 border border-gray-200 text-gray-600 text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all"
                      >
                        {tr(t.projects.visitProject, lang)}
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                  {/* Description */}
                  <p className="text-gray-500 text-sm leading-relaxed mb-3">
                    {tr(project.shortDescription, lang)}
                  </p>
                  {/* Mobile button */}
                  {project.projectUrl !== '#' && (
                    <a
                      href={withUTM(project.projectUrl)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="md:hidden inline-flex items-center gap-1.5 border border-gray-200 text-gray-600 text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all"
                    >
                      {tr(t.projects.visitProject, lang)}
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 px-4 md:px-6 py-6">
        <div className="max-w-3xl mx-auto flex items-center justify-between text-sm text-gray-400">
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
