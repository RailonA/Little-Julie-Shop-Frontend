import { slide as Menu } from 'react-burger-menu';
import { Button } from 'react-bootstrap';
import '../Assets/styles/menuBurger.css';
import '../Assets/styles/navBar.css';

const MenuButton = () => {
  const showSettings = (event) => {
    event.preventDefault();
  };

  return (
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    <Menu right>
      <a id="home" className="menu-item" href="/">Home</a>
      <a id="about" className="menu-item" href="/about">About</a>
      <a id="contact" className="menu-item" href="/contact">Contact</a>
      <Button onClick={showSettings} className="menu-item--small" href="">Settings</Button>
    </Menu>
  );
};

export default MenuButton;
