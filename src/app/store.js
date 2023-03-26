import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import productsReducer from '../redux/productsSlice'
import filtersReducer from '../redux/filtersSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productsReducer,
    filters: filtersReducer
  },
});
