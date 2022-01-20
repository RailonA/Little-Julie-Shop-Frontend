import {
  GET_SHOPPINGCARTS_REQUEST,
  GET_SHOPPINGCARTS_SUCCESS,
  GET_SHOPPINGCARTS_FAILURE,
} from '../Constants/actions';

const initialState = {
  shoppingCartCollection: [],
};

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SHOPPINGCARTS_REQUEST:
      return { ...state, loading: true };
    case GET_SHOPPINGCARTS_SUCCESS:
      return { ...state, shoppingCartCollection: action.payload, loading: false };
    case GET_SHOPPINGCARTS_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default shoppingCartReducer;
