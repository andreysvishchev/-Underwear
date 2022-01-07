const favBtn = document.querySelectorAll('.favorite')
const card = document.querySelectorAll('.product')

favBtn.forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault()
    const self = e.currentTarget

    self.classList.toggle('active')
  })
});

Ellipsis({
  lines: 1
});
