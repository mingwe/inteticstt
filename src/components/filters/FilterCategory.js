import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../redux/productsSlice'
import { FilterCheckbox } from './FilterCheckbox';
import { toggleCategory } from '../../redux/filtersSlice';
import { FormGroup } from '@mui/material';

export const FilterCategory = () => {

  const dispatch = useDispatch()
  const categoriesList = useSelector(state => state.products.categories)
  const filteredCategories = useSelector(state => state.filters.filters.categories)

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  console.log('categoriesList', categoriesList)
  console.log('filteredCats', filteredCategories)

  return (
    <FormGroup>
      {categoriesList.map((item, index) => (
        // <p key={index}>{item}</p>
        <FilterCheckbox
          key={index}
          name={item}
          checked={filteredCategories.includes(item)}
          onChange={() => dispatch(toggleCategory(item))}
        />
      ))}
    </FormGroup>
  )
}