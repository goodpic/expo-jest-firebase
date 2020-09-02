type FormStateType = {
  values: {
    [key: string]: string,
  },
  validity: {
    [key: string]: boolean,
  },
  formIsValid: boolean,
  formIsUpdated: boolean,
}

export { FormStateType }
