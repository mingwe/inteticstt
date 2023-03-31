import React from 'react'
import { useSelector } from 'react-redux'
import { Box, Typography } from '@mui/material'

export const TotalCount = () => {
  const count = useSelector(state => state.products.items.length) || 0
  return (
    <Box textAlign={'left'}>
      Total products: <Typography component={'span'} color={'text.secondary'}>{count}</Typography>
    </Box>
  )
}