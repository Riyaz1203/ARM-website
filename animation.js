// document.addEventListener("DOMContentLoaded", function() {
//     // Navbar Animation
//     gsap.from("header", {
//       duration: 1,
//       opacity: 0,
//       y: -50,
//       ease: "power2.out"
//     });
  
//     // Home Title Animation
//     gsap.from(".home-title h1", {
//       duration: 1.5,
//       opacity: 0,
//       y: 50,
//       stagger: 0.3,
//       ease: "power2.out"
//     });
  
//     // Lottie Player Animation
//     gsap.from(".dotie-home", {
//       duration: 1.5,
//       opacity: 0,
//       scale: 0.8,
//       ease: "power2.out",
//       delay: 0.5
//     });
  
//     // Video Section Animation
//     gsap.from(".video-containier-section", {
//       duration: 1.5,
//       opacity: 0,
//       y: 50,
//       ease: "power2.out",
//       delay: 1
//     });
  
//     // Products Section Animation
//     gsap.from(".prd-image-container", {
//       duration: 1.5,
//       opacity: 0,
//       scale: 0.9,
//       stagger: 0.2,
//       ease: "power2.out",
//       scrollTrigger: {
//         trigger: "#product",
//         start: "top center",
//         toggleActions: "play none none none"
//       }
//     });
  
//     // About Us Section Animation
//     gsap.from("#about-us .about-section-container", {
//       duration: 1.5,
//       opacity: 0,
//       y: 50,
//       ease: "power2.out",
//       scrollTrigger: {
//         trigger: "#about-us",
//         start: "top center",
//         toggleActions: "play none none none"
//       }
//     });
  
//     // Contact Section Animation
//     gsap.from("#contact .contact-main", {
//       duration: 1.5,
//       opacity: 0,
//       y: 50,
//       ease: "power2.out",
//       scrollTrigger: {
//         trigger: "#contact",
//         start: "top center",
//         toggleActions: "play none none none"
//       }
//     });
  
//     // Footer Animation
//     gsap.from(".footer", {
//       duration: 1.5,
//       opacity: 0,
//       y: 50,
//       ease: "power2.out",
//       delay: 1.5
//     });
  
//     // Fade-in and Slide-up for Sections on Scroll
//     gsap.utils.toArray('.fade-up').forEach(section => {
//       gsap.from(section, {
//         duration: 1.5,
//         opacity: 0,
//         y: 50,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: section,
//           start: "top bottom",
//           toggleActions: "play none none none"
//         }
//       });
//     });
  
//     // Hover Effects for Product Images
//     gsap.to(".prd-image-container img", {
//       scale: 1.1,
//       boxShadow: "0px 4px 8px rgba(0,0,0,0.3)",
//       ease: "power2.out",
//       duration: 0.3,
//       paused: true
//     });
  
//     document.querySelectorAll(".prd-image-container").forEach(container => {
//       container.addEventListener("mouseover", () => {
//         gsap.to(container.querySelector("img"), { scale: 1.1, boxShadow: "0px 4px 8px rgba(0,0,0,0.3)", duration: 0.3 });
//       });
//       container.addEventListener("mouseout", () => {
//         gsap.to(container.querySelector("img"), { scale: 1, boxShadow: "none", duration: 0.3 });
//       });
//     });
  
//     // Smooth Scrolling Animation
//     gsap.utils.toArray(".nav-link").forEach(link => {
//       link.addEventListener("click", (e) => {
//         e.preventDefault();
//         const target = document.querySelector(e.target.getAttribute("href"));
//         gsap.to(window, { scrollTo: target.offsetTop, duration: 1, ease: "power2.out" });
//       });
//     });
//   });
  