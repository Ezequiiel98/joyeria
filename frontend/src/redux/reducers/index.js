const product = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PRODUCT_TO_CART':
      return state.concat(action.payload);

    case 'DELETE_PRODUCT_TO_CART':
      return state.filter(payload => payload.uuid !== action.payload.uuid);

    default:
      return state;
  }
};

export { product };
