import { useReducer } from 'react'
import { FormActionType, FormProps, FormStateType, InputType } from './types'

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE'

const formReducer = (state: any, action: FormActionType) => {
  const { error, isValid, key, type, value } = action
  if (type === FORM_INPUT_UPDATE) {
    const updatedValidity = {
      ...state.validated,
      [key]: isValid,
    }
    return {
      values: {
        ...state.values,
        [key]: value,
      },
      errors: {
        ...state.updatedErrors,
        [key]: error || '',
      },
      validity: updatedValidity,
      formIsValid: Object.values(updatedValidity).some((valid) => valid === false)
    }
  }
  return state
}

const useFormState = (props: FormProps) => {
  const { inputs } = props
  const defaultState: FormStateType = {
    values: {},
    validity: {},
    errors: {},
    formIsValid: true,
    formIsUpdated: false,
  }

  for (const input of inputs) {
    defaultState.values[input.key] = input.default ? input.default : ''
    defaultState.validity[input.key] = true
    defaultState.errors[input.key] = ''
  }

  const [formState, dispatchFormState]: [any, any] = useReducer<any>(formReducer, defaultState)

  const validateHandler = (text: string, input: InputType) => {
    let isValid = false
    console.log(input)
    dispatchFormState({
      type: FORM_INPUT_UPDATE,
      value: text,
      key: input.key,
      isValid,
    })
  }

  return [formState, validateHandler]
}

export { useFormState }
