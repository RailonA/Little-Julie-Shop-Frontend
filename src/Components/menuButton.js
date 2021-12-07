import { slide as Menu } from 'react-burger-menu';
import { useSelector } from 'react-redux';
import LeftColumn from '../Containers/leftColumn';

import '../Assets/styles/menuBurger.css';
import '../Assets/styles/navBar.css';

const MenuButton = () => {
  const categoryData = useSelector((state) => state.category);

  return (
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    <Menu right>
      <LeftColumn
        key={categoryData.id}
        categoryInfo={categoryData.categoryCollection}
      />
    </Menu>
  );
};

export default MenuButton;
