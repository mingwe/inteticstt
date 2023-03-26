import React from 'react';
import { FilterCategory } from './FilterCategory';
import { FilterPrice } from './FilterPrice';
import { Box, Divider, Paper, Typography } from '@mui/material';
import { TotalCount } from './TotalCount';

export const Filters = () => (
  <div>

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
  </div>
)