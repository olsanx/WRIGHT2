
//NAVLINKS-SLASH//

const navLinks = document.querySelectorAll('.nav-links');

const activePage = localStorage.getItem('activePage');

if (activePage) {
  navLinks.forEach(link => {
    if (link.getAttribute('data-page') === activePage) {
      link.classList.add('active');
    }
  });
};

navLinks.forEach(link => {
  link.addEventListener('click', function () {
    navLinks.forEach(links => links.classList.remove('active'));

    this.classList.add('active');

    const clickedPage = this.getAttribute('data-page');
    localStorage.setItem('activePage', clickedPage);
  });
});


function toggleMenu() {
  const navContainer = document.querySelector('.nav-container');
  navContainer.classList.toggle('show-menu');
}




const navbar = document.querySelector('.nav-container');
const targetSection = document.getElementById('personal-interests');

window.addEventListener('scroll', () => {
  const sectionRect = targetSection.getBoundingClientRect();
  const viewportHeight = window.innerHeight;

  if (sectionRect.top <= viewportHeight * 0.1 && sectionRect.bottom >= 0) {
    navbar.classList.add('transparent');
  } else {
    navbar.classList.remove('transparent');
  }
});







//FADEIN_FADEOUT//

const mainContent = document.querySelector('.main-content');

window.addEventListener('load', () => {
  mainContent.classList.add('fade-in');
});

navLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();

    const clickedPage = this.getAttribute('data-page');
    localStorage.setItem('activePage', clickedPage);

    mainContent.classList.add('fade-out');

    setTimeout(() => {
      window.location.href = this.href;
    }, 500);
  });
});



const interestsSlide = document.querySelector('.interests-slide');

let isDown = false;
let startX;  // Initial X position when mouse is pressed down
let scrollLeft;  // Initial scroll position

interestsSlide.addEventListener('mousedown', (e) => {
  isDown = true;
  interestsSlide.classList.add('active'); // Optional: Add visual feedback if needed
  startX = e.pageX - interestsSlide.offsetLeft; // Get initial mouse X position
  scrollLeft = interestsSlide.scrollLeft; // Get initial scroll position
  interestsSlide.style.cursor = 'grabbing'; // Change cursor to grabbing when clicked
});

interestsSlide.addEventListener('mouseleave', () => {
  isDown = false;
  interestsSlide.classList.remove('active');
  interestsSlide.style.cursor = 'grab'; // Reset cursor to grab when mouse leaves
});

interestsSlide.addEventListener('mouseup', () => {
  isDown = false;
  interestsSlide.classList.remove('active');
  interestsSlide.style.cursor = 'grab'; // Reset cursor to grab after mouse up
});

interestsSlide.addEventListener('mousemove', (e) => {
  if (!isDown) return; // Only run this function when the mouse is down
  e.preventDefault();
  const x = e.pageX - interestsSlide.offsetLeft; // Get current mouse X position
  const walk = x - startX; // Calculate the distance moved by the mouse
  interestsSlide.scrollLeft = scrollLeft - walk; // Update the scroll position based on mouse movement
});
