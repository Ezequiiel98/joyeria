import { ADD_PRODUCT_TO_CART, REMOVE_UNIT_TO_CART } from '../constantsTypes';
import { addUnitToCart, deleteProductToCart } from '../actions';

const addUnitMiddleware = store => next => action => {
  if (action.type === ADD_PRODUCT_TO_CART) {
    const state = store.getState();
    const product = state.find(product => product.id === action.payload.id);

    if (product) {
      return next(addUnitToCart(action.payload));
    }
  }

  return next(action);
};

const removeUnitMiddleware = store => next => action => {
  if (action.type === REMOVE_UNIT_TO_CART) {
    const state = store.getState();
    const product = state.find(product => product.id === action.payload.id);

    if (product.quantity === 1) {
      return next(deleteProductToCart(action.payload));
    }
  }

  return next(action);
};

export { addUnitMiddleware, removeUnitMiddleware };
