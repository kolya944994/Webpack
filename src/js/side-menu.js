const buttonBurger = document.querySelector('.nav__list_display-burger')
const addSideMenu = document.querySelector('.container')

buttonBurger.addEventListener('click', function () {
  addSideMenu.classList.add('containerjs')
})

const buttonCloseSideMenu = document.querySelector(
  '.nav-side-menu__button_burger-display'
)
console.log(buttonCloseSideMenu)
buttonCloseSideMenu.addEventListener('click', function () {
  addSideMenu.classList.remove('containerjs')
})

document.addEventListener('click', function (event) {
  if (
    !addSideMenu.contains(event.target) &&
    !buttonBurger.contains(event.target)
  ) {
    addSideMenu.classList.remove('containerjs')
  }
})
const buttonMessage = document.querySelector('.contact__link_display-message')
const buttonTelephone = document.querySelector(
  '.contact__link_display-telephone'
)

if (buttonMessage) {
  buttonMessage.addEventListener('click', function () {
    addSideMenu.classList.remove('containerjs')
  })
}

if (buttonTelephone) {
  buttonTelephone.addEventListener('click', function () {
    addSideMenu.classList.remove('containerjs')
  })
}
//для переключения между списком
document.addEventListener('DOMContentLoaded', () => {
  const menuItems = document.querySelectorAll('.catalog__link')

  menuItems.forEach((item) => {
    item.addEventListener('click', function (e) {
      e.preventDefault()

      menuItems.forEach((link) => link.classList.remove('active'))

      this.classList.add('active')
    })
  })

  const activeItem = document.querySelector('.catalog__link.active')
  if (!activeItem && menuItems.length > 0) {
    menuItems[0].classList.add('active')
  }
})
