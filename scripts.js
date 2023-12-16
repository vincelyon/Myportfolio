function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  function showVisibleElements(sectionSelector) {
    const elements = document.querySelectorAll(sectionSelector);
  
    elements.forEach((element) => {
      if (isInViewport(element)) {
        element.classList.add('visible');
      } else {
        element.classList.remove('visible');
      }
    });
  }
  
  function animateOnScroll() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((element) => {
      if (isInViewport(element)) {
        element.classList.add('animate');
      } else {
        element.classList.remove('animate');
      }
    });
  }
  
  window.addEventListener('scroll', () => {
    showVisibleElements('#projects .project');
    showVisibleElements('#contact, #about'); // Add other section selectors here
    animateOnScroll();
  });
  
  window.addEventListener('resize', () => {
    showVisibleElements('#projects .project');
    showVisibleElements('#contact, #about'); // Add other section selectors here
    animateOnScroll();
  });
  
  // Smooth scroll behavior for navigation links
  document.querySelectorAll('nav ul li a').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = e.target.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Initial check for visibility on page load
  showVisibleElements('#projects .project');
  showVisibleElements('#contact, #about'); // Add other section selectors here
  animateOnScroll();
  