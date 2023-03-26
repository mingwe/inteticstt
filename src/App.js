import React from 'react'
import './App.css'
import { Container, Grid, Typography } from '@mui/material'
import { TopBar } from './components/TopBar'
import { Sidebar } from './components/Sidebar'
import { Main } from './components/Main'

const description = 'Used `fakestoreapi.com` as backend. All filters and search (with delay) done on frontend (but in real project, i believe, almost all filters will be on backend and only requests will be on front). Sure here can be many optimizations, tests, ts, detailed styling, etc. But i\'ve relized that this is test task, so i did it as a time-effective solution. We can discuss and sure i can improve it'
function App() {
  return (
    <Container>
      <Grid container py={5} sx={{background: '#fafafa'}}>
        <Grid item xs={12} px={2} pb={2}>
          <Typography variant={'h2'} textAlign={'center'} mb={3}>Shopping cart</Typography>
          <Typography variant={'description'} p={2} color={'#555'} fontStyle={'italic'}>{description}</Typography>
        </Grid>
        <Grid item xs={12} p={2}>
          <TopBar/>
        </Grid>
        <Grid item xs={12} md={3} p={2}>
          <Sidebar/>
        </Grid>
        <Grid item xs={12} md={9} p={2}>
          <Main/>
        </Grid>
      </Grid>
    </Container>
  )
}

export default App
