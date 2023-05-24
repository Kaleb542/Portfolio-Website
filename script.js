// Fetch project data from GitHub API
fetch('https://api.github.com/users/Kaleb542/repos')
  .then(response => response.json())
  .then(data => {
    const projectTilesContainer = document.getElementById('project-tiles');

    // Generate project tiles
    data.forEach(project => {
      const projectTile = document.createElement('div');
      projectTile.classList.add('project-tile');

      const projectName = document.createElement('h2');
      projectName.textContent = project.name;

      const projectDescription = document.createElement('p');
      projectDescription.textContent = project.description;

      const projectTechnologies = document.createElement('p');
      projectTechnologies.textContent = `Technologies used: ${project.language}`;

      const projectLink = document.createElement('a');
      projectLink.href = project.html_url;
      projectLink.textContent = 'View Project';

      projectTile.appendChild(projectName);
      projectTile.appendChild(projectDescription);
      projectTile.appendChild(projectTechnologies);
      projectTile.appendChild(projectLink);

      projectTilesContainer.appendChild(projectTile);
    });
  })
  .catch(error => {
    console.log('Error fetching project data:', error);
    const projectTilesContainer = document.getElementById('project-tiles');
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'Error fetching project data. Please try again later.';
    projectTilesContainer.appendChild(errorMessage);
  });

// Navigation active section highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

function changeActiveLink() {
  let index = sections.length - 1;

  while (index >= 0 && window.scrollY + 50 < sections[index].offsetTop) {
    navLinks[index].classList.remove('active');
    index--;
  }

  if (index >= 0 && !navLinks[index].classList.contains('active')) {
    navLinks.forEach(link => link.classList.remove('active'));
    navLinks[index].classList.add('active');
  }
}

window.addEventListener('scroll', changeActiveLink);

// Smooth scroll effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Back to top button
const backToTopButton = document.getElementById('back-to-top');

function toggleBackToTopButton() {
  if (window.scrollY > 500) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
}

window.addEventListener('scroll', toggleBackToTopButton);

backToTopButton.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Dark mode toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('change', function () {
  body.classList.toggle('dark-theme');
});

