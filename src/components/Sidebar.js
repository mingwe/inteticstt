import React from 'react'
import { TotalCount } from './filters/TotalCount';
import { Box, Divider, Paper, Typography } from '@mui/material';
import { FilterCategory } from './filters/FilterCategory';
import { FilterPrice } from './filters/FilterPrice';

export const Sidebar = () => (
  <>
    <Paper>
      <Box p={2} mb={2} textAlign={'left'}>
        <Typography variant={'subtitle'}>Category</Typography>
        <Divider sx={{marginTop: 1}}/>
        <FilterCategory/>
      </Box>
    </Paper>
    <Paper>
      <Box p={2} mb={2} textAlign={'left'}>
        <Typography variant={'subtitle'}>Price</Typography>
        <Divider sx={{marginTop: 1}}/>
        <FilterPrice/>
      </Box>
    </Paper>
    <Paper>
      <Box p={2} textAlign={'left'}>
        <TotalCount/>
      </Box>
    </Paper>
  </>
)