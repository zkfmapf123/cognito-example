import { CognitoUserAttribute, CognitoUserPool } from 'amazon-cognito-identity-js'
import { useState } from 'react'

export const SignupHooks = () => {
  const [_userName, _setUserName] = useState<string>('')
  const [_email, _setEmail] = useState<string>('')
  const [_password, _setPassword] = useState<string>('')

  const getUsername = () => _userName
  const setUsername = (u: string) => _setUserName(u)

  const getEmail = () => _email
  const setEmail = (e: string): void => _setEmail(e)

  const getPassword = () => _password
  const setPassword = (p: string): void => _setPassword(p)

  const authAccess = (errCb: (err: string) => void) =>
    new CognitoUserPool({
      UserPoolId: process.env.REACT_APP_USER_POOL_ID as string,
      ClientId: process.env.REACT_APP_CLIENT_ID as string,
    }).signUp(
      _userName,
      _password,
      [
        new CognitoUserAttribute({
          Name: 'email',
          Value: _email,
        }),
      ],
      [],
      (err, data) => {
        if (err) {
          console.error('err ', err)
          errCb(err.message)
          return
        }

        console.log('data ', data)
      }
    )

  return {
    // Username
    getUsername,
    setUsername,

    // Email
    getEmail,
    setEmail,

    // Password
    getPassword,
    setPassword,

    // Auth
    authAccess,
  }
}
