import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { slide as Menu } from 'react-burger-menu';
import { useSelector } from 'react-redux';
import UserProfile from '../Components/userProfile';
import LeftColumn from './leftColumn';

import '../Assets/styles/menuBurger.css';
import '../Assets/styles/navBar.css';

const NavBar = ({
  setSelectedChildCategory,
  setSelectedCategory,
  selectedCategory,
  styleSheet,
  menuParentButton,
  menuChildButton,
  navBarWrapperDiv,
  pageTitle,
  navBarBtnColor,
}) => {
  const categoryData = useSelector((state) => state.category);
  const itemData = useSelector((state) => state.items);

  const resetChildChange = () => {
    setSelectedChildCategory('');
  };

  return (
    <div className={navBarWrapperDiv}>
      <div className="d-flex justify-content-between">
        <div className="col-s-3 ">
          <Link to="/" onClick={resetChildChange}>
            <div className="m-3 text-center">
              <h2 className={pageTitle}>Little Julie Shop</h2>
            </div>
          </Link>
        </div>
        <div className="d-flex justify-content-end align-items-center m-4 p-3 ">
          <div className="d-block d-md-none">
            <Menu
              right
              className="menu"
            >
              <LeftColumn
                key={categoryData.id}
                categoryInfo={categoryData.categoryCollection}
                itemList={itemData}
                setSelectedChildCategory={setSelectedChildCategory}
                setSelectedCategory={setSelectedCategory}
                selectedCategory={selectedCategory}
                styleSheet={styleSheet}
                menuParentButton={menuParentButton}
                menuChildButton={menuChildButton}
              />
            </Menu>
          </div>
          <div className="d-flex justify-content-around">
            <UserProfile navBarBtnColor={navBarBtnColor} />
          </div>
        </div>
      </div>
    </div>
  );
};
NavBar.propTypes = {
  setSelectedCategory: PropTypes.func.isRequired,
  setSelectedChildCategory: PropTypes.func.isRequired,
  selectedCategory: PropTypes.func.isRequired,
  styleSheet: PropTypes.func.isRequired,
  menuParentButton: PropTypes.func.isRequired,
  menuChildButton: PropTypes.func.isRequired,
  navBarWrapperDiv: PropTypes.func.isRequired,
  pageTitle: PropTypes.func.isRequired,
  navBarBtnColor: PropTypes.func.isRequired,
};

export default NavBar;
