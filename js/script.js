  document.querySelectorAll('.accordion-toggle').forEach(btn => {
    btn.addEventListener('click', function () {
      const item = this.parentElement;
      const allItems = document.querySelectorAll('.accordion-item');

      allItems.forEach(i => {
        if (i !== item) {
          i.classList.remove('active');
        }
      });

      item.classList.toggle('active');
    });
  });


  document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // Show/hide button based on scroll position (optional)
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) { // Show button after scrolling 300px
            scrollToTopBtn.style.display = 'flex';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    // Scroll to top functionality
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scroll animation
        });
    });
});

const links = document.querySelectorAll('.nav-links a');
  const currentPage = window.location.pathname.split('/').pop();

  links.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
