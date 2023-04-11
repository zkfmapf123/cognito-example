import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import { authManager } from './auth'
dotenv.config()

express()
  .use(cors())
  .use(express.json())
  .get('/', (req, res) => res.status(200).send('Success'))
  .post('/signup', async (req, res) => {
    try {
      const value = await authManager.signUp(req.body)
      return res.status(200).json(value)
    } catch (e) {
      return res.status(400).json(e)
    }
  })
  .post('/login', (req, res) => {})
  .put('/user', (req, res) => {})
  .put('/password', (req, res) => {})
  .post('/verify', (req, res) => {})
  .delete('/logout', (req, res) => {})
  .listen(process.env.PORT, () => console.log(`listening on port ${process.env.PORT}`))
