import { Routes, Route } from 'react-router-dom'
import { Header } from '@/components/Header'
import { HomePage } from '@/pages/HomePage'
import { SpecialistForm } from '@/pages/SpecialistForm'
import { CompanyPage } from '@/pages/CompanyPage'
import { AuthPage } from '@/pages/AuthPage'
import { PrivacyPolicy } from '@/pages/PrivacyPolicy'
import { CookiePolicy } from '@/pages/CookiePolicy'
import { CookieConsent } from '@/components/CookieConsent'

export function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/specialists" element={<SpecialistForm />} />
        <Route path="/companies" element={<CompanyPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/cookies" element={<CookiePolicy />} />
      </Routes>
      <CookieConsent />
    </>
  )
}

export default App