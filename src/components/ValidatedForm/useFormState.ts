import { useReducer } from 'react'
import { FormActionType, FormProps, FormStateType } from './types'

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE'

const formReducer = (state: any, action: FormActionType) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.values,
      [action.id]: action.value,
    }
    const updatedValidity = {
      ...state.validated,
      [action.id]: action.isValid,
    }
    return {
      values: updatedValues,
      validated: updatedValidity,
      formIsValid: Object.values(updatedValidity).some((isValid) => isValid === false)
    }
  }
  return state
}

const useFormState = (props: FormProps) => {
  const defaultState: FormStateType = {
    values: {},
    validity: {},
    formIsValid: true,
    formIsUpdated: false,
  }

  for (const input of props.inputs) {
    defaultState.values[input.key] = input.default ? input.default : ''
    defaultState.validity[input.key] = true
  }

  const [formState, dispatchFormState]: [any, any] = useReducer<any>(formReducer, defaultState)

  const validateHandler = (id: string, text: string) => {
    let isValid = false
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
