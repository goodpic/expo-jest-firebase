import { useReducer } from 'react'
import { FormActionType, FormProps, FormStateType, InputType } from './types'
import { validateInput } from './validateInput'

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE'

function formReducer (state: any, action: FormActionType) {
  const { error, isValid, key, type, value } = action
  if (type === FORM_INPUT_UPDATE) {
    const updated: FormStateType = {
      inputs: {
        ...state.inputs,
        [key]: {
          value,
          isValid,
          error: error || '',
        }
      },
      formIsUpdated: true,
      formIsValid: true,
    }
    return {
      ...updated,
      formIsValid: Object.values(updated.inputs).every((input) => input.isValid)
    }
  }
  return state
}

function defaultState(inputs: InputType[]): FormStateType {
  return {
    inputs: inputs.reduce((acc, input) => {
      return {
        ...acc,
        [input.key]: {
          value: input.default ? input.default : '',
          isValid: true,
          error: ''
        }
      }
    }, {}),
    formIsValid: true,
    formIsUpdated: false,
  }
}

const useFormState = (props: FormProps) => {
  const [formState, dispatchFormState]: [any, any]
    = useReducer<any>(formReducer, defaultState(props.inputs))

  const validateHandler = (text: string, input: InputType) => {
    const { isValid } = validateInput(text, input)
    dispatchFormState({
      type: FORM_INPUT_UPDATE,
      value: text,
      key: input.key,
      error: '',
      isValid,
    })
  }

  return [formState, validateHandler]
}

export { useFormState }
