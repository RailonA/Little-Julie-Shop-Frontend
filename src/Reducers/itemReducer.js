import {
  GET_ITEMS_REQUEST,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_FAILURE,
} from '../Constants/actions';

const initialState = {
  itemsCollection: [],
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS_REQUEST:
      return { ...state, loading: true };
    case GET_ITEMS_SUCCESS:
      return { ...state, itemsCollection: action.payload, loading: false };
    case GET_ITEMS_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default itemReducer;
