import './navbar.scss';
import utilities from '../../helpers/utilities';

import logo from '../../../images/site-logo.png';

const buildNav = () => {
  const domString = `
  <div class="topnav">

  <div class="topnav-centered">
  <a class="navbar-brand" href="#nav">
  <img src=${logo} class="navImage" alt="Brand Image">
  </a>
  </div>

  <a href="#about">ABOUT</a>
  <a href="#skills">SKILLS</a>
  

  <div class="topnav-right">
    <a href="#projects">PROJECTS</a>
    <a href="#contact">CONTACT</a>
  </div>
  
</div>

  `;
  utilities.printToDom('nav', domString);
};

export default { buildNav };
