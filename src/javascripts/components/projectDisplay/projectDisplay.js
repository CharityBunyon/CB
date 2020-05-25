import utilities from '../../helpers/utilities';
import './projectDisplay.scss';
import projectData from '../../helpers/data/projectData';
import projects from '../projects/projects';


const buildProjects = () => {
  projectData.getProjects()
    .then((project) => {
      let domString = '';
      domString += '<div class="text-center"><i class="fas fa-glasses glass-icon"></i><h2 class="text-center contact-title">Some Things I Have Built</h2></div>';
      project.forEach((board) => {
        domString += projects.buildProjectCard(board);
      });
      utilities.printToDom('projects', domString);
    })
    .catch((error) => console.error(error));
};

export default { buildProjects };
