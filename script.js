document.addEventListener("DOMContentLoaded", () => {
  const hiddenElements = document.querySelectorAll(".hidden");
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  hiddenElements.forEach((element) => {
    observer.observe(element);
  });

  const navbar = document.querySelector(".navbar");
  const heroSection = document.getElementById("hero");

  window.addEventListener("scroll", () => {
    const heroTop = heroSection.offsetTop;
    const heroHeight = heroSection.offsetHeight;
    const scrollPos = window.scrollY;

    if (scrollPos >= heroTop && scrollPos < heroTop + heroHeight) {
      navbar.classList.add("navbar-dark");
    } else {
      navbar.classList.remove("navbar-dark");
    }
  });
});
