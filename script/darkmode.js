const svgToggleBtn = document.getElementById('darkMode');
let isSvgToggled = false;

svgToggleBtn.addEventListener('click', () => {
  const bg = document.querySelector('.mainRectangle .background');

  document.querySelectorAll('img[src$=".svg"]').forEach(img => {
    if (img.src.includes('SIAH.svg')) return;
    img.classList.add('fade-out');
  });
  bg.classList.add('fade-out');

  setTimeout(() => {
    document.querySelectorAll('img[src$=".svg"]').forEach(img => {
      if (img.src.includes('SIAH.svg')) return;

      const original = img.dataset.originalSrc || img.src;
      img.dataset.originalSrc = original;
      img.src = isSvgToggled
        ? original
        : original.replace(/\.svg$/, '1.svg');

      img.classList.remove('fade-out');
    });

    const originalBg = bg.dataset.originalBg || 'url("/vectors/Union.svg")';
    bg.dataset.originalBg = originalBg;
    bg.style.backgroundImage = isSvgToggled
      ? originalBg
      : 'url("/vectors/Union1.svg")';

    bg.classList.remove('fade-out');
    isSvgToggled = !isSvgToggled;
  }, 200);
});

const darkModeToggle = document.getElementById('darkMode');
const commissions = document.querySelector('.commissions');
let isDark = false;

darkModeToggle.addEventListener('click', () => {
  if (isDark) {
    // Going back to light mode — add 100ms delay
    setTimeout(() => {
      commissions.style.color = '#E06B5B';
      isDark = false;
    }, 200);
  } else {
    // Going into dark mode — change immediately
    commissions.style.color = '#171717';
    isDark = true;
  }
});