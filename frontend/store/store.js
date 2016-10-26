import { createStore } from 'redux';
import RootReducer from '../reducers/root_reducer';
import { MasterMiddleware } from '../middleware/master_middleware';

export const configureStore = (state = { } ) => (
  createStore(RootReducer, state, MasterMiddleware)
);
