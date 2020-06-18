import { ADD_PRODUCT_TO_CART, DELETE_PRODUCT_TO_CART, ADD_UNIT_TO_CART } from '../constantsTypes';

const products = (state = [], action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      action.payload.quantity = 1;
      return state.concat(action.payload);

    case DELETE_PRODUCT_TO_CART:
      return state.filter(product => product.uuid !== action.payload.uuid);

    case ADD_UNIT_TO_CART:
      const product = state.find(product => product.id === action.payload.id);
      const newState = state.filter(product => product.id !== action.payload.id);

      product.quantity += 1;
      product.price += product.price / (product.quantity - 1);

      return newState.concat(product);

    default:
      return state;
  }
};

export { products };
