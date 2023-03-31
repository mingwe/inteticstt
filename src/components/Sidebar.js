import React from 'react'
import { TotalCount } from './filters/TotalCount'
import { Box, Divider, Typography } from '@mui/material'
import { FilterCategory } from './filters/FilterCategory'
import { FilterPrice } from './filters/FilterPrice'

export const Sidebar = () => (
  <>
    <Box p={2} mb={2} textAlign={'left'}>
      <Typography variant={'subtitle'}>Category</Typography>
      <Divider sx={{marginTop: 1}}/>
      {/*<FilterCategory/>*/}
    </Box>
    <Box p={2} mb={2} textAlign={'left'}>
      <Typography variant={'subtitle'}>Price</Typography>
      <Divider sx={{marginTop: 1}}/>
      {/*<FilterPrice/>*/}
    </Box>
    <Box p={2} textAlign={'left'}>
      <TotalCount/>
    </Box>
  </>
)