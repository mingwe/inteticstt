import React from 'react'
import { useDispatch } from 'react-redux'
import { Grid, TextField } from '@mui/material'

export const FilterPrice = ({ price, onChange }) => {
  const handleChange = (e, field) => {
    const val = +e.target.value || null
    onChange(val, field)
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