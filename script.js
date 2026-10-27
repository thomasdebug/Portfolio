const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Menu sluiten' : 'Menu openen');
  });

  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}


const aboutToggle = document.getElementById("about-toggle");
const fullAbout = document.getElementById("full-about");

if (aboutToggle && fullAbout) {
    aboutToggle.addEventListener("click", () => {
        const isExpanded =
            aboutToggle.getAttribute("aria-expanded") === "true";

        fullAbout.hidden = isExpanded;
        aboutToggle.setAttribute("aria-expanded", String(!isExpanded));
        aboutToggle.textContent = isExpanded ? "Read More" : "Read Less";
    });
}


// Projectfilter op tags.
const filterButtons = document.querySelectorAll('.filter-chip');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filterButtons.forEach(item => item.classList.toggle('active', item === button));
    projectCards.forEach(card => {
      const tags = (card.dataset.tags || '').split(',');
      card.hidden = filter !== 'all' && !tags.includes(filter);
    });
  });
});

// Front-end formulier: opent het standaard e-mailprogramma; er is geen backend nodig.
const form = document.querySelector('#contact-form');
const feedback = document.querySelector('#form-feedback');
if (form) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    const recipient = 'Thomas@pivovar.net'; // VERVANG DIT DOOR JE EIGEN E-MAILADRES
    const data = new FormData(form);
    const name = data.get('name');
    const email = data.get('email');
    const message = data.get('message');
    const subject = encodeURIComponent(`Portfolio contact van ${name}`);
    const body = encodeURIComponent(`Naam: ${name}\nE-mail: ${email}\n\n${message}`);
    if (feedback) feedback.textContent = 'Je e-mailprogramma wordt geopend. Verstuur de e-mail daar om het bericht te verzenden.';
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  });

  
}
