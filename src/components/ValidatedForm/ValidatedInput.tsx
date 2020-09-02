import * as React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

type InputProps = {
  id: string
  error: string
  label: string
  value: string
  isValid: boolean
  validateHandler: (id: string, text: string) => void
}

const ValidatedInput = (props: InputProps) => {
  const { id, label, value, validateHandler } = props

  return (
    <View key={id} style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        autoCorrect={false}
        autoCapitalize='none'
        onChangeText={(text: string) => validateHandler(id, text)}
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
