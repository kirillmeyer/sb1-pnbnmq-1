export function SpecialistSection() {
  return (
    <section className="bg-primary py-24">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark mb-4">Для специалистов</h2>
          <p className="text-xl text-dark/80">Развивайте карьеру с ведущими компаниями</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-dark mb-4">Создайте профиль</h3>
            <p className="text-dark/80 mb-4">Продемонстрируйте свои навыки и опыт потенциальным работодателям.</p>
            <ul className="space-y-2 text-dark/80">
              <li>✓ Портфолио</li>
              <li>✓ Ключевые навыки</li>
              <li>✓ Опыт работы</li>
            </ul>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-dark mb-4">Ищите вакансии</h3>
            <p className="text-dark/80 mb-4">Получите доступ к эксклюзивным вакансиям от ведущих компаний.</p>
            <ul className="space-y-2 text-dark/80">
              <li>✓ Отобранные вакансии</li>
              <li>✓ Быстрый отклик</li>
              <li>✓ Уведомления</li>
            </ul>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-dark mb-4">Получите работу</h3>
            <p className="text-dark/80 mb-4">Общайтесь напрямую с компаниями, которые ищут ваши навыки.</p>
            <ul className="space-y-2 text-dark/80">
              <li>✓ Прямое общение</li>
              <li>✓ Планирование интервью</li>
              <li>✓ Управление офферами</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}