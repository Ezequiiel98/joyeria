import { ADD_PRODUCT_TO_CART, DELETE_PRODUCT_TO_CART, ADD_UNIT_TO_CART } from '../constantsTypes';

const addProductToCart = product => ({
  type: ADD_PRODUCT_TO_CART,
  payload: product
});

const deleteProductToCart = product => ({
  type: DELETE_PRODUCT_TO_CART,
  payload: product
});

const addUnitToCart = product => ({
  type: ADD_UNIT_TO_CART,
  payload: product
});

export { addProductToCart, deleteProductToCart, addUnitToCart };
