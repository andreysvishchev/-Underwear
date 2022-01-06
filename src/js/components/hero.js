var swiper = new Swiper(".hero-slider", {
  speed: 1000,
  pagination: {
    el: ".hero-slider__buttons",
    clickable: true,
  },
});

const shopLink = document.querySelectorAll('.hero-slider__link--shop')
const fittingLink = document.querySelectorAll('.hero-slider__link--fitting')

fittingLink.forEach(el => {
  el.addEventListener('mousemove', (e) => {
    const self = e.currentTarget;

    self.classList.add('active')

    if (self.classList.contains('active')) {
      shopLink.forEach(el => {
        el.classList.remove('active')
      });
    }
  })

  el.addEventListener('mouseout', (e) => {
    const self = e.currentTarget;

    self.classList.remove('active')

    shopLink.forEach(el => {
      el.classList.add('active')
    });
  })
});
