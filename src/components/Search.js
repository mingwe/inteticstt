import React from 'react'
import { useDebouncedCallback } from 'use-debounce'
import { TextField } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchQuery } from '../redux/actions/filter'


export const Search = () => {
  const dispatch = useDispatch()
  const searchString = useSelector(state => state.filter.search)
  const debounced = useDebouncedCallback((value) => {
    dispatch(setSearchQuery(value))
  }, 1000)

  return (
    <TextField
      label="Search"
      defaultValue={searchString}
      size={'small'}
      color={'secondary'}
      fullWidth
      onChange={(e) => debounced(e.target.value || null)}
    />
  )
}