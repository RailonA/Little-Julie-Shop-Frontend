import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { requestUserInfo } from '../Helpers/requests';

import '../Assets/styles/userPage.css';

const UserPage = () => {
  const userData = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    requestUserInfo(dispatch, userData.id);
  }, [dispatch]);

  const redirectTo404 = (userData) => {
    if (!userData.id) {
      return <Redirect to="/" />;
    }
    return null;
  };

  const bookedAppointment = () => {
    if (userData.appointments[0]) {
      return (
        userData.appointments.map((appointments) => (
          <div className="col-10" key={appointments.id}>
            <div className="d-flex col-12">
              <p className="mr-3 col-3 font-weight-bold">Service Requested:</p>
              <p>
                {appointments.service.petService}
              </p>
            </div>
            <div className="d-flex col-12">
              <p className="mr-3 col-3 font-weight-bold">Service Description:</p>
              <p className="d-flex">
                {appointments.service.serviceDescription}
              </p>
            </div>
            <div className="d-flex col-12">
              <p className="mr-3 col-3 font-weight-bold">Service Price:</p>
              <p>{appointments.service.servicePrice}</p>
            </div>
            <div className="d-flex col-12">
              <p className="mr-3 col-3 font-weight-bold">Appointments Date:</p>
            </div>
            <hr className=" col-12 tm-4 tb-4 mainHr" />
          </div>
        )));
    }
    return <p className="noReservations">No Appointments made.</p>;
  };

  return (
    <div>
      {redirectTo404(userData)}
      <div className="User">
        <p className="username">
          <strong>Username: </strong>
          <span>{userData.username}</span>
        </p>
        <h4>Your Appointments:</h4>
        { userData.loading
          ? <span className="loading">Loading...</span>
          : bookedAppointment(userData.reservations)}
      </div>
    </div>
  );
};

export default UserPage;
