import { Try } from 'huelgo-monad'

export interface UserAuthParams {
  email: string
  password: string
  username: string
}

export interface Exception {
  msg: string
  type: string
}

export const returnResponse = async <T, E, K, R extends any>(
  params: T,
  fn: (a: T) => Promise<Try<E, K>>,
  successFn: (value: Try<E, K>) => R,
  failFn: (value: Try<E, K>) => R
) => {
  try {
    const v = await fn(params)
    return successFn(v)
  } catch (e) {
    return failFn(e)
  }
}
