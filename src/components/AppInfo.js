import React from 'react'
import { Link, Typography } from '@mui/material'

export const AppInfo = () => {
  const description = 'I used `fakestoreapi.com` as backend. All filters and search (with delay) done on frontend (but in real project, i believe, almost all filters will be on backend and only requests will be on front). Sure here can be many optimizations, tests, ts, detailed styling, etc. But i\'ve relized that this is test task, so i did it as a time-effective solution. We can discuss and sure i can improve it'
  return (
    <>
      <Typography
        variant={'h3'}
        textAlign={'left'}
        mb={5}
      >
        About
      </Typography>
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
      >
        github: <Link href={'https://github.com/mingwe/inteticstt'} target={'_blank'}>https://github.com/mingwe/inteticstt</Link>
      </Typography>
    </>
  )
}