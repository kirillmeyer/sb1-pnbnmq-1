import { Link } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'

export function CompanyPage() {
  const { isAuthenticated } = useAuth()
  const redirectUrl = isAuthenticated ? '/dashboard' : '/auth'

  return (
    <div className="min-h-screen bg-primary pt-24">
      <div className="container-custom py-12">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-display font-bold text-dark mb-4">Для компаний</h1>
          <p className="text-xl text-dark/80 max-w-2xl mx-auto">
            Найдите идеальных специалистов для вашей команды с помощью нашей платформы
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-display font-bold text-dark mb-4">Разместить вакансию</h2>
            <p className="text-dark/80 mb-6 text-lg">
              Опубликуйте вакансию и получите доступ к базе квалифицированных IT-специалистов и дизайнеров
            </p>
            <ul className="space-y-3 mb-8 text-dark/80">
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                Быстрая публикация
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                Целевая аудитория
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                Качественные отклики
              </li>
            </ul>
            <Link 
              to={redirectUrl} 
              className="btn btn-primary w-full text-center"
            >
              Разместить вакансию
            </Link>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-display font-bold text-dark mb-4">База кандидатов</h2>
            <p className="text-dark/80 mb-6 text-lg">
              Получите доступ к базе проверенных специалистов и находите лучших кандидатов для вашей команды
            </p>
            <ul className="space-y-3 mb-8 text-dark/80">
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                Проверенные профили
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                Актуальные контакты
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                Быстрый поиск
              </li>
            </ul>
            <Link 
              to={redirectUrl} 
              className="btn btn-primary w-full text-center"
            >
              Получить доступ
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}