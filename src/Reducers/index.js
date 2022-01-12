import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import userReducer from './userReducers';
import feedbackReducer from './feedbackReducer';
import categoryReducer from './categoryReducer';
import shoppingCartReducer from './shoppingCartReducer';

const rootReducer = combineReducers({
  items: itemReducer,
  currentUser: userReducer,
  feedback: feedbackReducer,
  category: categoryReducer,
  shoppingCart: shoppingCartReducer,
});

export default rootReducer;
