import './navbar.scss';
import utilities from '../../helpers/utilities';
import logo from '../../../images/logo2.png';
import one from '../../../images/landing-img.png';
import two from '../../../images/mobile-landing.png';


const buildNav = () => {
  const domString = `
  <div>
    <nav class="navbar navbar-expand-lg navbar-light mainNav">
    <a class="navbar-brand" href="nav">
    <img src=${logo} class="navImage" alt="Brand Image">
    </a>
    <button class="navbar-toggler navTog" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon hamburger"></span>
    </button>
    <div class="collapse navbar-collapse hamburger" id="navbarTogglerDemo02">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0 container justify-content-end">
        <li class="nav-item">
          <a class="nav-link" id="individualLink" href="#about">About</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" id="individualLink" href="#skills">Skills</a>
      </li>
      <li class="nav-item">
          <a class="nav-link" id="individualLink" href="#projects">Projects</a>
        </li>
      <li class="nav-item">
        <a class="nav-link" id="individualLink" href="#contact">Contact</a>
      </li>
    </div>
  </nav>

  <div class="container text-center"> 
  <img src=${one} class="oneIntro img-fluid" alt="Brand Image">
  <img src=${two} class="twoIntro img-fluid" alt="Brand Image">
  </div>
</div>
  `;
  utilities.printToDom('nav', domString);
};

export default { buildNav };
