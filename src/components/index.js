import React from 'react'
import { Container, Grid } from '@mui/material'
import { Sidebar } from './Sidebar'
import { Main } from './Main'

export const ShopPage = () => {
  return (
    <Container>
      <Grid container>
        <Grid item sm={3}>
          <Sidebar/>
        </Grid>
        <Grid item sm={9}>
          <Main/>
        </Grid>
      </Grid>
    </Container>
  )
}