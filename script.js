 // typing effect
    const words = [
      "Front-End Developer",
      "React Developer",
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typing = document.getElementById("typing");

    function typeEffect() {
      const currentWord = words[wordIndex];

      if (!isDeleting) {
        typing.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
          isDeleting = true;
          setTimeout(typeEffect, 1200);
          return;
        }
      } else {
        typing.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
        }
      }

      setTimeout(typeEffect, isDeleting ? 55 : 95);
    }

    typeEffect();

    // reveal animation
    const reveals = document.querySelectorAll(".reveal");

    function revealOnScroll() {
      reveals.forEach((item) => {
        const windowHeight = window.innerHeight;
        const elementTop = item.getBoundingClientRect().top;
        const visiblePoint = 120;

        if (elementTop < windowHeight - visiblePoint) {
          item.classList.add("active");
        }
      });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    // mobile menu
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("show");
      menuToggle.textContent = navMenu.classList.contains("show") ? "✕" : "☰";
    });

    document.querySelectorAll(".nav-menu a").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("show");
        menuToggle.textContent = "☰";
      });
    });

    // dark / light mode
    const themeToggle = document.getElementById("themeToggle");
    const body = document.body;

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      body.classList.add("light-mode");
      themeToggle.textContent = "☀️";
    }

    themeToggle.addEventListener("click", () => {
      body.classList.toggle("light-mode");

      if (body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
        themeToggle.textContent = "☀️";
      } else {
        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "🌙";
      }
    });