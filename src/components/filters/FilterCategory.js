import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { applyFilters, getCategories, toggleCategory } from '../../redux/productsSlice'
import { FilterCheckbox } from './FilterCheckbox'
import { FormGroup } from '@mui/material'

export const FilterCategory = () => {

  const dispatch = useDispatch()
  const categoriesList = useSelector(state => state.products.categories)
  const filteredCategories = useSelector(state => state.products.filters.categories)

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  const handleChange = (item) => {
    dispatch(toggleCategory(item))
    dispatch(applyFilters())
  }

  return (
    <FormGroup>
      {categoriesList.map((item, index) => (
        <FilterCheckbox
          key={index}
          name={item}
          checked={filteredCategories.includes(item)}
          onChange={() => handleChange(item)}
        />
      ))}
    </FormGroup>
  )
}