import React from 'react'
import { Box, Container, createTheme, Grid, ThemeProvider } from '@mui/material'
import { Sidebar } from './components/Sidebar'
import { Main } from './components/Main'
import { blueGrey, grey } from '@mui/material/colors'
import { Sort } from './components/Sort'
import { Header } from './components/Header'
import { Search } from './components/filters/Search'

function App() {

  const redTheme = createTheme({
    palette: {
      primary: blueGrey,
      secondary: {
        light: grey[100],
        main: grey[900],
        dark: grey[700],
        contrastText: '#fff',
      },
    }
  })

  return (
    <ThemeProvider theme={redTheme}>
      <Container>
        <Grid container py={5}>
          <Grid item xs={12} px={2} pb={2}>
            <Header/>
          </Grid>
          <Grid item xs={12} p={2}>
            <Search/>
          </Grid>
          <Grid item xs={12} md={3} p={2}>
            <Sidebar/>
          </Grid>
          <Grid item xs={12} md={9} p={2}>
            <Box mt={2} mb={5}>
              <Sort/>
            </Box>
            <Main/>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  )
}

export default App