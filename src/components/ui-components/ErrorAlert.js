import React from 'react'
import { Alert } from '@mui/material'

export const ErrorAlert = ({ errorText }) => {
  return (
    <div>
      <Alert severity="error">
        { errorText || 'an error occured'}
      </Alert>
    </div>
  )
}
