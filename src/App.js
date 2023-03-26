import React from 'react'
import './App.css'
import { Container, Grid } from '@mui/material'
import { TopBar } from './components/TopBar'
import { Sidebar } from './components/Sidebar'
import { Main } from './components/Main'

function App() {
  return (
    // <div className="App">
      <Container>
        <Grid container py={5}>
          <Grid item sm={12} p={2} sx={{background: '#f0f0f0'}}>
            <TopBar/>
          </Grid>
          <Grid item sm={3} p={2} sx={{background: '#fafafa'}}>
            <Sidebar/>
          </Grid>
          <Grid item sm={9} p={2} sx={{background: '#fafafa'}}>
            <Main/>
          </Grid>
        </Grid>
      </Container>
    // </div>
  )
}

export default App
