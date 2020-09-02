type InputType = {
  key: string
  label: string
  type: 'string' | 'number' | 'boolean' | 'password'
  default?: string
  validate?: 'alphabet' | 'alphanumeric' | 'boolean' | 'decimal' | 'email' | 'integer' | 'phone' | 'regex'
  maxLength?: number
  minLength?: number
  required?: boolean
  regex?: string
}

export { InputType }
