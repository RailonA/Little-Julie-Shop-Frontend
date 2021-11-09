import { Link } from 'react-router-dom';
// import { FaFacebookF } from 'react-icons/fa';
// import { GrLinkedinOption, GrGithub, GrTwitter } from 'react-icons/gr';
import UserProfile from '../Components/userProfile';
// import '../Assets/styles/navBar.css';

const NavBar = () => (
  <div className=" navBarWrapper mb-5">
    <div className="d-flex  col-12 m-3">
      <div className=" col-7 ">
        <Link to="/">
          <h2>Little Julie Shop</h2>
        </Link>
      </div>
      <div className="d-flex col-5 justify-content-end align-items-center">
        <UserProfile />
      </div>
    </div>
    {/* <div className="d-flex justify-content-between  p-3 socialLinks">
      <div>
        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/RailonA.ArtStudio">
          <p><FaFacebookF className="socialButton" /></p>
        </a>
      </div>
      <div>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/railon-acosta/">
          <p><GrLinkedinOption className="socialButton" /></p>
        </a>
      </div>
      <div>
        <a target="_blank" rel="noreferrer" href="https://github.com/RailonA">
          <p><GrGithub className="socialButton" /></p>
        </a>
      </div>
      <div>
        <a target="_blank" rel="noreferrer" href="https://twitter.com/RailonAcosta">
          <p><GrTwitter className="socialButton" /></p>
        </a>
      </div>
    </div> */}
  </div>
);

export default NavBar;
