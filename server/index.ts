import AWS from 'aws-sdk'
import cors from 'cors'
import dotenv from 'dotenv'
import express, { NextFunction, Request, Response } from 'express'
import { expressjwt } from 'express-jwt'

dotenv.config()

const COGNITO_ISSURE = `https://cognito-idp.${process.env.AWS_REGION}.amazonaws.com/${process.env.AWS_USER_POOL_ID}`
const COGNITO_ISSURE_URL = `${COGNITO_ISSURE}/.well-known/jwks.json`

// ACCESS AUTH
const cognito = new AWS.CognitoIdentityServiceProvider({
  region: process.env.AWS_REGION,
})

express()
  .use(cors())
  .get('/', (req: Request, res: Response) => res.status(200).send('Success'))
  .use(
    expressjwt({
      secret: COGNITO_ISSURE_URL,
      issuer: COGNITO_ISSURE,
      algorithms: ['RS256'],
    })
  )
  .post('/access', (req, res) => {
    console.log(req)
  })
  .use((err: Error, req: Request, res: Response, _: NextFunction) => {
    if (err.name === 'UnauthorizedError') {
      res.status(401).send('Invalid token')
    }

    res.status(500).send('Something broke!')
  })
  .listen(process.env.PORT, () => {
    console.log(`connect : port on ${process.env.PORT}\ncognitoIssureUrl : ${COGNITO_ISSURE_URL}`)
  })
