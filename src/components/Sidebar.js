import React from 'react'
import { FilterCategory } from './filters/FilterCategory';
import { FilterPrice } from './filters/FilterPrice';

export const Sidebar = () => {
  return (
    <div>
      Sidebar
      <FilterCategory/>
      <FilterPrice/>
    </div>
  )
}