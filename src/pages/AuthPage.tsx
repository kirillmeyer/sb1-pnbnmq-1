import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { AuthResponse } from '../types/auth'

export function AuthPage() {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [isRegistering, setIsRegistering] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'specialist',
    firstName: '',
    lastName: '',
    telegram: '',
    phone: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch(`http://localhost:5000/api/${isRegistering ? 'register' : 'login'}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data: AuthResponse = await response.json()
      
      if (!response.ok) {
        throw new Error(data.error || 'Ошибка авторизации')
      }

      login(data)
      navigate('/')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Произошла ошибка')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen bg-primary pt-24">
      <div className="container-custom py-12">
        <div className="max-w-md mx-auto form-card">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold mb-2">
              {isRegistering ? 'Регистрация' : 'Вход в аккаунт'}
            </h1>
            <p className="text-dark/60">
              {isRegistering ? (
                <button
                  onClick={() => setIsRegistering(false)}
                  className="text-dark underline"
                >
                  Уже есть аккаунт? Войдите
                </button>
              ) : (
                <button
                  onClick={() => setIsRegistering(true)}
                  className="text-dark underline"
                >
                  Нет аккаунта? Зарегистрируйтесь
                </button>
              )}
            </p>
          </div>

          {error && (
            <div className="bg-red-50 text-red-500 p-4 rounded-lg mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="label-primary">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="input-primary"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="password" className="label-primary">
                Пароль
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="input-primary"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            {isRegistering && (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="label-primary">
                      Имя
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      className="input-primary"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="label-primary">
                      Фамилия
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      className="input-primary"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="telegram" className="label-primary">
                    Telegram
                  </label>
                  <input
                    id="telegram"
                    name="telegram"
                    type="text"
                    required
                    className="input-primary"
                    value={formData.telegram}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="label-primary">
                    Телефон
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="input-primary"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </>
            )}

            <button type="submit" className="btn btn-primary w-full">
              {isRegistering ? 'Зарегистрироваться' : 'Войти'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}