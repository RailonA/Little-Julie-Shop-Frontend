import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';
import { requestLogin } from '../Helpers/requests';
import '../Assets/styles/navBar.css';

const LoginForm = ({ onCancel }) => {
  const [userCred, setUserCred] = useState({ username: '', password: '' });
  const dispatch = useDispatch();

  let username;
  let password;

  const handleChange = (e) => {
    if (e.target.name === 'username') {
      username = e.target.value;
      setUserCred((state) => ({ ...state, username }));
    }
    if (e.target.name === 'password') {
      password = e.target.value;
      setUserCred((state) => ({ ...state, password }));
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    requestLogin(dispatch, userCred.username, userCred.password);
    e.target.reset();
    onCancel();
  };

  return (
    <form onSubmit={handleLogin}>
      <Modal.Header>
        <Modal.Title>LOG IN</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input name="username" type="text" placeholder="Enter Username" onChange={handleChange} />
        <input name="password" type="password" placeholder="*****" onChange={handleChange} />
      </Modal.Body>
      <Modal.Footer>
        <Button type="submit" className="navBarButton">Log In</Button>
        <Button type="button" className="navBarButton" onClick={onCancel}>Close</Button>
      </Modal.Footer>
    </form>
  );
};

LoginForm.propTypes = {
  onCancel: PropTypes.func.isRequired,
};

export default LoginForm;
