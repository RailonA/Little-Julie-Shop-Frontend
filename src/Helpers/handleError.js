import { sendFeedbackAction } from '../Actions/feedback';

const handleError = (dispatch, action, error) => {
  const signupProblems = action === 'signup';
  const loginProblems = action === 'login';
  const userInfoProblems = action === 'userInfo';
  const serviceProblems = action === 'service';
  const appointmentsProblems = action === 'appointment';

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

  if (serviceProblems && error.response.status === 401) {
    dispatch(sendFeedbackAction({ type: 'error', feedback: error.response.data.error }));
  }

  if (appointmentsProblems) {
    if (error.response.status === 401) {
      dispatch(sendFeedbackAction({ type: 'error', feedback: error.response.data.error }));
    }
    if (error.response.status === 422) {
      dispatch(sendFeedbackAction({ type: 'error', feedback: 'Appointment already reserved' }));
    }
  }
};

export default handleError;
