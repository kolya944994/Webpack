import '../scss/style.scss'
import './swiper.js'
import './active-menu.js'
import './side-menu.js'
// для menu-brends
const button = document.querySelector('.additional-menu__button')
const brand = document.querySelector('.swiper-wrapper')

button.addEventListener('click', function () {
  button.classList.toggle('additional-menu__button_click')
  brand.classList.toggle('swiper-wrapperjs')
  if (brand.classList.contains('swiper-wrapperjs')) {
    button.textContent = 'Скрыть'
  } else {
    button.textContent = 'Показать Все'
  }
})
//для menu-technique
const buttonMenuTechnique = document.querySelector(
  '.additional-menu-menu-technique__button'
)
const brandMenuTechnique = document.querySelector(
  '.swiper-wrapper-menu-technique'
)

buttonMenuTechnique.addEventListener('click', function () {
  buttonMenuTechnique.classList.toggle(
    'additional-menu-menu-technique__button_click'
  )
  brandMenuTechnique.classList.toggle('swiper-wrapper-menu-techniquejs')
  if (
    brandMenuTechnique.classList.contains('swiper-wrapper-menu-techniquejs')
  ) {
    buttonMenuTechnique.textContent = 'Скрыть'
  } else {
    buttonMenuTechnique.textContent = 'Показать Все'
  }
})
//для header
const arrowOpen = document.querySelector('.description__dop-menu')
const contentHidden = document.querySelector('.description__text_display')
console.log(contentHidden)

arrowOpen.addEventListener('click', function () {
  contentHidden.classList.toggle('description__text_display')
  arrowOpen.classList.toggle('description__dop-menujs')

  if (arrowOpen.classList.contains('description__dop-menujs')) {
    arrowOpen.textContent = 'Скрыть'
  } else {
    arrowOpen.textContent = 'Читать дальше'
  }
})
