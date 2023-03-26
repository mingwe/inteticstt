import React from 'react'
import { Sort } from './Sort'
import { Box, Paper, Typography } from '@mui/material'
import { Search } from './filters/Search'

export const TopBar = () => (
  <>
    <Box mb={2}>
      <Paper>
        <Box p={2}>
          <Search/>
        </Box>
      </Paper>
    </Box>
    <Box>
      <Paper>
        <Box p={2}>
          <Box mb={2}>
            <Typography variant={'subtitle'}>
              Sort by:
            </Typography>
          </Box>
          <Sort/>
        </Box>
      </Paper>
    </Box>
  </>
)