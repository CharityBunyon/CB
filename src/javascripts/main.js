/* eslint-disable no-unused-vars */
import 'jquery';
import 'bootstrap';
import ScrollMagic from 'scrollmagic';
import '../styles/main.scss';
import navBar from './components/navbar/navbar';
import about from './components/about/about';
import skills from './components/skills/skills';
import projectDisplay from './components/projectDisplay/projectDisplay';
import contact from './components/contact/contact';
import projects from './components/projects/projects';

const init = () => {
  navBar.buildNav();
  // carousel.buildCarousel();
  about.buildAbout();
  skills.buildSkillSection();
  projectDisplay.buildProjects();
  contact.buildContactSection();
  about.showAbout();
  projects.showProjects();
  skills.showSkills();
  projectDisplay.showProjects();
};

init();
