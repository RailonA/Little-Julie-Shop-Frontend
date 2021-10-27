import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import userReducer from './userReducers';
import feedbackReducer from './feedbackReducer';

const rootReducer = combineReducers({
  items: itemReducer,
  currentUser: userReducer,
  feedback: feedbackReducer,

});

export default rootReducer;
