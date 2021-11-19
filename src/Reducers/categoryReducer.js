import {
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_FAILURE,
} from '../Constants/actions';

const initialState = {
  categoryCollection: [],
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORY_REQUEST:
      return { ...state, loading: true };
    case GET_CATEGORY_SUCCESS:
      return { ...state, categoryCollection: action.payload, loading: false };
    case GET_CATEGORY_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default categoryReducer;
