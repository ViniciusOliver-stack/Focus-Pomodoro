import Sound from './sound.js'

const sound = Sound()

export default function eventSound() {
  const beachSound = document.querySelector('.beach')
  const fireSound = document.querySelector('.fire')
  const jazzSound = document.querySelector('.jazz')
  const restaurantSound = document.querySelector('.restaurant')
  const lofiSound = document.querySelector('.lofi')
  const birdSound = document.querySelector('.bird')
  const forestSound = document.querySelector('.forest')
  const rainSound = document.querySelector('.rain')

  beachSound.addEventListener('click', function (e) {
    sound.pressButtonBeach(e)
  })

  fireSound.addEventListener('click', function (e) {
    sound.pressButtonFire(e)
  })

  jazzSound.addEventListener('click', function (e) {
    sound.pressButtonJazz(e)
  })

  restaurantSound.addEventListener('click', function (e) {
    sound.pressButtonRestaurant(e)
  })

  lofiSound.addEventListener('click', function (e) {
    sound.pressButtonLofi(e)
  })

  birdSound.addEventListener('click', function (e) {
    sound.pressButtonBird(e)
  })

  forestSound.addEventListener('click', function (e) {
    sound.pressButtonForest(e)
  })

  rainSound.addEventListener('click', function (e) {
    sound.pressButtonRain(e)
  })
}
