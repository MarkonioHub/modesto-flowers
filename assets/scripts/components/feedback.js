const slideArray = document.querySelectorAll('.feedback__slide_js')
const nextButton = document.querySelector('.feedback__next_js')
const backButton = document.querySelector('.feedback__back_js')

let activeIndex = 0

if (slideArray.length && nextButton) slideArrayInit()

function slideArrayInit () {
  nextButton.addEventListener('click', nextSlide)
  backButton.addEventListener('click', prevSlide)
}

function nextSlide () {
  if (activeIndex < slideArray.length) activeIndex++
  setActiveSlide()
}

function prevSlide () {
  if (activeIndex > 0) activeIndex--
  setActiveSlide()
}

function setActiveSlide () {
  const oldActiveSlide = document.querySelector('.feedback__slide_active')
  if (oldActiveSlide) oldActiveSlide.classList.remove('feedback__slide_active')
  slideArray[activeIndex].classList.add('feedback__slide_active')
}
