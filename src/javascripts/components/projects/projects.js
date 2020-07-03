/* eslint-disable no-unused-vars */
import './projects.scss';
import $ from 'jquery';
import ScrollMagic from 'scrollmagic';


const buildProjectCard = (projects) => {
  let domString = '';
  domString += `
  <div class="card projectCard" style="width: 30rem;">
  <div class="text-center ">
  <img src="${projects.projectImg}" alt="${projects.title}" class=" image image-fluid">
  </div>
  
  <div class="overlay text-center">
    <p class="card-title" id="projectTitle">${projects.title.toUpperCase()}</p>
    <p class="projectDes">${projects.description}</p>
    <p class="projectInfo">Technologies:${projects.technologies}</p> 
    <div class="text-center">
      <a href="${projects.github}" class="projectInfo viewGit"><i class="fab fa-github"></i></a>  
      <a href="${projects.url}" class="projectInfo viewProject"><i class="fas fa-external-link-alt"></i></a>  
    </div>
  </div>
</div>
      `;
  return domString;
};


export default { buildProjectCard };
