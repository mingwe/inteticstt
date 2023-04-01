import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { FilterPrice } from './FilterPrice'

describe('FilterPrice', () => {
  test('should call onChange with correct values when input values are changed', () => {
    const mockOnChange = jest.fn();
    const { getByLabelText } = render(<FilterPrice price={{min: null, max: null}} onChange={mockOnChange} />)

    fireEvent.change(getByLabelText('Min'), { target: { value: '10' } })
    expect(mockOnChange).toHaveBeenCalledWith(10, 'min')

    fireEvent.change(getByLabelText('Max'), { target: { value: '100' } })
    expect(mockOnChange).toHaveBeenCalledWith(100, 'max')
  });
});
