export function validFetch(errors) {
  const errorType = Object.keys(errors)

  if (errors[errorType[0]]) {
    alert(errors[errorType[0]])
    return false
  }

  return true
}
