import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { FilterColor } from './FilterColor'

describe('FilterColor component', () => {
  const colors = ['red', 'green', 'blue']
  const selected = ['red', 'blue']
  const onChange = jest.fn()

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('toggles selected color', () => {
    render(
      <FilterColor list={colors} selected={selected} onChange={onChange} />
    );

    const greenCheckbox = screen.getByLabelText('green')
    fireEvent.click(greenCheckbox)

    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenCalledWith('green')
  });
});
