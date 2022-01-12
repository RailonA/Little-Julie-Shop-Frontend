import {
  GET_SHOPPNGCARTS_REQUEST,
  GET_SHOPPNGCARTS_SUCCESS,
  GET_SHOPPNGCARTS_FAILURE,
} from '../Constants/actions';

export const getShoppingCartRequest = () => ({
  type: GET_SHOPPNGCARTS_REQUEST,
});

export const getShoppingCartSuccess = (data) => ({
  type: GET_SHOPPNGCARTS_SUCCESS,
  payload: data,
});

export const getShoppingCartFailure = () => ({
  type: GET_SHOPPNGCARTS_FAILURE,
});
