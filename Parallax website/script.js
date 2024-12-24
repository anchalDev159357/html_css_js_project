window.addEventListener('scroll', function () {
    const parallaxSection = document.querySelector('.parallax-section');
    const scrollPosition = window.scrollY;

    parallaxSection.style.backgroundPositionY = -scrollPosition * 0.5 + 'px';
});
