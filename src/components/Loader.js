import React from 'react'
import { CircularProgress, Grid } from '@mui/material'

export const Loader = () => (
  <Grid container alignItems={'center'} textAlign={'center'} sx={{minHeight: 400}}>
    <Grid item xs={12}>
      <CircularProgress />
    </Grid>
  </Grid>
)