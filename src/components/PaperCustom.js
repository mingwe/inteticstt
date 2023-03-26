import React from 'react'
import { Paper } from '@mui/material';

export const PaperCustom = (props) => {
  return (
    <Paper sx={{borderRadius: '15px'}} {...props} />
  )
}