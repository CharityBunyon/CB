import './contact.scss';
// import axios from 'axios';
import utilities from '../../helpers/utilities';
// mport airplane from '../../../images/airplane.svg';
// import apiKeys from '../apiKeys.json';

// const baseUrl = apiKeys.firebaseKeys.databaseURL;

const buildContactSection = () => {
  const domString = `
    <div class="contact-wrapper d-flex row flex-wrap">

      <div class="contact-form text-center col">
        <h2 class="text-center contact-title">Contact Me</h2>
        <li class="contact-para contact-links">Want to connect? Please feel free to reach out to me!</li>
        
        <li class="contact-links"><a href="mailto:charitycbunyon@gmail.com" target="_blank"><i class="far fa-paper-plane contact-icons"></i>Email Me</a></li>

        <li class="contact-links"><a href="https://www.linkedin.com/in/charity-bunyon/" target="_blank"><i class="fab fa-linkedin contact-icons"></i>View My LinkedIn</a></li>

        <li class="contact-links"><a href="https://github.com/CharityBunyon" target="_blank"><i class="fab fa-github contact-icons"></i>View My Github</a></li>
      
      </div>
    </div>
  `;
  utilities.printToDom('contact', domString);
};

// Listen for form submit


export default { buildContactSection };
