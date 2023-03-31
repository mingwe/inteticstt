import { createStore, applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '../reducers'

const initialState = {
  filter: null,
  products: null
}

const middleware = []

const store = configureStore(
  {
    reducer: rootReducer,
    // preloadedState: initialState
  },
  // initialState,
  // applyMiddleware(...middleware)
)

export default store