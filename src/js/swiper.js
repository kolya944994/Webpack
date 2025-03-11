let swiperInstances = []

function manageSwipers() {
  const screenWidth = window.innerWidth
  const sliders = document.querySelectorAll('.swiper')

  if (screenWidth <= 767) {
    sliders.forEach((slider, index) => {
      if (!swiperInstances[index]) {
        swiperInstances[index] = new Swiper(slider, {
          slidesPerView: 1.2,
          spaceBetween: 16,
          loop: true,
          pagination: {
            el: slider.querySelector('.swiper-pagination'),
            clickable: true
          }
        })
      }
    })
  } else {
    swiperInstances.forEach((instance, index) => {
      if (instance) {
        instance.destroy(true, true)
        swiperInstances[index] = null
      }
    })
  }
}

manageSwipers()
window.addEventListener('resize', manageSwipers)
