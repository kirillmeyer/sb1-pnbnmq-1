import { Link } from 'react-router-dom'

export function Hero() {
  return (
    <div className="relative bg-primary min-h-screen flex items-center">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-6xl text-dark leading-tight">
              Находим лучших IT-специалистов и дизайнеров
            </h1>
            <p className="text-xl text-dark/80">
              Помогаем талантливым специалистам найти компанию мечты
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/companies" className="btn btn-primary">
                Я ищу специалиста
              </Link>
              <Link to="/specialists" className="btn btn-secondary">
                Я ищу работу
              </Link>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="bg-dark/5 backdrop-blur-sm p-8 rounded-xl">
              <h2 className="text-2xl text-dark mb-6">Нам доверяют</h2>
              <div className="grid grid-cols-3 gap-4">
                <div className="h-12 bg-dark/10 rounded-lg"></div>
                <div className="h-12 bg-dark/10 rounded-lg"></div>
                <div className="h-12 bg-dark/10 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}