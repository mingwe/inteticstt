import React from 'react'
import { MainContainer } from '../src/containers/MainContainer'
import { Box, Grid } from '@mui/material'
import { Products } from '../src/components/products'
import { Search } from '../src/components/Search'
import { Sort } from '../src/components/Sort'
import { Filters } from '../src/components/filters'

const Shop = () => {
  return (
    <MainContainer title="John Doe's store" keywords="store">
      <Grid item xs={12} p={2}>
        <Search/>
      </Grid>
      <Grid item xs={12} md={3} p={2} data-testid="filters-container">
        <Filters/>
      </Grid>
      <Grid item xs={12} md={9} p={2} data-testid="main-container">
        <Box mt={2} mb={5}>
          <Sort/>
        </Box>
        <Products/>
      </Grid>
    </MainContainer>
  )
}

export default Shop