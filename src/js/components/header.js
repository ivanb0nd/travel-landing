const navMenu = document.querySelector('.nav__menu');
const closeBtn = document.querySelector('.close-btn');
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelectorAll('.nav__link');

if (menuBtn) {
  menuBtn.addEventListener('click', function () {
    navMenu.classList.add('nav__menu--show');
  });

  closeBtn.addEventListener('click', function () {
    navMenu.classList.remove('nav__menu--show');
  });
}

if (navLinks) {
  let closeMenu = function () {
    navMenu.classList.remove('nav__menu--show');
  };

  navLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
}

// scroll section active

const sections = document.querySelectorAll('section[id]');

let scrollActive = function () {
  const scrollDistance = window.scrollY;
  const headerOffset = document.querySelector('.header').offsetHeight;

  sections.forEach(function (currentSection) {
    const sectionHeight = currentSection.offsetHeight;
    const sectionTop = currentSection.offsetTop - headerOffset;
    const sectionId = currentSection.getAttribute('id');

    if (scrollDistance > sectionTop && scrollDistance <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('nav__link--active');
    } else  {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('nav__link--active');
    }
  });
};

window.addEventListener('scroll', scrollActive);



// scroll header

const header = document.querySelector('.header');

let scrollHeader = function () {
  if (this.scrollY >= 50) {
    header.classList.add('header--scroll');
  } else {
    header.classList.remove('header--scroll');
  }
};

window.addEventListener('scroll', scrollHeader);


// show scrollup

const scrollUp = document.querySelector('#scroll-up');

let showScrollUp = function () {
  if(this.scrollY >= 500) {
    scrollUp.classList.add('scrollup--show');
  } else {
    scrollUp.classList.remove('scrollup--show');
  }
};

window.addEventListener('scroll', showScrollUp);
