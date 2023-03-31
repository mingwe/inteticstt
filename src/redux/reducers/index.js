import { combineReducers } from 'redux'
import filterReducer from './filter'
import productsReducer from './products'

// const rootReducer = combineReducers({
//   filter: filterReducer,
//   products: productsReducer
// });


const rootReducer = {
  filter: filterReducer,
  products: productsReducer
}

export default rootReducer