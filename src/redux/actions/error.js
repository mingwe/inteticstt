import { SET_ERROR } from './types'

export const setError = (isActive, error) => {
  return {
    type: SET_ERROR,
    payload: {
      isActive: isActive,
      message: error
    }
  }
}