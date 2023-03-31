import React from 'react'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'

export const FilterColor = ({list, selected, onChange}) => {
  return (
    <FormGroup>
      {list.map((color, index) => (
        <FormControlLabel
          key={index}
          control={
            <Checkbox checked={selected.includes(color)} onChange={() => onChange(color)} name={color} />
          }
          label={_.capitalize(color)}
        />
      ))}
    </FormGroup>
  )
}