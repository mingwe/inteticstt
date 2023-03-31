export const setProducts = (products) => {
  return {
    type: 'SET_PRODUCTS',
    payload: products,
  };
};

export const clearProducts = () => {
  return {
    type: 'CLEAR_PRODUCTS',
  };
};
