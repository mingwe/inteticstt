import React from 'react'
import Navbar from '../components/navbar'
import Head from 'next/head';
import { Container, createTheme, Grid, ThemeProvider, Typography } from '@mui/material'
import { blueGrey, grey } from '@mui/material/colors'
import { Provider } from 'react-redux'
import store from '../redux/store/store'
import { LoaderGeneric } from '../components/utils/LoaderGeneric'
import { ErrorGeneric } from '../components/utils/ErrorGeneric'

const pages = [ // temp list here, sure it needs to be done via props to keep container 'clear'
  {
    name: 'Main',
    url: '/'
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
                <LoaderGeneric />
                <ErrorGeneric />
                <Navbar pages={pages}/>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant={'h3'}
                  textAlign={'center'}
                  mt={2}
                >
                  {title}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Grid container pt={5}>
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