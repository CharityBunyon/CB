// import * as ScrollMagic from 'scrollmagic'; // Or use scrollmagic-with-ssr to avoid server rendering problems
// import { TweenMax, TimelineMax } from 'gsap'; // Also works with TweenLite and TimelineLite
// import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import './about.scss';
import utilities from '../../helpers/utilities';

// ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);


const buildAbout = () => {
  const domString = ` 
  <div class="wrapper">
    <h4 class="hello" id="project01">Why, hello there!</h4>
    <div>
    <p class="aboutPara">I'm Charity Bunyon, welcome to my portfolio! I am a Nashville based software developer who loves building platforms that live on the internet. Throughout my career, I've held several positions that allow me to design innovative e-learning courses and learning materials for companies. It has been my pleasure to be a part of teams that have allowed me to problem solve and express myself creatively.</p>
    <p class="aboutPara2">I love working with clients that value the design process, collaboration, and want to be leaders in their respective industries. The full rundown of my projects and their focus is right below.</p>
    </div>
  </div>
 
    
    `;
  utilities.printToDom('about', domString);
};

// $(document).ready(() => {
// // Init ScrollMagic
//   const controller = new ScrollMagic.Controller();

//   // build a scene
//   // eslint-disable-next-line no-unused-vars
//   const ourScene = new ScrollMagic.Scene({
//     triggerElement: 'project01',
//   })
//     .setClassToggle('#project01', 'fade-in') // add class to project01
//     .addTo(controller);
// });

// AOS.init();

export default { buildAbout };
