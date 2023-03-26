import React from 'react'
import { Checkbox, FormControlLabel } from '@mui/material'

export const FilterCheckbox = ({checked, name, onChange}) => {
  return (
    <FormControlLabel
      control={
        <Checkbox checked={checked} onChange={onChange} name={name} />
      }
      label={name}
    />
  )
}