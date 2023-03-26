import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, TextField } from '@mui/material'
import { setPriceMax, setPriceMin } from '../../redux/filtersSlice'

export const FilterPrice = () => {

  const dispatch = useDispatch()
  const filteredPrice = useSelector(state => state.filters.filters.price)

  console.log('filter prices', filteredPrice)


  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-number"
        label="Min"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(e) => dispatch(setPriceMin(+e.target.value || null))}
      />
      <TextField
        id="outlined-number"
        label="Max"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(e) => dispatch(setPriceMax(+e.target.value || null))}
      />
    </Box>
  )
}