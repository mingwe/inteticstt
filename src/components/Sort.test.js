import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import { Sort } from './Sort'
import { ASC, DESC, POPULAR } from '../helpers/sort'

const mockStore = configureMockStore()
const store = mockStore({ sort: { type: ASC } })

describe('Sort component', () => {
  it('should dispatch setSort action when button clicked', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Sort />
      </Provider>
    )

    fireEvent.click(getByText('Price to Low'))

    expect(store.getActions()).toContainEqual({
      type: 'SET_SORT',
      payload: DESC,
    })

    fireEvent.click(getByText('Popular first'))

    expect(store.getActions()).toContainEqual({
      type: 'SET_SORT',
      payload: POPULAR,
    })
  })
})
