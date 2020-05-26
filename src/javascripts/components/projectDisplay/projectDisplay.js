/* eslint-disable no-unused-vars */
import './projectDisplay.scss';
import utilities from '../../helpers/utilities';
import projectData from '../../helpers/data/projectData';
import projects from '../projects/projects';


const buildProjects = () => {
  projectData.getProjects()
    .then((project) => {
      let domString = '';
      domString += '<div class="text-center"><i class="fas fa-glasses glass-icon"></i><h2 class="text-center contact-title">Some Things I Have Built</h2></div>';
      domString += '<div class="d-flex flex-wrap justify-content-center">';
      project.forEach((board) => {
        domString += projects.buildProjectCard(board);
      });
      domString += '</div>';
      utilities.printToDom('projects', domString);
    })
    .catch((error) => console.error(error));
};


export default { buildProjects };
