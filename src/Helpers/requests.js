import axios from 'axios';
import {
  loginAction,
  getUserInfoRequest,
  getUserInfoSuccess,
  getUserInfoFailure,
} from '../Actions/user';
import {
  getItemRequest,
  getItemSuccess,
  getItemFailure,
} from '../Actions/items';
import {
  getCategoryRequest,
  getCategorySuccess,
  getCategoryFailure,
} from '../Actions/category';
import {
  getShoppingCartRequest,
  getShoppingCartSuccess,
  getShoppingCartFailure,
} from '../Actions/shoppingCart';

import { sendFeedbackAction } from '../Actions/feedback';
import handleError from './handleError';

const requests = {
  users: 'http://localhost:3000/api/v1/users',
  login: 'http://localhost:3000/api/v1/login',
  items: 'http://localhost:3000/api/v1/items',
  categories: 'http://localhost:3000/api/v1/categories',
  shoppingCarts: 'http://localhost:3000/api/v1/shoppingcarts',
};

export const requestUserInfo = async (dispatch, id, token) => {
  try {
    dispatch(getUserInfoRequest());
    const response = await axios.get(`${requests.users}/${id}`,
      {
        headers: {
          Authorization: token,
        },
      });
    dispatch(getUserInfoSuccess(response.data));
  } catch (error) {
    dispatch(getUserInfoFailure());
    handleError(dispatch, 'userInfo', error);
  }
};

export const requestLogin = async (dispatch, username, password) => {
  try {
    const response = await axios.post(requests.login,
      {
        username,
        password,
      });
    if (response.data.auth_token) {
      dispatch(loginAction(response.data));
      requestUserInfo(dispatch, response.data.id, response.data.auth_token);
      dispatch(sendFeedbackAction({ type: 'success', feedback: 'You successfully logged in.' }));
    }
  } catch (error) {
    handleError(dispatch, 'login', error);
  }
};

export const requestSignup = async (dispatch, username, password, passwordConf) => {
  try {
    await axios.post(requests.users,
      {
        username,
        password,
        password_confirmation: passwordConf,
      });
    sendFeedbackAction({ type: 'success', feedback: 'User successfully created.' });
    requestLogin(dispatch, username, password);
  } catch (error) {
    handleError(dispatch, 'signup', error);
  }
};

const requestItemInfo = async (dispatch) => {
  try {
    dispatch(getItemRequest());
    const response = await axios.get(requests.items);
    dispatch(getItemSuccess(response.data));
  } catch (error) {
    dispatch(getItemFailure);
    handleError(dispatch, 'items', error);
  }
};

export const requestCategoryInfo = async (dispatch) => {
  try {
    dispatch(getCategoryRequest());
    const response = await axios.get(requests.categories);
    dispatch(getCategorySuccess(response.data));
  } catch (error) {
    dispatch(getCategoryFailure);
    handleError(dispatch, 'categories', error);
  }
};

export const requestShoppingCart = async (
  dispatch, userId, itemId, token,
) => {
  try {
    await axios.post(requests.shoppingCarts,
      {
        user_id: userId,
        item_id: itemId,
      },
      {
        headers: {
          Authorization: token,
        },
      });
    dispatch(sendFeedbackAction({ type: 'success', feedback: 'You successfully reserved appointment.' }));
  } catch (error) {
    handleError(dispatch, 'shoppingCarts', error);
  }
};

export const requestAppointmentInfo = async (dispatch) => {
  try {
    dispatch(getShoppingCartRequest());
    const response = await axios.get(requests.shoppingCarts);
    dispatch(getShoppingCartSuccess(response.data));
    // console.log(response.data);
  } catch (error) {
    dispatch(getShoppingCartFailure);
    handleError(dispatch, 'shoppingCarts', error);
  }
};

export default requestItemInfo;
