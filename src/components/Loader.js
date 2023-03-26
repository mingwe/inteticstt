import React from 'react'
import { CircularProgress, Grid } from '@mui/material';

export const Loader = () => (
  <Grid item xs={12}>
    <Grid container alignItems={'center'} sx={{minHeight: 400}}>
      <Grid item xs={12}>
        <CircularProgress />
      </Grid>
    </Grid>
  </Grid>
)