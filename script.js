gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero h1", {
  y: 80,
  opacity: 0,
  duration: 1
});

gsap.from(".hero p", {
  y: 40,
  opacity: 0,
  delay: 0.3
});

gsap.utils.toArray(".section").forEach(section => {
  gsap.from(section, {
    scrollTrigger: section,
    opacity: 0,
    y: 60,
    duration: 1
  });
});
