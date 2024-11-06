import { useState } from 'react'
import { registerUser } from '../../api/auth'
import { AuthFormProps, FormData } from '../../types/auth'

export function RegisterForm({ onSuccess, onError }: AuthFormProps) {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    role: 'specialist',
    firstName: '',
    lastName: '',
    telegram: '',
    phone: '',
    companyName: '',
    position: '',
    website: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const data = await registerUser(formData)
      onSuccess(data)
    } catch (err) {
      onError(err instanceof Error ? err.message : 'Ошибка регистрации')
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <input
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleInputChange}
          className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Email"
        />
        <input
          name="password"
          type="password"
          required
          value={formData.password}
          onChange={handleInputChange}
          className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Пароль"
        />
        
        <select
          name="role"
          value={formData.role}
          onChange={handleInputChange}
          className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="specialist">Специалист</option>
          <option value="company">Компания</option>
        </select>

        <div className="grid grid-cols-2 gap-4">
          <input
            name="firstName"
            type="text"
            required
            value={formData.firstName}
            onChange={handleInputChange}
            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Имя"
          />
          <input
            name="lastName"
            type="text"
            required
            value={formData.lastName}
            onChange={handleInputChange}
            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Фамилия"
          />
        </div>

        <input
          name="telegram"
          type="text"
          required
          value={formData.telegram}
          onChange={handleInputChange}
          className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Telegram"
        />

        <input
          name="phone"
          type="tel"
          required
          value={formData.phone}
          onChange={handleInputChange}
          className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Телефон"
        />

        {formData.role === 'company' && (
          <>
            <input
              name="companyName"
              type="text"
              required
              value={formData.companyName}
              onChange={handleInputChange}
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Название компании"
            />
            <input
              name="position"
              type="text"
              required
              value={formData.position}
              onChange={handleInputChange}
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Должность"
            />
            <input
              name="website"
              type="url"
              value={formData.website}
              onChange={handleInputChange}
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Вебсайт"
            />
          </>
        )}
      </div>

      <div>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Зарегистрироваться
        </button>
      </div>
    </form>
  )
}