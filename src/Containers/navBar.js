import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserProfile from '../Components/userProfile';
import '../Assets/styles/navBar.css';

const NavBar = ({ setSelectedChildCategory }) => {
  const handleChildChange = () => {
    setSelectedChildCategory('');
  };

  return (
    <div className=" navBarWrapper d-flex mb-5 p-3 d-flex justify-content-between">
      <div className="col-s-3 ">
        <Link to="/" onClick={handleChildChange}>
          <h2 className="pageTitle m-3 text-center">Little Julie Shop</h2>
        </Link>
      </div>
      <div className="d-flex justify-content-end align-items-center m-4 p-3">
        <UserProfile className="d-flex justify-content-around" />
      </div>
    </div>
  );
};
NavBar.propTypes = {
  setSelectedChildCategory: PropTypes.func.isRequired,
};

export default NavBar;
