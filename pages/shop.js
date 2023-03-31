import React from 'react'
import { MainContainer } from '../src/components/MainContainer'
import { Box, Grid } from '@mui/material'
import { Sidebar } from '../src/components/Sidebar'
import { Main } from '../src/components/Main'

const Shop = () => {
  return (
    <MainContainer title="Shop page" keywords="shop">
      <Grid item xs={12} p={2}>
        {/*<Search/>*/}
        search
      </Grid>
      <Grid item xs={12} md={3} p={2}>
        <Sidebar/>
      </Grid>
      <Grid item xs={12} md={9} p={2}>
        <Box mt={2} mb={5}>
          {/*<Sort/>*/}
          sort
        </Box>
        <Main/>
        {/*main*/}
      </Grid>
    </MainContainer>
  )
}

export default Shop