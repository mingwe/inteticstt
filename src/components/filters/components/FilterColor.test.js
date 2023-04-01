import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { FilterColor } from './FilterColor'

describe('FilterColor component', () => {
  const colors = ['red', 'green', 'blue']
  const selected = ['red', 'blue']
  const onChange = jest.fn()

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('toggles selected color', () => {
    const { getByLabelText } = render(
      <FilterColor list={colors} selected={selected} onChange={onChange} />
    );

    const greenCheckbox = getByLabelText('green')
    fireEvent.click(greenCheckbox)

    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenCalledWith('green')
  });
});
