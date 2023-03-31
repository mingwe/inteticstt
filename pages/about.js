import React from 'react'
import { MainContainer } from '../src/components/MainContainer'
import { AppInfo } from '../src/components/AppInfo'

const About = () => {
  return (
    <MainContainer title={'About'} keywords={'about, app info'}>
      <AppInfo/>
    </MainContainer>
  )
}

export default About