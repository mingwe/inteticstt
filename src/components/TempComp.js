import React, { useState } from 'react'
import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { getColors, toggleFilterColor } from '../redux/actions/filter';

export const TempComp = () => {
  const dispatch = useDispatch()
  const filters = useSelector(state => state.filter)


  const toggleColor = (color) => {
    return dispatch(toggleFilterColor(color))
  }

  return (
    <div>
      {/*<Button onClick={() => handleClick('qwe')}>set filter</Button>*/}
      <Button onClick={() => toggleColor('red')}>red filter</Button>
      <Button onClick={() => toggleColor('blue')}>blue filter</Button>
      <Button onClick={() => toggleColor('white')}>white filter</Button>
      <Button onClick={() => dispatch(getColors())}>get colors list</Button>
    </div>
  )
}