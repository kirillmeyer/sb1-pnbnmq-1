import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import Database from 'better-sqlite3'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import fs from 'fs'

dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Ensure data directory exists
const DATA_DIR = join(__dirname, '../../data')
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true })
}

const app = express()
const db = new Database(join(DATA_DIR, 'database.sqlite'))

// Initialize database with error handling
try {
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      role TEXT NOT NULL,
      firstName TEXT,
      lastName TEXT,
      telegram TEXT,
      phone TEXT,
      companyName TEXT,
      position TEXT,
      website TEXT,
      createdAt TEXT NOT NULL,
      updatedAt TEXT NOT NULL
    )
  `)
} catch (error) {
  console.error('Database initialization error:', error)
  process.exit(1)
}

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

// Configure CORS
app.use(cors({
  origin: process.env.VITE_CLIENT_URL || 'http://localhost:5173',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))

// Middleware
app.use(express.json())

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Error:', err)
  res.status(500).json({ error: 'Internal Server Error', details: err.message })
})

// Register endpoint
app.post('/api/register', async (req, res) => {
  try {
    console.log('Registration request:', req.body)
    const { email, password, role, ...userData } = req.body

    // Validate required fields
    if (!email || !password || !role) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    // Check if user exists
    const existingUser = db.prepare('SELECT * FROM users WHERE email = ?').get(email)
    if (existingUser) {
      return res.status(400).json({ error: 'Пользователь с таким email уже существует' })
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)
    const userId = Math.random().toString(36).slice(2)
    const now = new Date().toISOString()

    // Create user
    const stmt = db.prepare(`
      INSERT INTO users (
        id, email, password, role, firstName, lastName, 
        telegram, phone, companyName, position, website,
        createdAt, updatedAt
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `)

    stmt.run(
      userId,
      email,
      hashedPassword,
      role,
      userData.firstName || null,
      userData.lastName || null,
      userData.telegram || null,
      userData.phone || null,
      userData.companyName || null,
      userData.position || null,
      userData.website || null,
      now,
      now
    )

    // Get created user
    const user = db.prepare('SELECT * FROM users WHERE id = ?').get(userId)
    const { password: _, ...userWithoutPassword } = user

    // Generate JWT
    const token = jwt.sign(
      { userId: user.id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: '24h' }
    )

    res.json({ 
      token,
      user: userWithoutPassword
    })
  } catch (error) {
    console.error('Registration error:', error)
    res.status(500).json({ error: 'Ошибка при регистрации', details: error.message })
  }
})

// Login endpoint
app.post('/api/login', async (req, res) => {
  try {
    console.log('Login request:', req.body)
    const { email, password } = req.body

    // Validate required fields
    if (!email || !password) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    // Find user
    const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email)
    if (!user) {
      return res.status(400).json({ error: 'Пользователь не найден' })
    }

    // Check password
    const validPassword = await bcrypt.compare(password, user.password)
    if (!validPassword) {
      return res.status(400).json({ error: 'Неверный пароль' })
    }

    // Generate JWT
    const token = jwt.sign(
      { userId: user.id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: '24h' }
    )

    // Return user data without password
    const { password: _, ...userWithoutPassword } = user

    res.json({ 
      token,
      user: userWithoutPassword
    })
  } catch (error) {
    console.error('Login error:', error)
    res.status(500).json({ error: 'Ошибка при входе', details: error.message })
  }
})

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok' })
})

const PORT = process.env.PORT || 5000

// Start server with error handling
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
  console.log(`CORS enabled for ${process.env.VITE_CLIENT_URL || 'http://localhost:5173'}`)
}).on('error', (error: any) => {
  console.error('Server startup error:', error)
  process.exit(1)
})

// Handle graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received. Closing server and database...')
  server.close(() => {
    db.close()
    process.exit(0)
  })
})