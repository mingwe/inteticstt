import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import { getColors, toggleFilterColor } from '../../redux/actions/filter'

export const FilterColor = () => {

  const dispatch = useDispatch()
  const colorsList = useSelector(state => state.filter.fetchedColors)
  const selectedColors = useSelector(state => state.filter.colors)

  useEffect(() => {
    dispatch(getColors())
  }, [dispatch])

  const handleChange = (color) => {
    dispatch(toggleFilterColor(color))
  }

  return (
    <FormGroup>
      {colorsList.map((color, index) => (
        <FormControlLabel
          key={index}
          control={
            <Checkbox checked={selectedColors.includes(color)} onChange={() => handleChange(color)} name={color} />
          }
          label={color}
        />
      ))}
    </FormGroup>
  )
}