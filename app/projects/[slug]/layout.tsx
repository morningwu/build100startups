import type { Metadata } from 'next'
import { getProjectBySlug } from '@/lib/projects'

const SITE_URL = 'https://morningbuild.vercel.app'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return {
      title: 'Project Not Found — Build 100 Startups',
    }
  }

  const title = `${project.name} — Build 100 Startups`
  const description = project.shortDescription.en
  const imageUrl = project.image
    ? `${SITE_URL}${project.image}`
    : `${SITE_URL}/photos/buildwithvibecode.png`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/projects/${slug}`,
      siteName: 'Build 100 Startups',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: project.name,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  }
}

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
