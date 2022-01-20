import {
  GET_SHOPPINGCARTS_REQUEST,
  GET_SHOPPINGCARTS_SUCCESS,
  GET_SHOPPINGCARTS_FAILURE,
} from '../Constants/actions';

export const getShoppingCartRequest = () => ({
  type: GET_SHOPPINGCARTS_REQUEST,
});

export const getShoppingCartSuccess = (data) => ({
  type: GET_SHOPPINGCARTS_SUCCESS,
  payload: data,
});

export const getShoppingCartFailure = () => ({
  type: GET_SHOPPINGCARTS_FAILURE,
});
