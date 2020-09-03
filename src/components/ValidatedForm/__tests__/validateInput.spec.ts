import { validateInput } from '../useFormState'

describe('validateInput', () => {
  test('validates string', () => {
    const result = validateInput('test', {
      "key": "id",
      "label": "User ID",
      "maxLength": 20,
      "required": true,
      "type": "string",
      "validate": "alphanumeric",
    })
    expect(result.isValid).toEqual(true)
  })
})
