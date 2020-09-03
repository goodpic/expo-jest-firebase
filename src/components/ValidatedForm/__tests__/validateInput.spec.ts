import { validateInput } from '../validateInput'

describe('validateInput', () => {
  const stringInput = {
    key: 'id',
    label: 'User ID',
  }

  test('valid string', () => {
    const result = validateInput('validstring', {
      ...stringInput,
      type: 'string',
      validate: 'alphanumeric',
    })
    expect(result.isValid).toEqual(true)
  })

  test('required and filled', () => {
    const result = validateInput('validstring', {
      ...stringInput,
      type: 'string',
      validate: 'alphanumeric',
      required: true,
    })
    expect(result.isValid).toEqual(true)
  })

  test('required but blank', () => {
    const result = validateInput('', {
      ...stringInput,
      type: 'string',
      validate: 'alphanumeric',
      required: true,
    })
    expect(result.isValid).toEqual(false)
  })

  test('boolean', () => {
    const result = validateInput('string', {
      ...stringInput,
      type: 'boolean',
    })
    expect(result.isValid).toEqual(false)
  })

  test('minLength', () => {
    const result = validateInput('aaa', {
      ...stringInput,
      type: 'string',
      minLength: 5
    })
    expect(result.isValid).toEqual(false)
  })

  test('maxLength', () => {
    const result = validateInput('aaaa', {
      ...stringInput,
      type: 'string',
      maxLength: 3
    })
    expect(result.isValid).toEqual(false)
  })

  test('alphabet', () => {
    const result = validateInput('aaaa', {
      ...stringInput,
      type: 'string',
      validate: 'alphabet',
    })
    expect(result.isValid).toEqual(true)
  })

  test('must be alphabet but contains space', () => {
    const result = validateInput(' aaaa', {
      ...stringInput,
      type: 'string',
      validate: 'alphabet',
    })
    expect(result.isValid).toEqual(false)
  })
})
