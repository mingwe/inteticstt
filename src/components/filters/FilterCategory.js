import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { applyFilters, getCategories, getColors, toggleCategory } from '../../redux/productsSlice'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'

export const FilterCategory = () => {

  const dispatch = useDispatch()
  const categoriesList = useSelector(state => state.products.categories)
  const filteredCategories = useSelector(state => state.products.filters.categories)

  useEffect(() => {
    dispatch(getColors())
  }, [dispatch])

  const handleChange = (item) => {
    dispatch(toggleCategory(item))
    dispatch(applyFilters())
  }

  return (
    <FormGroup>
      {categoriesList.map((item, index) => (
        <FormControlLabel
          key={index}
          control={
            <Checkbox checked={filteredCategories.includes(item)} onChange={() => handleChange(item)} name={item} />
          }
          label={item}
        />
      ))}
    </FormGroup>
  )
}