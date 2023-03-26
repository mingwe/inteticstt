import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Grid, TextField } from '@mui/material'
import { applyFilters, setPriceMax, setPriceMin } from '../../redux/productsSlice'

export const FilterPrice = () => {

  const dispatch = useDispatch()
  const filteredPrice = useSelector(state => state.products.filters.price)

  const handleChange = (e, field) => {
    if (field === 'min') {
      dispatch(setPriceMin(+e.target.value || null))
    } else {
      dispatch(setPriceMax(+e.target.value || null))
    }
    dispatch(applyFilters())
  }


  return (
    <Grid
      component="form"
      sx={{
        // '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      container
      spacing={2}
      my={0}
    >
      <Grid item xs={6}>
        <TextField
          label="Min"
          type="number"
          onChange={(e) => handleChange(e, 'min')}
          size={'small'}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Max"
          type="number"
          onChange={(e) => handleChange(e, 'max')}
          size={'small'}
        />
      </Grid>
    </Grid>
  )
}