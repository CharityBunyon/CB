/* eslint-disable no-unused-vars */
import './projects.scss';
import $ from 'jquery';
import ScrollMagic from 'scrollmagic';


const buildProjectCard = (projects) => {
  let domString = '';
  domString += `
  <div class="card projectCard" style="width: 30rem;">
  <div class="text-center ">
  <a href="${projects.url}"><img src="${projects.projectImg}" alt="${projects.title}" class=" image image-fluid"></a>
  </div>
  
  <div class="overlay text-center">
    <p class="card-title" id="projectTitle">${projects.title.toUpperCase()}</p> 
    <p class="projectInfo ">${projects.technologies}</p> 
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

// const showAbout = () => {
//   $(document).ready(() => {
//     const controller = new ScrollMagic.Controller();
//     const scene = new ScrollMagic.Scene({
//       triggerElement: '.fade-in',
//       reverse: true,
//     })
//       .setClassToggle('.fade-in', 'show')
//       .addTo(controller);
//   });
// };
