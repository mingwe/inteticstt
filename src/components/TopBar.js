import React from 'react'
import { Sort } from './Sort'
import { Box, Typography } from '@mui/material'
import { Search } from './filters/Search'
import { PaperCustom } from './PaperCustom';

export const TopBar = () => (
  <>
    <Box>
      {/*<PaperCustom>*/}
        {/*<Box p={2}>*/}
          <Search/>
        {/*</Box>*/}
      {/*</PaperCustom>*/}
    </Box>
  </>
)