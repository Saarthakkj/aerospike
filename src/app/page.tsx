'use client'

import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { FeaturesSection } from "@/components/features-section"
import dynamic from 'next/dynamic'
const CompaniesSection = dynamic(() => import('@/components/companies-section').then((mod) => mod.CompaniesSection), {
  ssr: false,
})
import { CodeExampleSection } from "@/components/code-example-section"
import { ScalabilitySection } from "@/components/scalability-section"
import { NewsSection } from "@/components/news-section"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <CompaniesSection />
        <CodeExampleSection />
        <ScalabilitySection />
        <NewsSection />
      </main>
      <SiteFooter />
    </div>
  )
}
