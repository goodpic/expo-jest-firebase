import * as React from 'react'
import { useReducer } from 'react'
import { View } from 'react-native'
import { ValidatedInput } from './ValidatedInput'

type InputType = {
  key: string
  label: string
  type: string
  default?: string
  validate?: string
  required?: boolean
  regex?: string
}

type FormActionType = {
  id: string
  isValid: boolean
  type: string
  value: string
}

type FormProps = {
  inputs: InputType[]
}

const ValidatedForm = (props: FormProps) => {

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

  const [formState, dispatchFormState]: [any, any] = useReducer<any>(formReducer, {
    values: {
      id: '',
      password: '',
    },
    validity: {
      id: true,
      password: true
    },
    formIsValid: true,
    formIsUpdated: false,
  })
  console.log(formState);

  const validateHandler = (id: string, text: string) => {
    let isValid = false
    dispatchFormState({
      type: FORM_INPUT_UPDATE,
      value: text,
      id,
      isValid,
    })
  }

  return (
    <View>
      {
        props.inputs.map((input) => (
          <ValidatedInput
            id={input.key}
            key={input.key}
            label={input.label}
            value={formState.values[input.key]}
            validateHandler={validateHandler}
          />
        ))
      }
    </View>
  )
}

export { ValidatedForm }
