import React from 'react'
import { screen, render } from '@testing-library/react'
import { Product } from './Product'
import '@testing-library/jest-dom/extend-expect'

describe('Product component', () => {
  const testData = {
    title: 'Test Product',
    image: 'test-image-url.jpg',
    color: 'red',
    price: 13.37,
    rating: 4,
  }

  it('should render product data correct', () => {
    render(
      <Product data={testData} />
    )
    const titleElem = screen.getByTestId('title')
    const colorElem = screen.getByTestId('color')
    const priceElem = screen.getByTestId('price')
    expect(colorElem).toHaveTextContent(testData.color)
    expect(priceElem).toHaveTextContent(testData.price)
    expect(titleElem).toHaveTextContent(testData.title)
  });

  it('should render product image', () => {
    render(<Product data={testData} />)
    expect(screen.getByAltText(testData.title)).toBeInTheDocument()
  })
})
