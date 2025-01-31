const textPhone = document.querySelector('.textPhone')
const arrowPhone = document.querySelector('.arrowPhone')

textPhone.addEventListener('mouseover', () => {
  textPhone.classList.add('textPhonecss')
  arrowPhone.classList.add('arrowPhonecss')
})

textPhone.addEventListener('mouseout', () => {
  textPhone.classList.remove('textPhonecss')
  arrowPhone.classList.remove('arrowPhonecss')
})

const footerText = document.querySelector('.textfooter')
const footerArrow = document.querySelector('.arrowfooter')

footerText.addEventListener('mouseover', () => {
  footerText.classList.add('footerTextcss')
  footerArrow.classList.add('footerArrowcss')
})

footerText.addEventListener('mouseout', () => {
  footerText.classList.remove('footerTextcss')
  footerArrow.classList.remove('footerArrowcss')
})
