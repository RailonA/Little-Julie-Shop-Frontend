import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';
import { requestSignup } from '../Helpers/requests';
import '../Assets/styles/navBar.css';

const SignUpForm = ({ onCancel }) => {
  const [userCred, setUserCred] = useState({ username: '', password: '', passwordConfirmation: '' });
  const dispatch = useDispatch();

  let username;
  let password;
  let passwordConfirmation;

  const handleChange = (e) => {
    if (e.target.name === 'username') {
      username = e.target.value;
      setUserCred((state) => ({ ...state, username }));
    }
    if (e.target.name === 'password') {
      password = e.target.value;
      setUserCred((state) => ({ ...state, password }));
    }
    if (e.target.name === 'password_confirmation') {
      passwordConfirmation = e.target.value;
      setUserCred((state) => ({ ...state, passwordConfirmation }));
    }
  };

  const handleSignUp = (e) => {
    requestSignup(dispatch, userCred.username, userCred.password, userCred.passwordConfirmation);
    e.preventDefault();
    e.target.reset();
    onCancel();
  };

  return (
    <form onSubmit={handleSignUp}>
      <Modal.Header>
        <Modal.Title>Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="flex-column">
          <input className="d-flex col-10" name="username" type="text" placeholder="Enter Username" onChange={handleChange} />
          <input className="d-flex col-10" name="password" type="password" placeholder="Enter Password" onChange={handleChange} />
          <input className="d-flex col-10" name="password_confirmation" type="password" placeholder="Confirm Password" onChange={handleChange} />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button type="submit" className="navBarButton">SIGN UP</Button>
        <Button type="button" variant="secondary" onClick={onCancel}>Cancel</Button>
      </Modal.Footer>
    </form>
  );
};

SignUpForm.propTypes = {
  onCancel: PropTypes.func.isRequired,
};

export default SignUpForm;
