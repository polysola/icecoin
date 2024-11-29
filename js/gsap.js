gsap.registerPlugin(ScrollTrigger);

gsap.to(".mvt-left", {
    x: -100, // Adjust the value as needed
    scrollTrigger: {
        trigger: ".home",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});

gsap.to(".mvt-right", {
    x: 100, // Adjust the value as needed
    scrollTrigger: {
        trigger: ".home",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});
gsap.to(".mascot", {
    y: 50, // Adjust the value as needed
    scrollTrigger: {
        trigger: ".home",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});


gsap.to(".grass_holder", {
    y: 70, // Adjust the value as needed
    scrollTrigger: {
        trigger: ".home",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});
gsap.to(".p1, .p2, .p3", {
    y: -140, // Adjust the value as needed
    scrollTrigger: {
        trigger: ".p3", // Trigger when .p3 enters the viewport
        start: "top bottom", // When the top of .p3 hits the bottom of the viewport
        end: "top top", // When the top of .p3 hits the top of the viewport
        scrub: true
    }
});

gsap.to(".banner_title", {
    x: -190, // Adjust the value as needed
    scrollTrigger: {
        trigger: ".tokenomics",
        start: "top bottom",
        end: "top top",
        scrub: true
    }
});
if (window.innerWidth < 768) {

    gsap.to(".banner_title", {
        x: -100, // Adjust the value as needed
        scrollTrigger: {
            trigger: ".tokenomics",
            start: "top bottom",
            end: "top top",
            scrub: true
        }
    });
}
gsap.fromTo(".rocket", 
    { x: -160 }, // Starting state
    { 
        x: 70, // Ending state
        scrollTrigger: {
            trigger: ".tokenomics",
            start: "top bottom", // Start when the top of .hero_fly hits the top of the viewport
            end: "bottom top", // End when the bottom of .hero_fly hits the top of the viewport
            scrub: 1, // Scrub smoothness
        }
    }
);
gsap.to(".planet", {
    rotateZ: 15, // Rotate 360 degrees on the z-axis
    scrollTrigger: {
        trigger: ".planet",
        start: "top bottom", // Start when the top of .planet hits the bottom of the viewport
        end: "top top", // End when the top of .planet hits the top of the viewport
        scrub: true // Smoothly synchronize the animation with the scroll
    }
});

gsap.fromTo(".smoker", 
    { x: -160, y: 50 }, // Starting state
    { 
        x: -10, // Ending state
        scrollTrigger: {
            trigger: ".smoker",
            start: "top 80%", // Start when the top of .smoker hits 80% from the top of the viewport
            end: "top 20%", // End when the top of .smoker hits 20% from the top of the viewport
            scrub: 1, // Scrub smoothness
        }
    }
);
gsap.fromTo(".how1", 
    { x: -160, }, // Starting state
    { x: -10, // Ending state
        scrollTrigger: {
            trigger: ".div-block-13",
            start: "bottom bottom", // Start when the top of .hero_fly hits the top of the viewport
            end: "top  top", // End when the bottom of .hero_fly hits the top of the viewport
            scrub: 1, // Scrub smoothness
        }
    }
);
gsap.fromTo(".how2", 
    { x: 160, }, // Starting state
    { x: 0, // Ending state
        scrollTrigger: {
            trigger: ".div-block-13",
            start: "bottom bottom", // Start when the top of .hero_fly hits the top of the viewport
            end: "top  top", // End when the bottom of .hero_fly hits the top of the viewport
            scrub: 1, // Scrub smoothness
        }
    }
);

gsap.fromTo(".how3", 
    { x: -160, }, // Starting state
    { x: 0, // Ending state
        scrollTrigger: {
            trigger: ".div-block-13",
            start: "top bottom", // Start when the top of .hero_fly hits the top of the viewport
            end: "top  top", // End when the bottom of .hero_fly hits the top of the viewport
            scrub: 1, // Scrub smoothness
        }
    }
);

gsap.fromTo(".how4", 
    { x: 160, }, // Starting state
    { x: 0, // Ending state
        scrollTrigger: {
            trigger: ".div-block-13",
            start: "bottom bottom", // Start when the top of .hero_fly hits the top of the viewport
            end: "top  top", // End when the bottom of .hero_fly hits the top of the viewport
            scrub: 1, // Scrub smoothness
        }
    }
);

gsap.from(".tokenics-holder", {
    opacity: 0,
    y: 50, // Optional: Adds a slight upward movement
    duration: 1.2,
    scrollTrigger: {
      trigger: ".tokenics-holder",
      start: "top 60%", // Starts when the element's top is closer to the center
      toggleActions: "play none none none",
    }
  });
  
  // Animation for tokenics-holder-2
  gsap.from(".tokenics-holder-2", {
    opacity: 0,
    y: 50, // Optional
    duration: 1.2,
    scrollTrigger: {
      trigger: ".tokenics-holder-2",
      start: "top 60%", // Starts closer to the center of the viewport
      toggleActions: "play none none none",
    }
  });