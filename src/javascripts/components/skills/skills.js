import './skills.scss';
import utilities from '../../helpers/utilities';
import html from '../../../images/html-logo.png';
import javascript from '../../../images/JavaScript-logo.png';
import react from '../../../images/react-logo.png';
import git from '../../../images/git-logo.png';
import github from '../../../images/github-logo.png';
import css from '../../../images/css-logo.png';
import sass from '../../../images/sass-logo.png';
import bootstrap from '../../../images/bootstrap-logo.png';
import sql from '../../../images/sql-logo.png';
import c from '../../../images/csharp-logo.png';
import net from '../../../images/net-logo.png';
import moqups from '../../../images/moqups-logo.jpg';

const buildSkillSection = () => {
  const domString = `
  <div class="">
    <div class="text-center">
    <i class="fas fa-glasses glass-icon"></i>
    <h2 class="text-center skills-title">Technologies I've Worked With</h2>
    </div>

    <div class=" d-flex row flex-wrap">
    <span><img src="${html}" alt="html logo" class="skills-logo"/></span>
    <span><img src="${javascript}" alt="javascript logo" class="skills-logo"/></span>
    <span><img src="${react}" alt="react logo" class="skills-logo"/></span>
    <span><img src="${git}" alt="git logo" class="skills-logo"/></span>
    <span><img src="${github}" alt="github logo" class="skills-logo"/></span>
    <span><img src="${css}" alt="css logo" class="skills-logo"/></span>
    <span><img src="${sass}" alt="sass logo" class="skills-logo"/></span>
    <span><img src="${bootstrap}" alt="bootstrap logo" class="skills-logo"/></span>
    <span><img src="${sql}" alt="sql logo" class="skills-logo"/></span>
    <span><img src="${c}" alt="c sharp logo" class="skills-logo"/></span>
    <span><img src="${net}" alt=".net logo" class="skills-logo"/></span>
    <span><img src="${moqups}" alt="mosqups logo" class="skills-logo"/></span>
    </div>

  </div>
  `;
  utilities.printToDom('skills', domString);
};

export default { buildSkillSection };
