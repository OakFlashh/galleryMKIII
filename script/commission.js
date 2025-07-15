
document.addEventListener("DOMContentLoaded", function () {
  let isOpen = false;
  let isAnimating = false;

  const commissions = document.querySelector(".commissions");
  const backButton = document.querySelector(".backButton");

  const movingElements = [
    document.querySelector(".commSheet"),
    document.querySelector(".backButton"),
  ];

  movingElements.forEach(el => {
    if (el) {
      el.style.transform = "translateY(-100vh)";
      el.style.transition = "none";
    }
  });

  requestAnimationFrame(() => {
    movingElements.forEach(el => {
      if (el) el.style.transition = "transform 1s ease-in-out";
    });
  });

  commissions.addEventListener("click", () => {
    if (isOpen || isAnimating) return;
    isAnimating = true;

    movingElements.forEach(el => {
      if (el) el.style.transform = "translateY(-1vh)";
    });

    commissions.style.pointerEvents = "none";

    setTimeout(() => {
      isOpen = true;
      isAnimating = false;
    }, 1000);
  });

  backButton.addEventListener("click", () => {
    if (!isOpen || isAnimating) return;
    isAnimating = true;

    movingElements.forEach(el => {
      if (el) el.style.transform = "translateY(-100vh)";
    });

    setTimeout(() => {
      commissions.style.pointerEvents = "auto";
      isOpen = false;
      isAnimating = false;
    }, 1000);
  });
});

