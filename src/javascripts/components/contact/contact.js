import './contact.scss';
import utilities from '../../helpers/utilities';

import airplane from '../../../images/airplane.svg';


const buildContactSection = () => {
  const domString = `
    <div class="contact-wrapper d-flex row flex-wrap"">
      <div class="contact-image col">
        <img class="icon" src="${airplane}" alt="email">
      </div>

      <div class="contact-form col">
        <h3 class="form-title">Contact Me</h3>
        <form>
        <div class="form-group">
            <input type="text" class="form-control sections" id="" name="name" aria-describedby="emailHelp" placeholder="Name">
          </div>

          <div class="form-group">
            <input type="email" class="form-control sections" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" placeholder="Email">
          </div>

          <div class="form-group full">
            <textarea type="text" class="form-control sections" id="" name="message" aria-describedby="emailHelp" placeholder="Message">Message...
            </textarea>
          </div>
         
          <button type="submit" class="btn btn-primary full sections-submit">Send</button>
        </form>
      </div>
    </div>
  `;
  utilities.printToDom('contact', domString);
};


export default { buildContactSection };
