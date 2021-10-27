import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';
import { logoutAction } from '../Actions/user';
import LoginForm from './loginForm';
import SignUpForm from './signUpForm';
import { sendFeedbackAction } from '../Actions/feedback';
import '../Assets/styles/navBar.css';

const UserProfile = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.currentUser);

  const [loginProcess, setLoginProcess] = useState(false);
  const [signUpProcess, setSignUpProcess] = useState(false);

  const openLogin = () => {
    setLoginProcess(true);
  };

  const closeLogin = () => {
    setLoginProcess(false);
  };

  const handleLogout = () => {
    dispatch(logoutAction());
    dispatch(sendFeedbackAction({ type: 'success', feedback: 'You successfully logged out.' }));
  };

  const openSignUp = () => {
    setSignUpProcess(true);
  };

  const closeSignUp = () => {
    setSignUpProcess(false);
  };

  return (
    <div className="UserProfile">
      {loginProcess
        ? (
          <Modal
            show={loginProcess}
            onHide={closeLogin}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Body>
              <LoginForm onCancel={closeLogin} />
            </Modal.Body>
          </Modal>
        )
        : null }
      {signUpProcess
        ? (
          <Modal
            show={signUpProcess}
            onHide={closeSignUp}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Body>
              <SignUpForm onCancel={closeSignUp} />
            </Modal.Body>
          </Modal>
        )
        : null }
      {userData.username
        ? (
          <div>
            <Link to="/user/:id" className="ml-3"><Button className="ml-3 navBarButton">{userData.username}</Button></Link>
            <Button type="button" name="logout" className="ml-3 navBarButton" onClick={handleLogout}>LOGOUT</Button>
          </div>
        )
        : (
          <div className="loginSignUpBtns">
            <Button onClick={openLogin} className="navBarButton mt-2">LOGIN</Button>
            <Button type="button" onClick={openSignUp} className="navBarButton mt-2">SIGN UP</Button>
          </div>
        )}
    </div>
  );
};

export default UserProfile;
