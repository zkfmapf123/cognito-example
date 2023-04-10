import React from 'react'
import { SignupHooks } from './hooks'

const Signup = () => {
  const signhooks = SignupHooks()

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(signhooks.getPassword(), signhooks.getUsername(), signhooks.getEmail())
    signhooks.authAccess((err: string) => alert(err))
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        {/** User Name */}
        <div>
          <label htmlFor="username">name</label>
          <input value={signhooks.getUsername()} onChange={(e) => signhooks.setUsername(e.target.value)} />
        </div>
        {/** Email input */}
        <div>
          <label htmlFor="email">Email</label>
          <input value={signhooks.getEmail()} onChange={(e) => signhooks.setEmail(e.target.value)} />
        </div>
        {/** Password input */}
        <div>
          <label htmlFor="password">Password</label>
          <input value={signhooks.getPassword()} onChange={(e) => signhooks.setPassword(e.target.value)} />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Signup
