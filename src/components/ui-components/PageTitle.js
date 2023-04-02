import React from 'react'
import { Typography } from '@mui/material'

export const PageTitle = ({ children }) => {
  return (
    <Typography
      variant={'h3'}
      component={'span'}
      sx={{
        backgroundColor: 'rgba(245, 245, 247, 0.6)',
        borderRadius: '4px',
        fontFamily: 'revert',
        fontWeight: '100',
        letterSpacing: '5px',
        textTransform: 'uppercase',
        '@media (max-width: 780px)': {
          display: 'block'
        }
      }}
      py={1}
      px={5}
    >
      {children}
    </Typography>
  )
}