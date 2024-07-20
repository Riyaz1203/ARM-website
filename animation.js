// NAVBAR ANIMATION STARTS
document.addEventListener('DOMContentLoaded', () => {
    const menuToggleBtn = document.getElementById('menu-toggle-btn');
    const navContainer = document.getElementById('nav-container');
    const navLinks = document.querySelectorAll('.nav-link');
    const navLogo = document.querySelector('.nav-logo');
    const navSocials = document.querySelectorAll('.nav-socials a');
    const navFooterLinks = document.querySelectorAll('.nav-footer a');
  
    const tlIn = gsap.timeline({ paused: true });
    const tlOut = gsap.timeline({ paused: true });
  
    // In Animation Timeline
    tlIn.to(navContainer, { duration: 0.1, autoAlpha: 1 })
      .from(navLogo, { y: -50, opacity: 0, duration: 0.2 })
      .from(navLinks, { x: -50, opacity: 0, duration: 0.2, stagger: 0.1 }, '-=0.3')
      .from(navSocials, { y: 50, opacity: 0, duration: 0.1, stagger: 0.1 }, '-=0.3')
      .from(navFooterLinks, { opacity: 0, duration: 0.1, stagger: 0.1 }, '-=0.3');
  
    // Out Animation Timeline
    tlOut.to(navFooterLinks, { opacity: 0, duration: 0.1, stagger: 0.1 })
      .to(navSocials, { y: 50, opacity: 0, duration: 0.1, stagger: 0.1 }, '-=0.3')
      .to(navLinks, { x: -50, opacity: 0, duration: 0.1, stagger: 0.1 }, '-=0.3')
      .to(navLogo, { y: -50, opacity: 0, duration: 0.1 }, '-=0.3')
      .to(navContainer, { duration: 0.1, autoAlpha: 0 });
  
    menuToggleBtn.addEventListener('click', () => {
      menuToggleBtn.classList.toggle('active');
      if (menuToggleBtn.classList.contains('active')) {
        navContainer.classList.add('visible');
        tlIn.restart();
      } else {
        tlOut.restart().then(() => {
          navContainer.classList.remove('visible');
        });
      }
    });
  });
  
// NAVBAR ANIMATION END
