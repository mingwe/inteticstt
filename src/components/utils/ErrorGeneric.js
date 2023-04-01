import React from 'react'
import { ErrorAlert } from '../ui-components/ErrorAlert'
import { useSelector } from 'react-redux';

export const ErrorGeneric = () => {
  const { hasError, message } = useSelector(state => state.error)

  return (
    <>
      {hasError && <ErrorAlert errorText={message}/>}
    </>
  )
}