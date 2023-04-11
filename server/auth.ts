import { CognitoUserAttribute, CognitoUserPool } from 'amazon-cognito-identity-js'
import dotenv from 'dotenv'
import { failed, passed, Try } from 'huelgo-monad'
import { Exception, UserAuthParams } from './interface'
dotenv.config()

class AuthManager {
  private userPool = new CognitoUserPool({
    UserPoolId: process.env.AUTH_POOL_ID,
    ClientId: process.env.AUTH_CLIENT_ID,
  })

  setUserPool(userPool: CognitoUserPool) {
    this.userPool = userPool
  }

  private createAttribueList(name: string, value: string) {
    return new CognitoUserAttribute({
      Name: name,
      Value: value,
    })
  }

  async signUp({ email, password, username }: UserAuthParams): Promise<Try<Exception, boolean>> {
    return new Promise((res, rej) => {
      this.userPool.signUp(username, password, [this.createAttribueList('email', email)], null, (err, _) => {
        if (err) rej(failed({ msg: err.message, type: 'Invalid Auth Params' }))
        res(passed(true))
      })
    }).catch((err) => {
      throw err
    }) as unknown as Try<Exception, boolean>
  }
}

export const authManager = new AuthManager()
