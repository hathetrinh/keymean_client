
export const isEmpty = value => (typeof value === 'undefined' || value === null || value === '')
export const required = (value, _, props, name) => {
  return isEmpty(value) ? `The ${name} field is required` : undefined
}
