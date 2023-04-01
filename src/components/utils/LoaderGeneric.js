import React from 'react'
import Loader from '../ui-components/Loader'
import { useSelector } from 'react-redux'

export const LoaderGeneric = () => {
  const isLoading = useSelector(state => state?.loader?.isLoading) || false
  // const isLoading = useSelector(state => state.products.items.length) || 0

  return (
    <>
      {isLoading && <Loader />}
    </>
  )
}