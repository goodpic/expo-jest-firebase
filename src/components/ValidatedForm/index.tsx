import * as React from 'react'
import { Button, KeyboardAvoidingView, View } from 'react-native'
import { ValidatedInput } from './ValidatedInput'
import { FormProps } from './types'
import { useFormState } from './useFormState'

const ValidatedForm = (props: FormProps) => {

  const [formState, validateHandler] = useFormState(props)

  return (
    <View>
      <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={50}>
      {
        props.inputs.map((input) => (
          <ValidatedInput
            input={input}
            state={formState.inputs[input.key]}
            key={input.key}
            validateHandler={validateHandler}
          />
        ))
      }
      </KeyboardAvoidingView>
      <Button
          title={props.submitButtonTitle}
          onPress={() => props.onSubmit({})}
        />
    </View>
  )
}

export { ValidatedForm }
