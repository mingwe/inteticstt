import React from 'react'
import { useDebouncedCallback } from 'use-debounce'
import { TextField } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { applyFilters, setSearchFilter } from '../../redux/productsSlice'


export const Search = () => {
  const dispatch = useDispatch()
  const searchString = useSelector(state => state.products.filters.search)
  const debounced = useDebouncedCallback((value) => {
    dispatch(setSearchFilter(value))
    dispatch(applyFilters())
  }, 1000)

  return (
    <TextField
      label="Smart search"
      defaultValue={searchString}
      size={'small'}
      onChange={(e) => debounced(e.target.value)}
    />
  );
}