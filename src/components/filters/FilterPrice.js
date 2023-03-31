import React from 'react'
import { useDispatch } from 'react-redux'
import { Grid, TextField } from '@mui/material'
import { applyFilters, setPriceMax, setPriceMin } from '../../redux/old/productsSlice'

export const FilterPrice = () => {

  const dispatch = useDispatch()

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