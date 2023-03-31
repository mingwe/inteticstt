import React from 'react'
import Navbar from '../navbar'
import Head from 'next/head';
import { Container, createTheme, Grid, ThemeProvider } from '@mui/material'
import { blueGrey, grey } from '@mui/material/colors'
import { Provider } from 'react-redux'
import store from '../../redux/store/store'

const pages = [ // temp list here, sure it needs to be done via props
  {
    name: 'Main',
    url: '/'
  },
  {
    name: 'Shop',
    url: '/shop'
  },
  {
    name: 'About',
    url: '/about'
  }
]
export const MainContainer = ({ children, title, keywords }) => {

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
    <>
      <Head>
        <meta keywords={'Peter, js app shop' + keywords} />
        <title>{title}</title>
      </Head>
      <ThemeProvider theme={redTheme}>
        <Provider store={store}>
          <Container>
            <Grid container>
              <Grid item xs={12} pb={2}>
                <Navbar pages={pages}/>
              </Grid>
              <Grid item xs={12}>
                <Grid container>
                  {children}
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Provider>
      </ThemeProvider>
    </>
  )
}