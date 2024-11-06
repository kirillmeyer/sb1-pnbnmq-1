import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b border-dark/10">
      <nav className="container-custom">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-display text-dark hover:text-dark/80 transition-colors">
              Hiry
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link to="/companies" className="text-dark hover:text-dark/80 transition-colors">
                Компаниям
              </Link>
              <Link to="/specialists" className="text-dark hover:text-dark/80 transition-colors">
                Специалистам
              </Link>
            </div>
          </div>

          <div>
            <Link to="/auth" className="btn btn-primary">
              Войти
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}