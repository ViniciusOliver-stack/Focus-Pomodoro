export default function () {
  const soundBeach = new Audio('../assets/sounds/Beach.mp3')
  const soundFire = new Audio(
    'https://github.com/ViniciusOliver-stack/Rocketseat-Explorer/blob/main/projeto-06/assets/music/Lareira.wav?raw=true'
  )
  const soundJazz = new Audio('../assets/sounds/Jazz.mp3')
  const soundRestaurant = new Audio(
    'https://github.com/ViniciusOliver-stack/Rocketseat-Explorer/blob/main/projeto-06/assets/music/Cafeteria.wav?raw=true'
  )
  const soundLofi = new Audio('../assets/sounds/Lofi.mp3')
  const soundBird = new Audio('../assets/sounds/Birds.mp3')
  const soundForest = new Audio(
    'https://github.com/ViniciusOliver-stack/Rocketseat-Explorer/blob/main/projeto-06/assets/music/Floresta.wav?raw=true'
  )
  const soundRain = new Audio('../assets/sounds/Chuva.wav')

  const buttonPressAudio = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true'
  )
  const kitchenTimer = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true'
  )
  const soundAlert = new Audio(
    'https://github.com/ViniciusOliver-stack/Rocketseat-Explorer/blob/main/projeto-06/assets/music/Alert.wav?raw=true'
  )

  function pressButtonBeach(e) {
    if (e.target.classList.contains('active')) {
      soundBeach.pause()
      e.target.classList.remove('active')
    } else {
      soundBeach.play()
      soundBeach.loop = true
      e.target.classList.add('active')
    }
  }

  function pressButtonFire(e) {
    if (e.target.classList.contains('active')) {
      soundFire.pause()
      e.target.classList.remove('active')
    } else {
      soundFire.play()
      soundFire.loop = true
      e.target.classList.add('active')
    }
  }

  function pressButtonJazz(e) {
    if (e.target.classList.contains('active')) {
      soundJazz.pause()
      e.target.classList.remove('active')
    } else {
      soundJazz.play()
      soundJazz.loop = true
      e.target.classList.add('active')
    }
  }

  function pressButtonRestaurant(e) {
    if (e.target.classList.contains('active')) {
      soundRestaurant.pause()
      e.target.classList.remove('active')
    } else {
      soundRestaurant.play()
      soundRestaurant.loop = true
      e.target.classList.add('active')
    }
  }

  function pressButtonLofi(e) {
    if (e.target.classList.contains('active')) {
      soundLofi.pause()
      e.target.classList.remove('active')
    } else {
      soundLofi.play()
      soundLofi.loop = true
      e.target.classList.add('active')
    }
  }

  function pressButtonBird(e) {
    if (e.target.classList.contains('active')) {
      soundBird.pause()
      e.target.classList.remove('active')
    } else {
      soundBird.play()
      soundBird.loop = true
      e.target.classList.add('active')
    }
  }

  function pressButtonForest(e) {
    if (e.target.classList.contains('active')) {
      soundForest.pause()
      e.target.classList.remove('active')
    } else {
      soundForest.play()
      soundForest.loop = true
      e.target.classList.add('active')
    }
  }

  function pressButtonRain(e) {
    if (e.target.classList.contains('active')) {
      soundRain.pause()
      e.target.classList.remove('active')
    } else {
      soundRain.play()
      soundRain.loop = true
      e.target.classList.add('active')
    }
  }

  function kitchenTimerAudio() {
    kitchenTimer.play()
  }

  return {
    soundBeach,
    soundFire,
    soundJazz,
    soundRestaurant,
    soundLofi,
    soundBird,
    soundForest,
    soundRain,
    buttonPressAudio,
    kitchenTimer,
    soundAlert,
    pressButtonBeach,
    pressButtonBird,
    pressButtonFire,
    pressButtonForest,
    pressButtonJazz,
    pressButtonRestaurant,
    pressButtonLofi,
    pressButtonRain,
    kitchenTimerAudio
  }
}
