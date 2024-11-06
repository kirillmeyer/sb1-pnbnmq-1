export interface User {
  id: string
  email: string
  role: 'specialist' | 'company'
  firstName?: string
  lastName?: string
  telegram?: string
  phone?: string
}

export interface AuthResponse {
  token: string
  user: User
  error?: string
}