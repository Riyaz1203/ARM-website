const open = document.querySelector('.container');
		const close = document.querySelector('.close');
		var tl = gsap.timeline({ defaults: { duration: 1, ease: 'expo.inOut' } });
		open.addEventListener('click', () => {
			if (tl.reversed()) {
				tl.play();
			} else {
				tl.to('nav', { right: 0 })
					.to('nav', { height: '100vh' }, '-=.1')
					.to('nav ul li a', { opacity: 1, pointerEvents: 'all', stagger: .2 }, '-=.8')
					.to('.close', { opacity: 1, pointerEvents: 'all' }, "-=.8")
					.to('nav h2', { opacity: 1 }, '-=1');
			}
		});

		close.addEventListener('click', () => {
			tl.reverse();
		});





  gsap.registerPlugin(ScrollTrigger);

  gsap.timeline({
      scrollTrigger: {
        trigger: ".home-title",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      }
    })
    .to(".home-title h1 span", {
      duration: 1,
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', // Revealing the text
      stagger: 0.2 // Delays each span animation for a staggered effect
    });
