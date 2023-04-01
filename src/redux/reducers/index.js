// import { combineReducers } from 'redux'
import filterReducer from './filter'
import productsReducer from './products'
import sortReducer from './sort'
import errorReducer from './error'
import loaderReducer from './loader'

// const rootReducer = combineReducers({
//   filter: filterReducer,
//   products: productsReducer
// });


const rootReducer = {
  filter: filterReducer,
  products: productsReducer,
  sort: sortReducer,
  error: errorReducer,
  loader: loaderReducer
}

export default rootReducer