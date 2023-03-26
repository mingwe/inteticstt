import React from 'react'
import { Button, Stack } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { setSort } from '../redux/productsSlice'
import { ASC, DESC, POPULAR } from '../helpers/sort'

export const Sort = () => {
  const dispatch = useDispatch()

  const activeSort = useSelector(state => state.products.sort)

  const btnsList = [
    {
      name: 'Low to High',
      value: ASC
    },
    {
      name: 'High to low',
      value: DESC
    },
    {
      name: 'Popular first',
      value: POPULAR
    },
  ]

  return (
    <Stack direction="row" spacing={2}>
      {btnsList.map((item, index) => (
        <Button
          key={index}
          variant={activeSort === item.value ? 'contained' : 'outlined'}
          onClick={() => dispatch(setSort(item.value))}
        >
          {item.name}
        </Button>
      ))}
    </Stack>
  )
}