import React from 'react'
import { Box, Typography } from '@mui/material'

export const TotalCount = ({ count = 0 }) => {
  return (
    <Box textAlign={'left'}>
      Total products: <Typography component={'span'} color={'text.secondary'}>{count}</Typography>
    </Box>
  )
}