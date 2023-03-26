import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchCategories, fetchProducts } from './productsAPI'

const initialState = {
  // filters: {
  //   categories: [],
  //   price: {
  //     min: null,
  //     max: null,
  //   },
  //   filteredProducts: []
  // }
};


export const getProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await fetchProducts()
    return response.data
  }
)

export const filtersSlice = createSlice({
  name: 'products',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
  }
});

export const { increment, decrement, incrementByAmount } = filtersSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state) => state.counter.value;

export const selectProducts = (state) => state.products.products;
export const selectFilters = (state) => state.filters;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
export const incrementIfOdd = (amount) => (dispatch, getState) => {
  const currentValue = selectCount(getState());
  if (currentValue % 2 === 1) {
    dispatch(incrementByAmount(amount));
  }
}

export const applyFilters = (amount) => (dispatch, getState, state) => {
  const products = selectProducts(getState())
  const filters = selectFilters(getState())
  const filteredProducts = ['1', '22', '333']
  console.log('prd', products)
  // dispatch(setFilteredProducts(filteredProducts));
}

export default filtersSlice.reducer;
