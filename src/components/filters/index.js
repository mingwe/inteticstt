import React, { useEffect } from 'react'
import { FilterColor } from './components/FilterColor'
import { FilterPrice } from './components/FilterPrice'
import { TotalCount } from './components/TotalCount'
import { useDispatch, useSelector } from 'react-redux'
import { getColors, setPriceMax, setPriceMin, toggleFilterColor } from '../../redux/actions/filter'
import { FilterContainer } from './containers/FilterContainer'

export const Filters = () => {

  const dispatch = useDispatch()

  const { fetchedColors: colorsList, colors: selectedColors } = useSelector(state => state.filter)
  const count = useSelector(state => state.products.items.length) || 0

  useEffect(() => {
    dispatch(getColors())
  }, [dispatch])

  const handleChangeColor = (color) => {
    dispatch(toggleFilterColor(color))
  }

  const handleChangePrice = (val, field) => {
    (field === 'min') ? dispatch(setPriceMin(val)) : dispatch(setPriceMax(val))
  }

  return (
    <>
      <FilterContainer title={'Color'}>
        <FilterColor
          list={colorsList}
          selected={selectedColors}
          onChange={(color) => handleChangeColor(color)}
        />
      </FilterContainer>
      <FilterContainer title={'Price'}>
        <FilterPrice
          onChange={(val, field) => handleChangePrice(val, field)}
        />
      </FilterContainer>
      <FilterContainer>
        <TotalCount count={count}/>
      </FilterContainer>
    </>
  )
}