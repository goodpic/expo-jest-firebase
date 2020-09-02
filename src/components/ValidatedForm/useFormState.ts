import { useReducer } from 'react'
import { FormActionType, FormProps, FormStateType } from './types'

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE'

const formReducer = (state: any, action: FormActionType) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValidity = {
      ...state.validated,
      [action.id]: action.isValid,
    }
    return {
      values: {
        ...state.values,
        [action.id]: action.value,
      },
      errors: {
        ...state.updatedErrors,
        [action.id]: action.error || '',
      },
      validity: updatedValidity,
      formIsValid: Object.values(updatedValidity).some((isValid) => isValid === false)
    }
  }
  return state
}

const useFormState = (props: FormProps) => {
  const defaultState: FormStateType = {
    values: {},
    validity: {},
    errors: {},
    formIsValid: true,
    formIsUpdated: false,
  }

  for (const input of props.inputs) {
    defaultState.values[input.key] = input.default ? input.default : ''
    defaultState.validity[input.key] = true
    defaultState.errors[input.key] = ''
  }

  const [formState, dispatchFormState]: [any, any] = useReducer<any>(formReducer, defaultState)

  const validateHandler = (id: string, text: string) => {
    let isValid = false
    console.log(id)
    console.log(text)
    dispatchFormState({
      type: FORM_INPUT_UPDATE,
      value: text,
      id,
      isValid,
    })
  }

  return [formState, validateHandler]
}

export { useFormState }
