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


  
  
  



  let show = false 

  var dropdown = document.querySelector('.dropdown')

  function bodyClick(e) {
    if (dropdown.contains(e.target)) {
      dropdown.classList.toggle('is-active')
      show = !show
    } else {
      dropdown.classList.remove('is-active')
      show = false
    }
    
  }
  
  


  previous.addEventListener('click', previousSlide)
  next.addEventListener('click', nextSlide)
  navBurgerMenu.addEventListener('click', toggleBurger)
  document.addEventListener('click', bodyClick)

  
}


window.addEventListener('DOMContentLoaded', init)