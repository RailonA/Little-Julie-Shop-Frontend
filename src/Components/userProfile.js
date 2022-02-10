import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';
import { logoutAction } from '../Actions/user';
import LoginForm from './loginForm';
import SignUpForm from './signUpForm';
import { sendFeedbackAction } from '../Actions/feedback';
import '../Assets/styles/navBar.css';

const UserProfile = ({ navBarBtnColor }) => {
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
    <div>
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
          <div className="align-items-center flex-column flex-md-row d-flex  mr-3 navBarButtonColumn  ">
            <Link to="/user/:id" className="d-flex justify-content-center m-2 ">
              <Button className={navBarBtnColor}>{userData.username}</Button>
            </Link>
            <Link to="/" className="d-flex justify-content-center m-2 ">
              <Button type="button" name="logout" className={navBarBtnColor} onClick={handleLogout}>LOGOUT</Button>
            </Link>
          </div>
        )
        : (
          <div className="align-items-center flex-column flex-md-row d-flex  mr-3 navBarButtonColumn  ">
            <div className="d-flex justify-content-center m-2 ">
              <Button onClick={openLogin} className={navBarBtnColor}>LOGIN</Button>
            </div>
            <div className=" d-flex justify-content-center m-2 ">
              <Button type="button" onClick={openSignUp} className={navBarBtnColor}>SIGN UP</Button>
            </div>
          </div>
        )}
    </div>
  );
};

UserProfile.propTypes = {
  navBarBtnColor: PropTypes.string.isRequired,
};

export default UserProfile;
