import React from 'react'
import { Paper } from '@mui/material'

export const PaperContainer = ({children}) => (
  <Paper sx={{ borderRadius: '12px' }}>
    {children}
  </Paper>
)