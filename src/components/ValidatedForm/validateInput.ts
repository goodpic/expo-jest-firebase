import { InputType } from './types'

function validateInput(value: string | number | boolean, input: InputType): {
  isValid: boolean
  error: string
  value: string | number | boolean
} {
  if (input.required && (value === '' || !value)) return {
    isValid: false,
    error: 'required',
    value,
  }
  if (input.type === 'boolean' && typeof value !== 'boolean') return {
    isValid: false,
    error: 'boolean',
    value,
  }
  let parsed = value
  if (input.type === 'string' && typeof value !== 'string') parsed = `${value}`
  if (input.type === 'number' && typeof value === 'string') parsed = parseInt(value)
  if (typeof parsed === 'string'){
    if (input.minLength && parsed.length < input.minLength) return {
      isValid: false,
      error: `more than ${input.minLength} characters`,
      value
    }
    if (input.maxLength && parsed.length > input.maxLength) return {
      isValid: false,
      error: `less than ${input.minLength} characters`,
      value
    }
    if (input.validate) {
      if (input.validate === 'alphabet' && parsed.match(/[^a-bA-B]+/)) return {
        isValid: false,
        error: `alphabet`,
        value
      }
    }
  }

  return {
    isValid: true,
    error: '',
    value: parsed,
  }
}

export { validateInput }
