import {
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_FAILURE,
} from '../Constants/actions';

export const getCategoryRequest = () => ({
  type: GET_CATEGORY_REQUEST,
});

export const getCategorySuccess = (data) => ({
  type: GET_CATEGORY_SUCCESS,
  payload: data,
});

export const getCategoryFailure = () => ({
  type: GET_CATEGORY_FAILURE,
});
