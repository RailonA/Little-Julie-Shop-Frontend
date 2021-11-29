import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';
// import { AiOutlineMenu } from '@react-icons/all-files/ai/AiOutlineMenu';
import { logoutAction } from '../Actions/user';
import LoginForm from './loginForm';
import SignUpForm from './signUpForm';
import MenuButton from './menuButton';
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
          <div className="align-items-center flex-column d-flex justify-content-center mr-3 navBarButtonColumn">
            <Link to="/user/:id" className="d-flex justify-content-center "><Button className=" ">{userData.username}</Button></Link>
            <Button type="button" name="logout" className="d-flex justify-content-center" onClick={handleLogout}>LOGOUT</Button>
          </div>
        )
        : (
          <div className="align-items-center flex-column flex-md-row d-flex  mr-3 navBarButtonColumn  ">
            <Button onClick={openLogin} className="navBarBtnColor d-flex justify-content-center m-2 bm-burger-1">LOGIN</Button>
            <Button type="button" onClick={openSignUp} className=" navBarBtnColor d-flex justify-content-center m-2 bm-burger-2">SIGN UP</Button>
            <h3 className="navBarMenuColor d-flex justify-content-center d-md-none"><MenuButton /></h3>
          </div>
        )}
    </div>
  );
};

export default UserProfile;
