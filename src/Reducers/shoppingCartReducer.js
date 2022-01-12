import {
  GET_SHOPPNGCARTS_REQUEST,
  GET_SHOPPNGCARTS_SUCCESS,
  GET_SHOPPNGCARTS_FAILURE,
} from '../Constants/actions';

const initialState = {
  itemsCollection: [],
};

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SHOPPNGCARTS_REQUEST:
      return { ...state, loading: true };
    case GET_SHOPPNGCARTS_SUCCESS:
      return { ...state, itemsCollection: action.payload, loading: false };
    case GET_SHOPPNGCARTS_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default shoppingCartReducer;
