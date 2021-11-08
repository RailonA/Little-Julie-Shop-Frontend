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

import { sendFeedbackAction } from '../Actions/feedback';
import handleError from './handleError';

const requests = {
  users: 'http://localhost:3000/api/v1/users',
  login: 'http://localhost:3000/api/v1/login',
  items: 'http://localhost:3000/api/v1/items',
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

// export const handleUploadImage = async (image) => {
//   // KEYS
//   const URLUploadImg = 'https://res.cloudinary.com/lil-julie-shop/image/fetch/';
//   const uploadPreset = 'ml_default';
//   const apiKey = '543791316864244';
//   const apiSecret = '2ojYpLDZSydczvaAUmiE0f71Mc8';

//   const formData = new FormData();
//   formData.append('file', image.file);
//   formData.append('upload_preset', uploadPreset);
//   formData.append('api_key', apiKey);
//   formData.append('api_secret', apiSecret);

//   const options = {
//     method: 'GET',
//     body: formData,
//   };

//   try {
//     const res = await axios.get(URLUploadImg, options);
//     const restunImage = await res.json();
//     console.log(restunImage);

//     return restunImage;
//   } catch (err) {
//     return err;
//   }
// };

export const fetchImages = async () => {
  const response = await axios.get('https://res.cloudinary.com/lil-julie-shop/image/list/item.json');
  console.log(response);
};

export default requestItemInfo;
