document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".topBar a");

  links.forEach(link => {
    const span = link.querySelector("span");

    link.addEventListener("mouseenter", () => {
      span.style.transform = "translateY(-0.3vw)";
    });

    link.addEventListener("mouseleave", () => {
      span.style.transform = "translateY(0)";
    });
  });
});
