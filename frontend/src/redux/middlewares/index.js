import { ADD_PRODUCT_TO_CART } from '../constantsTypes';
import { addUnitToCart } from '../actions';

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

export { addUnitMiddleware };
