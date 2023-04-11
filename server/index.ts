import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import { authManager } from './auth'
import { returnResponse } from './interface'
dotenv.config()

express()
  .use(cors())
  .use(express.json())
  .get('/', (req, res) => res.status(200).send('Success'))
  .post('/signup', async (req, res) =>
    returnResponse(
      req.body,
      (body) => authManager.signUp(body),
      (v) => res.status(200).json(v),
      (e) => res.status(400).json(e)
    )
  )
  .listen(process.env.PORT, () => console.log(`listening on port ${process.env.PORT}`))
