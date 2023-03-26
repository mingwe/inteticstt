import React from 'react'
import { TotalCount } from './filters/TotalCount'
import { Box, Divider, Typography } from '@mui/material'
import { FilterCategory } from './filters/FilterCategory'
import { FilterPrice } from './filters/FilterPrice'
import { PaperCustom } from './PaperCustom'

export const Sidebar = () => (
  <>
    {/*<PaperCustom>*/}
      <Box p={2} mb={2} textAlign={'left'}>
        <Typography variant={'subtitle'}>Category</Typography>
        <Divider sx={{marginTop: 1}}/>
        <FilterCategory/>
      </Box>
    {/*</PaperCustom>*/}
    {/*<PaperCustom>*/}
      <Box p={2} mb={2} textAlign={'left'}>
        <Typography variant={'subtitle'}>Price</Typography>
        <Divider sx={{marginTop: 1}}/>
        <FilterPrice/>
      </Box>
    {/*</PaperCustom>*/}
    {/*<PaperCustom>*/}
      <Box p={2} textAlign={'left'}>
        <TotalCount/>
      </Box>
    {/*</PaperCustom>*/}
  </>
)