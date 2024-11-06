export function CompanySection() {
  return (
    <section className="bg-white py-24">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark mb-4">Для компаний</h2>
          <p className="text-xl text-dark/60">Найдите идеальных специалистов для вашей команды</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-primary/10 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-dark mb-4">Размещение вакансий</h3>
            <p className="text-dark/80 mb-4">Доступ к тысячам квалифицированных специалистов в области технологий и дизайна.</p>
            <ul className="space-y-2 text-dark/80">
              <li>✓ Простое размещение</li>
              <li>✓ Целевая аудитория</li>
              <li>✓ Качественные кандидаты</li>
            </ul>
          </div>
          
          <div className="bg-primary/10 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-dark mb-4">Поиск талантов</h3>
            <p className="text-dark/80 mb-4">Просматривайте нашу базу проверенных профессионалов.</p>
            <ul className="space-y-2 text-dark/80">
              <li>✓ Проверенные профили</li>
              <li>✓ Оценка портфолио</li>
              <li>✓ Прямой контакт</li>
            </ul>
          </div>
          
          <div className="bg-primary/10 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-dark mb-4">Быстрый найм</h3>
            <p className="text-dark/80 mb-4">Оптимизированный процесс найма для быстрого масштабирования команды.</p>
            <ul className="space-y-2 text-dark/80">
              <li>✓ Быстрый подбор</li>
              <li>✓ Простое оформление</li>
              <li>✓ Персональная поддержка</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}