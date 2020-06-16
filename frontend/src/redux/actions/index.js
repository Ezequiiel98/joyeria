const addProductToCart = product => ({
  type: 'ADD_PRODUCT_TO_CART',
  payload: product
});

const deleteProductToCart = product => ({
  type: 'DELETE_PRODUCT_TO_CART',
  payload: product
});

export { addProductToCart, deleteProductToCart };
