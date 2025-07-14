  window.addEventListener("DOMContentLoaded", () => {
    // Check if animations have already run in this session
    if (!sessionStorage.getItem("animationsPlayed")) {
      document.querySelectorAll('.rectangleA, .rectangleB, .rectangleC, .Pixiv, .Drawings, .Photos, .Github, #darkMode')
        .forEach(el => el.classList.add("animated"));

      // Mark animations as played
      sessionStorage.setItem("animationsPlayed", "true");
    }
  });

  