import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchCategories, fetchColors, fetchProducts } from './productsAPI'
import { sortByType } from '../../helpers/sort'
import { STATUS_ERROR, STATUS_IDLE, STATUS_LOADING } from '../../helpers/status'
import Fuse from 'fuse.js'
import { filterWithCategoryAndPrice } from '../../helpers/filters'


const initialState = {
  status: 'idle',
  error: '',
  products: [],
  categories: [],
  filters: {
    categories: [],
    price: {
      min: null,
      max: null,
    },
    search: '',
  },
  productsFiltered: [],
  sort: null,
}

export const getProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await fetchProducts()
    return response.data
  }
)

export const getCategories = createAsyncThunk(
  'products/fetchCategories',
  async () => {
    const response = await fetchCategories()
    return response.data
  }
)

export const getColors = createAsyncThunk(
  'products/fetchColors',
  async () => {
    const response = await fetchColors()
    return response.data
  }
)

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    toggleCategory: (state, action) => {
      const categories = state.filters.categories
      state.filters.categories = categories.includes(action.payload) ? categories.filter(i => i !== action.payload) : [...categories, action.payload]
    },
    setPriceMin: (state, action) => {
      state.filters.price.min = action.payload
    },
    setPriceMax: (state, action) => {
      state.filters.price.max = action.payload
    },
    applyFilters: (state) => {
      const productsFiltered = filterWithCategoryAndPrice(state)
      if (state.filters.search) {
        //search with fuse.js
        const options = {
          includeScore: true,
          keys: ['title', 'description']
        }
        const fuse = new Fuse(productsFiltered, options)
        const result = fuse.search(state.filters.search).map(i => i.item)

        state.productsFiltered = sortByType(state.sort, result)
      } else {
        state.productsFiltered = sortByType(state.sort, productsFiltered)
      }
    },
    setSort: (state, action) => {
      if (action.payload !== state.sort) {
        state.sort = action.payload
        state.products = sortByType(action.payload, state.products)
      }
    },
    setSearchFilter: (state, action) => {
      state.filters.search = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
          state.status = STATUS_LOADING
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = STATUS_IDLE
        state.products = action.payload
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = STATUS_ERROR
        state.error = 'an error occured'
      })
      .addCase(getColors.pending, (state) => {
        state.status = STATUS_LOADING
      })
      .addCase(getColors.fulfilled, (state, action) => {
        state.status = STATUS_IDLE
        state.categories = action.payload
      })
      .addCase(getColors.rejected, (state, action) => {
        state.status = STATUS_ERROR
        state.error = 'an error occured'
      })
  },
});

export const { toggleCategory, setPriceMin, setPriceMax, applyFilters, setSort, setSearchFilter } = productsSlice.actions

export default productsSlice.reducer
