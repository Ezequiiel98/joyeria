import {
  ADD_PRODUCT_TO_CART,
  DELETE_PRODUCT_TO_CART,
  ADD_UNIT_TO_CART,
  REMOVE_UNIT_TO_CART
} from '../constantsTypes';

function addRemoveUnitToCart({ state, payload, option }) {
  const product = state.find(product => product.id === payload.id);
  const newState = state.filter(product => product.id !== payload.id);

  if (option === 'add') {
    product.price += product.price / product.quantity;
    product.quantity += 1;
  } else {
    product.price -= product.price / product.quantity;
    product.quantity -= 1;
  }

  return newState.concat(product);
}

const products = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_PRODUCT_TO_CART:
      return state.concat(payload);

    case DELETE_PRODUCT_TO_CART:
      return state.filter(product => product.id !== payload.id);

    case ADD_UNIT_TO_CART:
      return addRemoveUnitToCart({ state, payload, option: 'add' });

    case REMOVE_UNIT_TO_CART:
      return addRemoveUnitToCart({ state, payload, option: 'remove' });

    default:
      return state;
  }
};

export { products };
