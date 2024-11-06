import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { CompanySection } from '@/components/CompanySection'
import { SpecialistSection } from '@/components/SpecialistSection'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CompanySection />
        <SpecialistSection />
      </main>
    </>
  )
}