import React from 'react'
import { Link, Typography } from '@mui/material'

export const AppInfo = () => {
  const description = 'It\'s just an React/Redux/Next.js (which is not really necessary here) app with separated components and logic (actions/reducers in separate files) for easier scaling'
  const backendInfo = 'Json-server as backend, deployed on Vercel'
  return (
    <>
      <Typography
        variant={'description'}
        color={'#555'}
        fontStyle={'italic'}
      >
        <Typography variant={'description'} color={'#000'} fontStyle={'italic'}>Hello. </Typography>
        {description}
      </Typography>
      <Typography
        variant={'description'}
        component={'p'}
        mt={1}
        mb={2}
      >
        github: <Link href={'https://github.com/mingwe/inteticstt'} target={'_blank'}>https://github.com/mingwe/inteticstt</Link>
      </Typography>
      <Typography
        variant={'description'}
        color={'#555'}
        fontStyle={'italic'}
        mt={5}
      >
        {backendInfo}
      </Typography>
      <Typography
        variant={'description'}
        component={'p'}
        mt={1}
      >
        github: <Link href={'https://github.com/mingwe/demo-server-forked'} target={'_blank'}>https://github.com/mingwe/demo-server-forked</Link>
      </Typography>
      <Typography
        variant={'description'}
        component={'p'}
        mt={1}
      >
        Vercel: <Link href={'https://demo-server-forked.vercel.app/'} target={'_blank'}>https://demo-server-forked.vercel.app/</Link>
      </Typography>
    </>
  )
}