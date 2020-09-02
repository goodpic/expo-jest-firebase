type FormStateInputType = {
  value: string,
  isValid: boolean,
  error: string,
}

type FormStateType = {
  inputs: {
    [key: string]: FormStateInputType
  }
  formIsValid: boolean,
  formIsUpdated: boolean,
}

export { FormStateType, FormStateInputType }
