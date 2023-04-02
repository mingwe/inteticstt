import React from 'react'
import Navbar from '../components/navbar'
import Head from 'next/head'
import { Container, createTheme, Grid, ThemeProvider, Box } from '@mui/material'
import { blueGrey, grey } from '@mui/material/colors'
import { Provider } from 'react-redux'
import store from '../redux/store/store'
import { LoaderGeneric } from '../components/utils/LoaderGeneric'
import { ErrorGeneric } from '../components/utils/ErrorGeneric'
import { Parallax } from 'react-parallax'
import { PageTitle } from '../components/ui-components/PageTitle'

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
          <Grid container>
            <Grid item xs={12}>
              <Navbar pages={pages}/>
            </Grid>
          </Grid>
          <Parallax bgImage={'/loftbg2.png'} strength={500}>
            <Container>
              <Grid container py={5} my={5} mb={4} pb={4}>
                <Grid item xs={12} pb={2}>
                  <LoaderGeneric />
                  <ErrorGeneric />
                </Grid>
                <Grid item xs={12}>
                  <Box py={2} mt={3} textAlign={'center'}>
                    <PageTitle>
                      {title}
                    </PageTitle>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Parallax>
          <Container>
            <Grid container py={5} mb={5}>
              {children}
            </Grid>
          </Container>
        </Provider>
      </ThemeProvider>
    </>
  )
}