import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-dark/10 p-4 shadow-lg z-50">
      <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-dark/80">
          Мы используем файлы cookie для улучшения работы сайта. Продолжая использовать сайт, вы соглашаетесь с{' '}
          <Link to="/cookies" className="text-dark underline">
            политикой использования файлов cookie
          </Link>
        </p>
        <button onClick={handleAccept} className="btn btn-primary whitespace-nowrap">
          Согласен
        </button>
      </div>
    </div>
  )
}