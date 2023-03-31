import React from 'react'
import { Button, Stack } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { setSort } from '../redux/old/productsSlice'
import { ASC, DESC, POPULAR } from '../helpers/sort'

export const Sort = () => {
  const dispatch = useDispatch()

  const activeSort = useSelector(state => state.products.sort)

  const btnsList = [
    {
      name: 'Price to High',
      value: ASC
    },
    {
      name: 'Price to Low',
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
          color={'secondary'}
          size={'small'}
          sx={{textTransform: 'initial'}}
        >
          {item.name}
        </Button>
      ))}
    </Stack>
  )
}