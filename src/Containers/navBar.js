import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { slide as Menu } from 'react-burger-menu';
import { useSelector } from 'react-redux';
import UserProfile from '../Components/userProfile';
import LeftColumn from './leftColumn';

import '../Assets/styles/menuBurger.css';
import '../Assets/styles/navBar.css';

const NavBar = ({ setSelectedChildCategory }) => {
  const categoryData = useSelector((state) => state.category);

  const resetChildChange = () => {
    setSelectedChildCategory('');
  };

  return (
    <div className=" navBarWrapper d-flex mb-5 p-3 d-flex justify-content-between">
      <div className="col-s-3 ">
        <Link to="/" onClick={resetChildChange}>
          <h2 className="pageTitle m-3 text-center">Little Julie Shop</h2>
        </Link>
      </div>
      <div className="d-flex justify-content-end align-items-center m-4 p-3">
        <Menu right>
          <LeftColumn
            key={categoryData.id}
            categoryInfo={categoryData.categoryCollection}
          />
        </Menu>
        <UserProfile className="d-flex justify-content-around" />
      </div>
    </div>
  );
};
NavBar.propTypes = {
  setSelectedChildCategory: PropTypes.func.isRequired,
};

export default NavBar;
