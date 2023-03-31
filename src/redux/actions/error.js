export const setError = (isActive, error) => { // can be used to unset error if its fixed and apply custom messages in future
  return {
    type: 'SET_ERROR',
    payload: {
      isActive: isActive,
      message: error
      // message: 'an error occured'
    }
  }
}