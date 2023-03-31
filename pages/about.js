import React from 'react'
import { MainContainer } from '../src/components/containers/MainContainer'
import { AppInfo } from '../src/components/misc/AppInfo'
import { Grid } from '@mui/material'

const About = () => {
  return (
    <MainContainer title={'About'} keywords={'about, app info'}>
      <Grid item xs={12}>
        <AppInfo/>
      </Grid>
    </MainContainer>
  )
}

export default About