import { createStore } from 'redux';

import { product } from '../reducers';

const PRODUCT_STATE = localStorage.getItem('PRODUCT_STATE');
const initState = JSON.parse(PRODUCT_STATE) || [];
const store = createStore(product, initState);

export const saveProductState = () => {
  const state = store.getState();

  localStorage.setItem('PRODUCT_STATE', JSON.stringify(state));
};

export default store;
