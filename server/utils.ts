import dotenv from 'dotenv'
dotenv.config()

export const getProcessParams = <T, R>(params: T, reduceFn: (p: T) => R) => reduceFn(params)

export const makeCognitoParmas = (params: { email: string; password: string; username: string }) => {
  return {
    UserPoolId: process.env.AUTH_POOL_ID,
    Username: params.username,
    TemporaryPassword: params.password,
    UserAttributes: [{ Name: 'Email', Value: params.email }],
  }
}
