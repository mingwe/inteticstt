import React from 'react'
import { render, screen, within } from '@testing-library/react'
import '@testing-library/jest-dom'
import { TotalCount } from './TotalCount'

describe('TotalCount', () => {
  it('should render the total number of products', () => {
    const count = 42
    render(<TotalCount count={count} />)
    const totalCountBox = screen.queryByText(/Total products:/)
    const totalCountVal = within(totalCountBox).getByText(count.toString())
    expect(totalCountVal).toBeInTheDocument()
  });
  it('renders the default count when no prop is provided', () => {
    const expectedDefaultValue = 0
    render(<TotalCount />)
    const totalCountBox = screen.queryByText(/Total products:/)
    const totalCountVal = within(totalCountBox).getByText(expectedDefaultValue.toString())
    expect(totalCountVal).toBeInTheDocument()
  });
});
