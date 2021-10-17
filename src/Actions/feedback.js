import { SEND_FEEDBACK, SET_FEEDBACK_INACTIVE } from '../Constants/actions';

export const sendFeedbackAction = (data) => ({
  type: SEND_FEEDBACK,
  data,
});

export const setFeedbackInactiveAction = () => ({
  type: SET_FEEDBACK_INACTIVE,
});
