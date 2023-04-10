import React from 'react'
import { SignupHooks } from './hooks'

const Signup = () => {
  const sign = SignupHooks()

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(sign.getPassword(), sign.getUsername(), sign.getEmail())
    sign.authAccess((err: string) => alert(err))
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        {/** User Name */}
        <div>
          <label htmlFor="username">name</label>
          <input value={sign.getUsername()} onChange={(e) => sign.setUsername(e.target.value)} />
        </div>
        {/** Email input */}
        <div>
          <label htmlFor="email">Email</label>
          <input value={sign.getEmail()} onChange={(e) => sign.setEmail(e.target.value)} />
        </div>
        {/** Password input */}
        <div>
          <label htmlFor="password">Password</label>
          <input value={sign.getPassword()} onChange={(e) => sign.setPassword(e.target.value)} />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Signup
