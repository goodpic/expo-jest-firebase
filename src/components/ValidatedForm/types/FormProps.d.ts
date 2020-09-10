import { InputType } from './InputType'

type FormProps = {
  inputs: InputType[]
  submitButtonTitle: string
  onSubmit: (params: { [id: string]: string }) => void
}

export { FormProps }
