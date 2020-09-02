type FormStateType = {
  values: {
    [key: string]: string,
  },
  validity: {
    [key: string]: boolean,
  },
  errors: {
    [key: string]: string,
  },
  formIsValid: boolean,
  formIsUpdated: boolean,
}

export { FormStateType }
