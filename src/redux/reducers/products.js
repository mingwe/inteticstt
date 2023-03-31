const initialState = {
  items: null,
}

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
        items: action.payload,
      }
    case 'CLEAR_PRODUCTS':
      return {
        ...state,
        items: null,
      }
    default:
      return state
  }
}

export default productsReducer