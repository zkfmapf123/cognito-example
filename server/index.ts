import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
dotenv.config()

express()
  .use(cors())
  .use(express.json())
  .get('/', (req, res) => res.status(200).send('Success'))
  .post('/signup', async (req, res) => {})
  .post('/login', (req, res) => {})
  .put('/user', (req, res) => {})
  .put('/password', (req, res) => {})
  .post('/verify', (req, res) => {})
  .delete('/logout', (req, res) => {})
  .listen(process.env.PORT, () => console.log(`listening on port ${process.env.PORT}`))
