import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import { Sort } from './Sort'
import { ASC, DESC, POPULAR } from '../helpers/sort'

const mockStore = configureMockStore()
const store = mockStore({ sort: { type: ASC } })

describe('Sort component', () => {
  it('should dispatch setSort action when button clicked', () => {
    render(
      <Provider store={store}>
        <Sort />
      </Provider>
    )

    fireEvent.click(screen.getByText('Price to Low'))

    expect(store.getActions()).toContainEqual({
      type: 'SET_SORT',
      payload: DESC,
    })

    fireEvent.click(screen.getByText('Popular first'))

    expect(store.getActions()).toContainEqual({
      type: 'SET_SORT',
      payload: POPULAR,
    })
  })
})
