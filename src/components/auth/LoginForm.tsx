import { useState } from 'react'
import { loginUser } from '../../api/auth'
import { AuthFormProps } from '../../types/auth'

export function LoginForm({ onSuccess, onError }: AuthFormProps) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const data = await loginUser(formData.email, formData.password)
      onSuccess(data)
    } catch (err) {
      onError(err instanceof Error ? err.message : 'Ошибка входа')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <input
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="appearance-none rounded-t-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="Email"
        />
      </div>
      <div>
        <input
          name="password"
          type="password"
          required
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          className="appearance-none rounded-b-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="Пароль"
        />
      </div>
      <div>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Войти
        </button>
      </div>
    </form>
  )
}