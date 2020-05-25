import './projects.scss';


const buildProjectCard = (projects) => {
  let domString = '';
  domString += `
  <div class=" d-flex flex-wrap justify-content-center">
  <div class="project-card row">
    <div class="col-sm">
    <a href="${projects.url}"><img src="${projects.projectImg}" alt="${projects.title}" class="card-images"></a>
    </div>
    
      <div class="content col-sm">
      <h3 class="project-title align-content-end">${projects.title}</h3>
      <p class="projectInfo">${projects.description}</p> 
      <p class="tech">${projects.technologies}</p> 
      <div class="project-icons">
        <a href="${projects.github}" class="viewGit"><i class="fab fa-github"></i></a>  
        <a href="${projects.url}" class="viewProject"><i class="fas fa-external-link-alt"></i></a>
      </div>
    </div>
  </div>
  </div>
      `;
  return domString;
};
export default { buildProjectCard };
