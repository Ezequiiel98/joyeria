const addProductToCart = product => ({
  type: 'ADD_PRODUCT_TO_CART',
  product
});

const deleteProductToCart = product => ({
  type: 'DELETE_PRODUCT_TO_CART',
  product
});

export { addProductToCart, deleteProductToCart };
