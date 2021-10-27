import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'react-bootstrap';
import requestServiceInfo from './Helpers/requests';
import Routes from './routes';
import Feedback from './Components/feedback';
import { setFeedbackInactiveAction } from './Actions/feedback';

function App() {
  const dispatch = useDispatch();
  const feedbackData = useSelector((state) => state.feedback);

  const closeError = () => {
    dispatch(setFeedbackInactiveAction());
  };

  useEffect(() => {
    requestServiceInfo(dispatch);
  }, [dispatch]);

  useEffect(() => {
    if (feedbackData.active) {
      setTimeout(() => closeError(), 5000);
    }
  }, [feedbackData]);

  return (
    <div>
      { feedbackData.active
        ? (
          <Modal
            show={feedbackData}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Body>
              <Feedback type={feedbackData.type} feedback={feedbackData.feedback} />
            </Modal.Body>
          </Modal>
        )
        : null }
      <Routes />
    </div>
  );
}

export default App;
