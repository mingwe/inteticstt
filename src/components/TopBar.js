import React from 'react'
import { Sort } from './Sort'
import { Box, Paper } from '@mui/material';
import { Search } from './filters/Search';

export const TopBar = () => (
  <Box my={0}>
    <Paper>
      <Search/>
      <Sort/>
    </Paper>
  </Box>
)