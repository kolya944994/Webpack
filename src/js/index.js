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
// для header message
const buttonOpenMessage = document.querySelector('.nav__list_display-message')
const openSideMenu = document.querySelector('.menu-active-message')
const closeSideMenu = document.querySelector('.nav-active-message__button')
const blurAreaMessageHeader = document.querySelector(
  '.blurriness-message-header'
)

buttonOpenMessage.addEventListener('click', function () {
  openSideMenu.classList.add('menu-active-messagejs')
  blurAreaMessageHeader.classList.add('blurriness-message-headerjs')
})

closeSideMenu.addEventListener('click', function () {
  openSideMenu.classList.remove('menu-active-messagejs')
  blurAreaMessageHeader.classList.remove('blurriness-message-headerjs')
})

document.addEventListener('click', function (event) {
  if (
    !openSideMenu.contains(event.target) &&
    !buttonOpenMessage.contains(event.target)
  ) {
    openSideMenu.classList.remove('menu-active-messagejs')
    blurAreaMessageHeader.classList.remove('blurriness-message-headerjs')
  }
})
// для header telephone
const buttonOpenTelephone = document.querySelector('.nav__list_display-call')
const openSideMenuTelephone = document.querySelector('.menu-active-telephone')
const closeSideMenuTelephone = document.querySelector(
  '.nav-active-telephone__button'
)
const blurAreaTelephoneHeader = document.querySelector(
  '.blurriness-telephone-header'
)
buttonOpenTelephone.addEventListener('click', function () {
  openSideMenuTelephone.classList.add('menu-active-telephonejs')
  blurAreaTelephoneHeader.classList.add('blurriness-telephone-headerjs')
})

closeSideMenuTelephone.addEventListener('click', function () {
  openSideMenuTelephone.classList.remove('menu-active-telephonejs')
  blurAreaTelephoneHeader.classList.remove('blurriness-telephone-headerjs')
})

document.addEventListener('click', function (event) {
  if (
    !openSideMenuTelephone.contains(event.target) &&
    !buttonOpenTelephone.contains(event.target)
  ) {
    openSideMenuTelephone.classList.remove('menu-active-telephonejs')
    blurAreaTelephoneHeader.classList.remove('blurriness-telephone-headerjs')
  }
})
