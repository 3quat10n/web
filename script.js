// Hide loader after 2 seconds
setTimeout(() => {
  document.getElementById("loader").style.display = "none";
}, 2000);

document.addEventListener("DOMContentLoaded", function() {
  
  // Typing effect for "Equation"
  const textElement1 = document.querySelector('.typing-effecta');
  const word1 = "Equation"; // The word to type
  let charIndex1 = 0;

  function typeWriter1() {
    textElement1.textContent = word1.substring(0, charIndex1); // Display part of the word
    charIndex1++;

    if (charIndex1 <= word1.length) {
      setTimeout(typeWriter1, 200); // Typing speed for "Equation"
    }
  }

  setTimeout(typeWriter1, 2700); // Start typing after 2.7 second delay

  // Typing effect for the list of words
  const textElement2 = document.querySelector('.typing-effect'); // Same element used for both typing effects
  const words = ["Computer Enthusiast", "Aerospace Enthusiast", "X2I Leader", "Cyber Champion"];
  let wordIndex = 0;
  let charIndex2 = 0;
  let currentWord = words[wordIndex];
  let isDeleting = false;

  function typeWriter2() {
    if (isDeleting) {
      textElement2.textContent = currentWord.substring(0, charIndex2);
      charIndex2--;
      if (charIndex2 === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length; // Loop through words
        currentWord = words[wordIndex];
      }
    } else {
      textElement2.textContent = currentWord.substring(0, charIndex2);
      charIndex2++;
      if (charIndex2 === currentWord.length) {
        isDeleting = true;
      }
    }

    const typingSpeed = isDeleting ? 100 : 200; // Slower typing speed when deleting
    setTimeout(typeWriter2, typingSpeed); // Recursively call the function
  }

  setTimeout(typeWriter2, 3500); // Start the second typing effect after 4 seconds
});

// Initialize Particles.js
particlesJS("particles-js", {
  particles: {
    number: { value: 170, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.5, random: true },
    size: { value: 5, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1.5,
    },
    move: {
      enable: true,
      speed: 4,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: true,
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: {
        enable: true,
        mode: "push",
      },
    },
    modes: {
      repulse: { distance: 100, duration: 0.5 },
      push: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});

// Function to enforce the particle limit
function enforceParticleLimit() {
  let pJS = window.pJSDom[0]?.pJS;
  if (!pJS) return;
  
  let particles = pJS.particles.array;
  if (particles.length > 200) {
    particles.splice(0, particles.length - 200);
  }
}

// Check and enforce the limit periodically
setInterval(enforceParticleLimit, 500);
