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

  previous.addEventListener('click', previousSlide)
  next.addEventListener('click', nextSlide)
  
}


window.addEventListener('DOMContentLoaded', init)