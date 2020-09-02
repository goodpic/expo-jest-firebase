import * as React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { InputType } from './types'

type InputProps = {
  input: InputType
  error: string
  value: string
  isValid: boolean
  validateHandler: (text: string, input: InputType) => void
}

const ValidatedInput = (props: InputProps) => {
  const { input, value, validateHandler } = props

  return (
    <View key={input.key} style={styles.container}>
      <Text style={styles.label}>{input.label}</Text>
      <TextInput
        autoCorrect={false}
        autoCapitalize='none'
        onChangeText={(text: string) => validateHandler(text, input)}
        style={styles.input}
        value={value}
      />
      {!props.isValid && <Text>{props.error}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
  },
  label: {
    height: 24,
    fontSize: 18,
  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    height: 50,
    width: 200,
  }
})

export { ValidatedInput }
