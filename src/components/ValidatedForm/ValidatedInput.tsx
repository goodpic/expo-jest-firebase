import * as React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { FormStateInputType, InputType } from './types'

type InputProps = {
  input: InputType
  state: FormStateInputType
  validateHandler: (text: string, input: InputType) => void
}

const ValidatedInput = (props: InputProps) => {
  const { input, state, validateHandler } = props

  return (
    <View key={input.key} style={styles.container}>
      <Text style={styles.label}>{input.label}</Text>
      <TextInput
        autoCorrect={false}
        autoCapitalize='none'
        onChangeText={(text: string) => validateHandler(text, input)}
        style={styles.input}
        value={state.value}
      />
      {!state.isValid && <Text style={styles.error}>{state.error}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
  },
  label: {
    height: 20,
    fontSize: 16,
  },
  error: {
    height: 20,
    fontSize: 14,
    color: 'red',
  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    height: 40,
    width: 200,
  }
})

export { ValidatedInput }
