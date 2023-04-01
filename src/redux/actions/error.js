import { SET_ERROR } from './types'

export const setError = (isActive, error) => (
  {
    type: SET_ERROR,
    payload: {
      isActive: isActive,
      message: error
    }
  }
)