export const isExistsProperty = <T>(obj: T, param: string): boolean => {
  if (param in obj) {
    return true
  }

  return false
}
