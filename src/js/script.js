const navMobile = document.querySelector("#nav-mobile");
const navTrigger = document.querySelector("#nav-trigger");
const navClose = document.querySelector("#nav-close");

const toggleMenu = () => {
  navMobile.classList.toggle("translate-x-0");
  navMobile.classList.toggle("translate-x-full");
};

navTrigger.addEventListener("click", toggleMenu);
navClose.addEventListener("click", toggleMenu);

//swiper
const swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

// scrolll reveall animation
const sr = ScrollReveal({
  origin: "bottomtop",
  distance: "60px",
  duration: 3000,
  delay: 600,
  // reset: true
});

// hero animation
sr.reveal(".hero__title", { origin: "top" });
sr.reveal(".hero__subtitle", { origin: "top", delay: 700 });
sr.reveal(".hero__btn", { origin: "top", delay: 800 });
sr.reveal(".hero__mainImg-border", { delay: 700 });
sr.reveal(".hero__mainImg", { delay: 800 });
sr.reveal(".hero__featuredImg", { origin: "top", delay: 900 });

// about animations
sr.reveal(".about__featuredImg", { origin: "top", delay: 300 });
sr.reveal(".about__scrolldown", { delay: 400 });
sr.reveal(".about__featuredImg2", { delay: 600 });
sr.reveal(".about__stats", { delay: 600 });
sr.reveal(".about__form", { delay: 700 });

//services animation
sr.reveal(".services__title", { delay: 500 });
sr.reveal(".services__item", { distance: "100px", interval: 100 });

sr.reveal(".services-secondary__title", { delay: 500 });
sr.reveal(".services-secondary__img1", { delay: 600 });
sr.reveal(".services-secondary__img2", { delay: 700 });

sr.reveal(".services-tertiary__title", { delay: 500 });
sr.reveal(".services-tertiary__imgs", { delay: 600 });
sr.reveal(".services-tertiary__p", { delay: 700 });

//projects animation
sr.reveal(".projects__title", { delay: 500 });
sr.reveal(".projects__slider", { delay: 600 });

//testimonials animation
sr.reveal(".testimonials__title", { delay: 500 });
sr.reveal(".testimonials__slider", { delay: 600 });

//contact animation
sr.reveal(".contact__textContainer", { delay: 500 });

//footer animation
sr.reveal(".footer__container", { origin: "top", delay: 200 });
