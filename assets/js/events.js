import {
  btnStop,
  btnPlus,
  btnPlay,
  btnPause,
  btnLess,
  btnSoundOn,
  btnSoundOff
} from './elements.js'

export default function Events({ timer, controls, sound }) {
  btnPlay.addEventListener('click', () => {
    timer.countDown()
    controls.play()
    sound.buttonPressAudio.play()
  })

  btnPause.addEventListener('click', () => {
    timer.hold()
    controls.pause()
    sound.buttonPressAudio.play()
  })

  btnStop.addEventListener('click', () => {
    timer.resetTimer()
    controls.reset()
    sound.buttonPressAudio.play()
  })

  btnPlus.addEventListener('click', () => {
    timer.plusMin()
    sound.buttonPressAudio.play()
  })

  btnLess.addEventListener('click', e => {
    timer.lessMin()
    sound.buttonPressAudio.play()
  })

  btnSoundOn.addEventListener('click', () => {
    btnSoundOn.classList.add('hide')
    btnSoundOff.classList.remove('hide')

    sound.soundBeach.pause()
    sound.soundFire.pause()
    sound.soundJazz.pause()
    sound.soundRestaurant.pause()
    sound.soundLofi.pause()
    sound.soundBird.pause()
    sound.soundForest.pause()
    sound.soundRain.pause()
  })

  btnSoundOff.addEventListener('click', () => {
    btnSoundOff.classList.add('hide')
    btnSoundOn.classList.remove('hide')
    sound.buttonPressAudio.play()
  })
}
