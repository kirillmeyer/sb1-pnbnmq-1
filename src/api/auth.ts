import axios from 'axios'
import { FormData, AuthResponse } from '../types/auth'

const API_URL = 'http://localhost:5000/api'

export async function loginUser(email: string, password: string): Promise<AuthResponse> {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password })
    return response.data
  } catch (error) {
    console.error('Login error:', error)
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error || 'Ошибка входа')
    }
    throw new Error('Ошибка сервера')
  }
}

export async function registerUser(formData: FormData): Promise<AuthResponse> {
  try {
    const response = await axios.post(`${API_URL}/register`, formData)
    return response.data
  } catch (error) {
    console.error('Registration error:', error)
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error || 'Ошибка регистрации')
    }
    throw new Error('Ошибка сервера')
  }
}