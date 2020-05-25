import './about.scss';
import utilities from '../../helpers/utilities';
import profile from '../../../images/charity.jpg';


const buildAbout = () => {
  const domString = ` 
  <div class="d-flex row about-section">
      <div class="col-sm-12 col-md-6 image-area">
        <img class="profile-image" src="${profile}" alt="Image of Charity Bunyon">
      </div>
      <div class="col-sm-12 col-md-6">
      <div class="text-center">
       <i class="fas fa-glasses glass-icon"></i>
      </div>
        <h2 class="about-title text-center">About Me</h2>
        <p class="about-para">Welcome!<p>

        <p class="about-para">My name is Charity Bunyon. I started coding in 2018 when one of my students introduced CSS and JavaScript to me. It was that moment that I fell in love with programming and knew I wanted to be a developer.<p>

        <p class="about-para">My current strength is building out front-end applications. I enjoy using React, APIs, and Sass to create robust and aesthetically pleasing applications. Also, I love API development, wireframing, and working with SQL to build databases. I’m working toward obtaining a full-stack position because I want to make sure I become a well-rounded developer, obtaining and strengthening my skills in order to be an asset to my team members.<p>

        <p class="about-para">Furthermore, I would consider myself a lifelong learner. New technologies and skills are always available. This excites me because I know that it will always be something or someone I can learn from and grow.<p>

        <a href="https://drive.google.com/file/d/1e8enfsFnVmsCAL9SnvGCNLhgHhmYOlza/view?usp=sharing" target="_blank" class="resume">Download CV<i class="fas fa-download"></i></a>
      </div>
    </div>

 
    
    `;
  utilities.printToDom('about', domString);
};

export default { buildAbout };
