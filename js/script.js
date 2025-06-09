document.querySelectorAll(".accordion-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    content.classList.toggle("active");

    if (content.classList.contains("active")) {
      content.style.display = "block";
      button.querySelector(".arrow img").src = "images/faq-icon-up.svg";
    } else {
      content.style.display = "none";
      button.querySelector(".arrow img").src = "images/faq-icon-down.svg";
    }
  });
});



document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  // Show/hide button based on scroll position (optional)
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      // Show button after scrolling 300px
      scrollToTopBtn.style.display = "flex";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  // Scroll to top functionality
  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll animation
    });
  });
});

const links = document.querySelectorAll(".nav-links a");
const currentPage = window.location.pathname.split("/").pop();

links.forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});
