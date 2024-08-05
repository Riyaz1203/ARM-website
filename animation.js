document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');

    // Function to remove active class from all nav-links
    function removeActiveClass() {
        navLinks.forEach(link => link.classList.remove('active'));
    }

    // Add click event listener to each nav-link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            removeActiveClass();
            this.classList.add('active');
        });
    });

    // Set the first nav-link as active by default
    if (navLinks.length > 0) {
        navLinks[0].classList.add('active');
    }
});

document.addEventListener("DOMContentLoaded", function() {
	// Navbar Animation
	gsap.from("header", {
	  duration: 1,
	  opacity: 0,
	  y: -50,
	  ease: "power2.out"
	});
  
	// Home Title Animation
	gsap.from(".home-title h1", {
	  duration: 1.5,
	  opacity: 0,
	  y: 50,
	  stagger: 0.3,
	  ease: "power2.out"
	});
  
	// Lottie Player Animation
	gsap.from(".dotie-home", {
	  duration: 1.5,
	  opacity: 0,
	  scale: 0.8,
	  ease: "power2.out",
	  delay: 0.5
	});
  
	// Video Section Animation
	gsap.from(".video-containier-section", {
	  duration: 1.5,
	  opacity: 0,
	  y: 50,
	  ease: "power2.out",
	  delay: 1
	});
  
	// Products Section Animation
	gsap.from(".prd-image-container", {
	  duration: 1.5,
	  opacity: 0,
	  scale: 0.9,
	  stagger: 0.2,
	  ease: "power2.out",
	  scrollTrigger: {
		trigger: "#product",
		start: "top center",
		toggleActions: "play none none none"
	  }
	});
  
	// About Us Section Animation
	gsap.from("#about-us .about-section-container", {
	  duration: 1.5,
	  opacity: 0,
	  y: 50,
	  ease: "power2.out",
	  scrollTrigger: {
		trigger: "#about-us",
		start: "top center",
		toggleActions: "play none none none"
	  }
	});
  
	// Contact Section Animation
	gsap.from("#contact .contact-main", {
	  duration: 1.5,
	  opacity: 0,
	  y: 50,
	  ease: "power2.out",
	  scrollTrigger: {
		trigger: "#contact",
		start: "top center",
		toggleActions: "play none none none"
	  }
	});
  
	// Footer Animation
	gsap.from(".footer", {
	  duration: 1.5,
	  opacity: 0,
	  y: 50,
	  ease: "power2.out",
	  delay: 1.5
	});
  });
  