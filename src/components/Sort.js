import React from 'react'
import { Button, Stack } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { ASC, DESC, POPULAR } from '../helpers/sort'
import { setSort } from '../redux/actions/sort'

export const Sort = () => {
  const dispatch = useDispatch()

  const activeSort = useSelector(state => state.sort.type)

  const btnsList = [
    {
      name: 'Price to Low',
      value: DESC
    },
    {
      name: 'Price to High',
      value: ASC
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