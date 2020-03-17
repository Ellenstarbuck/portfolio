function init() {

  const playButton = document.querySelector('#play-btn')
  const stopButton = document.querySelector('#stop-btn')
  console.log(playButton)
  const audio = document.querySelector('audio')
  
  function playSound () {
    console.log('play the sound now')
    audio.src = 'sounds/strokes.mp3'
    audio.play()
  }

  function stopSound () {
    audio.pause()
  }


  //event listeners for the button
  playButton.addEventListener('click', playSound)
  stopButton.addEventListener('click', stopSound)
}


window.addEventListener('DOMContentLoaded', init)