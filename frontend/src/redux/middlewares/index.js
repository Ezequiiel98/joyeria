import { ADD_PRODUCT_TO_CART } from '../constantsTypes';

const addUnitMiddleware = store => next => action => {
  if (action.type === ADD_PRODUCT_TO_CART) {
    const state = store.getState();
    const product = state.find(product => product.id === action.payload.id);

    if (product) {
      return next({
        type: 'ADD_UNIT_TO_CART',
        payload: action.payload
      });
    }
    return next(action);
  }

  return next(action);
};

export { addUnitMiddleware };
