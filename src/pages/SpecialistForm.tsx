import { useState } from 'react'

export function SpecialistForm() {
  const [formData, setFormData] = useState({
    name: '',
    telegram: '',
    city: '',
    portfolio: '',
    cv: '',
    salary: '',
    expectations: '',
    currentWork: '',
    skills: '',
    additional: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen bg-primary pt-24">
      <div className="container-custom py-12">
        <div className="text-center mb-12">
          <h1 className="section-title">Заполнить анкету</h1>
          <p className="section-subtitle">Расскажите о себе и найдите работу мечты</p>
        </div>
        
        <div className="max-w-2xl mx-auto form-card">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="label-primary">
                Привет! Как тебя зовут? *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="input-primary"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="telegram" className="label-primary">
                Какой у тебя тг? *
              </label>
              <input
                type="text"
                id="telegram"
                name="telegram"
                required
                className="input-primary"
                value={formData.telegram}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="city" className="label-primary">
                А в каком ты городе? *
              </label>
              <input
                type="text"
                id="city"
                name="city"
                required
                className="input-primary"
                value={formData.city}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="portfolio" className="label-primary">
                Ссылочка на портфолио *
              </label>
              <input
                type="url"
                id="portfolio"
                name="portfolio"
                required
                className="input-primary"
                value={formData.portfolio}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="cv" className="label-primary">
                И еще на CV
              </label>
              <input
                type="url"
                id="cv"
                name="cv"
                className="input-primary"
                value={formData.cv}
                onChange={handleChange}
              />
              <p className="text-sm text-dark/60 mt-1">Если эти две буквы непонятны — забей )</p>
            </div>

            <div>
              <label htmlFor="salary" className="label-primary">
                Сколько денежек хочешь? *
              </label>
              <input
                type="text"
                id="salary"
                name="salary"
                required
                className="input-primary"
                value={formData.salary}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="expectations" className="label-primary">
                Что ты ищешь в новой работе и коллективе? *
              </label>
              <textarea
                id="expectations"
                name="expectations"
                required
                rows={4}
                className="input-primary"
                value={formData.expectations}
                onChange={handleChange}
              />
              <p className="text-sm text-dark/60 mt-1">
                Деньги? Славу? Любовь? )))) Ладно, шутим. Но ты лучше расскажи как есть ) 
                Мы так точнее подберем для тебя компанию
              </p>
            </div>

            <div>
              <label htmlFor="currentWork" className="label-primary">
                Работаешь ли сейчас где-то? *
              </label>
              <input
                type="text"
                id="currentWork"
                name="currentWork"
                required
                className="input-primary"
                value={formData.currentWork}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="skills" className="label-primary">
                Какие спецскиллы у тебя есть?
              </label>
              <textarea
                id="skills"
                name="skills"
                rows={3}
                className="input-primary"
                value={formData.skills}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="additional" className="label-primary">
                Если есть что еще добавить, то пиши сюда
              </label>
              <textarea
                id="additional"
                name="additional"
                rows={3}
                className="input-primary"
                value={formData.additional}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="w-full btn btn-primary"
            >
              Отправить
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}