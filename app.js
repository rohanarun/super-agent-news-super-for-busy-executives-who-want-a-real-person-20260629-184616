(function () {
  function initAnimations() {
    if (!window.gsap) return;
    gsap.from('.tile', {
      opacity: 0,
      y: 20,
      stagger: 0.08,
      duration: 0.6,
      ease: 'power2.out'
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnimations);
  } else {
    initAnimations();
  }
})();
