export default function Controls({ btnPlay, btnPause }) {
  function play() {
    btnPlay.classList.add('hide')
    btnPause.classList.remove('hide')
  }

  function pause() {
    btnPause.classList.add('hide')
    btnPlay.classList.remove('hide')
  }

  function reset() {
    btnPause.classList.add('hide')
    btnPlay.classList.remove('hide')
  }

  return {
    play,
    pause,
    reset
  }
}
