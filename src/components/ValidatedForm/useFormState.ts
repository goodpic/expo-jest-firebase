import { useReducer } from 'react'
import { FormActionType, FormProps, FormStateType, InputType } from './types'

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

// function defaultState(acc = {}, ) {

// }

const useFormState = (props: FormProps) => {
  const { inputs } = props
  const defaultState: FormStateType = {
    inputs: {},
    formIsValid: true,
    formIsUpdated: false,
  }

  defaultState.inputs = inputs.reduce((acc, input) => {
    return {
      ...acc,
      [input.key]: {
        value: input.default ? input.default : '',
        isValid: true,
        error: ''
      }
    }
  }, {})

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
