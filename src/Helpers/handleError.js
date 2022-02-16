import { sendFeedbackAction } from '../Actions/feedback';

const handleError = (dispatch, action, error) => {
  const signupProblems = action === 'signup';
  const loginProblems = action === 'login';
  const userInfoProblems = action === 'userInfo';
  const itemProblems = action === 'item';
  const shoppingCartsProblems = action === 'shoppingCarts';

  if (signupProblems && error.response.status === 422) {
    dispatch(sendFeedbackAction({ type: 'error', feedback: error.response.data.error }));
  }

  if (loginProblems) {
    if (error.response.status === 401) {
      dispatch(sendFeedbackAction({ type: 'error', feedback: 'Wrong password.' }));
    }
    if (error.response.status === 500) {
      dispatch(sendFeedbackAction({ type: 'error', feedback: 'No such user.' }));
    }
  }

  if (userInfoProblems && error.response.status === 401) {
    dispatch(sendFeedbackAction({ type: 'error', feedback: error.response.data.error }));
  }

  if (itemProblems && error.response.status === 401) {
    dispatch(sendFeedbackAction({ type: 'error', feedback: error.response.data.error }));
  }

  if (shoppingCartsProblems) {
    if (error.response.status === 401) {
      dispatch(sendFeedbackAction({ type: 'error', feedback: error.response.data.error }));
    }
    if (error.response.status === 422) {
      dispatch(sendFeedbackAction({ type: 'error', feedback: 'Error: 422' }));
    }
  }
};

export default handleError;
