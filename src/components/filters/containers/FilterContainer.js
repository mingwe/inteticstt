import React from 'react'
import { Box, Divider, Typography } from '@mui/material'

export const FilterContainer = ({title, children}) => {
  return (
    <Box p={2} mb={2} textAlign={'left'}>
      {title &&
        <>
          <Typography variant={'subtitle'}>{title}</Typography>
          <Divider sx={{marginTop: 1}}/>
        </>
      }
      {children}
    </Box>
  )
}