import { createStore, applyMiddleware } from 'redux';

import { products } from '../reducers';
import { addUnitMiddleware } from '../middlewares';

const PRODUCT_STATE = localStorage.getItem('PRODUCT_STATE');
const initState = JSON.parse(PRODUCT_STATE) || [];

const middleware = applyMiddleware(addUnitMiddleware);
const store = createStore(products, initState, middleware);

export const saveProductState = () => {
  const state = store.getState();

  localStorage.setItem('PRODUCT_STATE', JSON.stringify(state));
};

export default store;
