import './contact.scss';
import utilities from '../../helpers/utilities';

const buildContactSection = () => {
  const domString = `
    <div class="container d-flex flex-wrap connect-container">
      <div class="col-md-4 connect text-center">
        <div class="inner2">
          <i class="fas fa-glasses glass-icon"></i>
          <h2>Let's Connect</h2>
        </div>
      </div>
      <div class="col-md-8 connectInfo text-center">
        <div class="inner">
          <p class="hire-me">I'm currently available for hire. If you have any opportunities, projects, or if you want to say hi, contact me. I'd love to connect.</p>
          <a href="mailto:charitycbunyon@gmail.com" target="_blank" class="resume">Connect With Me</a>
        </div>
      </div>
    </div>
  `;
  utilities.printToDom('contact', domString);
};

// Listen for form submit


export default { buildContactSection };
