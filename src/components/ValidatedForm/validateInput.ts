import { InputType } from './types'

function validateInput(value: string | number | boolean, input: InputType): {
  isValid: boolean
  error: string
  value: string | number | boolean
} {
  if (input.required && (value === '' || !value)) return {
    isValid: false,
    error: 'Required',
    value,
  }
  return {
    isValid: true,
    error: '',
    value,
  }
}

export { validateInput }
