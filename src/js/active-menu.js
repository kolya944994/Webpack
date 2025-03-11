//при нажатии на сообщение
const buttonMessage = document.querySelector('.contact__link_display-message')
const activeMenu = document.querySelector('.container-active-message')
const buttonCloseMessage = document.querySelector('.nav-active-message__button')
const blurAreaMessage = document.querySelector('.blurriness-message')

buttonMessage.addEventListener('click', function () {
  blurAreaMessage.classList.add('blurriness-messagejs')
  activeMenu.classList.add('container-active-messagejs')
})

buttonCloseMessage.addEventListener('click', function () {
  activeMenu.classList.remove('container-active-messagejs')
  blurAreaMessage.classList.remove('blurriness-messagejs')
})
document.addEventListener('click', function (event) {
  if (
    !activeMenu.contains(event.target) &&
    !buttonMessage.contains(event.target)
  ) {
    activeMenu.classList.remove('container-active-messagejs')
    blurAreaMessage.classList.remove('blurriness-messagejs')
  }
})
// при нажатии на трубку
const buttonTelephone = document.querySelector(
  '.contact__link_display-telephone'
)
const activeMenuTelephone = document.querySelector(
  '.container-active-telephone'
)
const buttonCloseTelephone = document.querySelector(
  '.nav-active-telephone__button'
)
const blurAreaTelephone = document.querySelector('.blurriness-telephone')

buttonTelephone.addEventListener('click', function () {
  activeMenuTelephone.classList.add('container-active-telephonejs')
  blurAreaTelephone.classList.add('blurriness-telephonejs')
})

buttonCloseTelephone.addEventListener('click', function () {
  activeMenuTelephone.classList.remove('container-active-telephonejs')
  blurAreaTelephone.classList.remove('blurriness-telephonejs')
})
document.addEventListener('click', function (event) {
  if (
    !activeMenuTelephone.contains(event.target) &&
    !buttonTelephone.contains(event.target)
  ) {
    activeMenuTelephone.classList.remove('container-active-telephonejs')
    blurAreaTelephone.classList.remove('blurriness-telephonejs')
  }
})
