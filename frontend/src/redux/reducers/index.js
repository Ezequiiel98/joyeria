const appState = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PRODUCT_TO_CART':
      return state.concat(action.product);
    case 'DELETE_PRODUCT_TO_CART':
      return state.filter(product => product.id !== action.product.id);

    default:
      return state;
  }
};

export { appState };
