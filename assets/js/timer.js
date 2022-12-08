import Sound from './sound.js'

export default function Timer({
  minutesDisplay,
  secondsDisplay,
  timeTimerOut,
  resetControls
}) {
  const sound = Sound()
  let minutes = Number(minutesDisplay.textContent)

  function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }

  function plusMin() {
    minutes = minutes + 5
    updateTimerDisplay(minutes, 0)
  }

  function lessMin() {
    if (minutes <= 5) {
      alert('O tempo não pode ser menor que 5 minutos.')
    } else {
      minutes = minutes - 5
      updateTimerDisplay(minutes, 0)
    }
  }

  function resetTimer() {
    updateTimerDisplay(minutes, 0)
    clearInterval(timeTimerOut)
  }

  function countDown() {
    timeTimerOut = setTimeout(() => {
      let minutes = Number(minutesDisplay.textContent)
      let seconds = Number(secondsDisplay.textContent)

      if (minutes <= 0 && seconds <= 0) {
        resetControls()
        resetTimer()
        sound.kitchenTimerAudio()
        return
      }

      if (seconds <= 0) {
        seconds = 60
        --minutes
      }

      updateTimerDisplay(minutes, (seconds = String(seconds - 1)))

      countDown()
    }, 1000)
  }

  function hold() {
    clearTimeout(timeTimerOut)
  }

  return {
    countDown,
    plusMin,
    lessMin,
    resetTimer,
    hold
  }
}
