import {
  GET_ITEMS_REQUEST,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_FAILURE,
} from '../Constants/actions';

export const getItemRequest = () => ({
  type: GET_ITEMS_REQUEST,
});

export const getItemSuccess = (data) => ({
  type: GET_ITEMS_SUCCESS,
  payload: data,
});

export const getItemFailure = () => ({
  type: GET_ITEMS_FAILURE,
});
