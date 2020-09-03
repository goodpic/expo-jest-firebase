import { validateInput } from '../validateInput'

describe('validateInput', () => {
  const stringInput = {
    key: "id",
    label: "User ID",
  }

  test('valid string', () => {
    const result = validateInput('validstring', {
      ...stringInput,
      type: "string",
      validate: "alphanumeric",
    })
    expect(result.isValid).toEqual(true)
  })

  test('required and filled', () => {
    const result = validateInput('validstring', {
      ...stringInput,
      type: "string",
      validate: "alphanumeric",
      required: true,
    })
    expect(result.isValid).toEqual(true)
  })

  test('required but blank', () => {
    const result = validateInput('', {
      ...stringInput,
      type: "string",
      validate: "alphanumeric",
      required: true,
    })
    expect(result.isValid).toEqual(false)
  })
})
