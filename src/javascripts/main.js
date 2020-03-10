// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import * as ScrollMagic from 'scrollmagic'; // Or use scrollmagic-with-ssr to avoid server rendering problems
// import { TweenMax, TimelineMax } from 'gsap'; // Also works with TweenLite and TimelineLite
// import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';
import 'jquery';
import 'bootstrap';
import '../styles/main.scss';
import navBar from './components/navbar/navbar';
import carousel from './components/carousel/carousel';
import about from './components/about/about';
import skills from './components/skills/skills';
import title from './components/projectTitle/projectTitle';
import projectDisplay from './components/projectDisplay/projectDisplay';
import contact from './components/contact/contact';

// ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

// $(() => {
// Init ScrollMagic
// const controller = new ScrollMagic.Controller();

// // build a scene
// // eslint-disable-next-line no-unused-vars
// new ScrollMagic.Scene({
//   triggerElement: 'project01',
// })
//   .setClassToggle('#project01', 'fade-in') // add class to project01
//   .addTo(controller);
// });

// AOS.init();

const init = () => {
  navBar.buildNav();
  carousel.buildCarousel();
  about.buildAbout();
  skills.buildSkillSection();
  title.buildTitle();
  projectDisplay.buildProjects();
  contact.buildContactSection();
};

init();


// const showAnimation = () => {
//   $(document).ready(() => {
//     const controller = new ScrollMagic.Controller();

//     // build a scene
//     // eslint-disable-next-line no-unused-vars
//     const ourscene = new ScrollMagic.Scene({
//       triggerElement: 'project01',
//     })
//       .setClassToggle('#project01', 'fade-in') // add class to project01
//       .addTo(controller);
//   });
// };

// showAnimation();
