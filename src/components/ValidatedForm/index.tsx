import * as React from 'react'
import { View } from 'react-native'
import { ValidatedInput } from './ValidatedInput'
import { FormProps } from './types'
import { useFormState } from './useFormState'

const ValidatedForm = (props: FormProps) => {

  const [formState, validateHandler] = useFormState(props)
  console.log(formState);

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