function init() {

  const previous = document.querySelector('.prev')
  const next = document.querySelector('.next')

  var slideIndex = 1

  // Next/previous controls
  

  function nextSlide() {
    showSlides(slideIndex += 1)
    
  }

  function previousSlide() {
    showSlides(slideIndex -= 1)
  }


  function showSlides(n) {
    var i
    var slides = document.querySelectorAll('.mySlides')
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
      slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none'
    }
    slides[slideIndex - 1].style.display = 'block'
    
  }

  showSlides(slideIndex)

  const navBurger = document.querySelector('.navbar-menu')
  const navBurgerMenu = document.querySelector('.navbar-burger')
  
  function toggleBurger(){
    navBurger.classList.toggle('is-active')
  }


  var dropdown = document.querySelector('.dropdown')
  var body = document.querySelector('body')
  console.log(body)
  let show = false 



  function dropdownToggle() {
    if (!show) {
      dropdown.classList.toggle('is-active')
      show = true
    }
  }

  function bodyClick() {
    if (show) {
      dropdown.classList.toggle('is-active')
    }
  }
  


  previous.addEventListener('click', previousSlide)
  next.addEventListener('click', nextSlide)
  navBurgerMenu.addEventListener('click', toggleBurger)
  dropdown.addEventListener('click', dropdownToggle)
  body.addEventListener('click', bodyClick)

  
}


window.addEventListener('DOMContentLoaded', init)