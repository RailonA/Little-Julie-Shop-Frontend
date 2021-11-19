import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import userReducer from './userReducers';
import feedbackReducer from './feedbackReducer';
import categoryReducer from './categoryReducer';

const rootReducer = combineReducers({
  items: itemReducer,
  currentUser: userReducer,
  feedback: feedbackReducer,
  category: categoryReducer,
});

export default rootReducer;
