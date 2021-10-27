import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';
import { setFeedbackInactiveAction } from '../Actions/feedback';

const Feedback = ({ type, feedback }) => {
  const dispatch = useDispatch();

  const title = type === 'error' ? 'Error' : 'Success';

  const handleClick = () => {
    dispatch(setFeedbackInactiveAction());
  };

  return (
    <div>
      <div>
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{feedback}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button type="button" variant="secondary" onClick={handleClick}>Cancel</Button>
        </Modal.Footer>
      </div>
    </div>
  );
};

Feedback.propTypes = {
  type: PropTypes.string.isRequired,
  feedback: PropTypes.string.isRequired,
};

export default Feedback;
