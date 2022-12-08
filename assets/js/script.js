import Timer from './timer.js'
import Controls from './control.js'
import Sound from './sound.js'
import eventSound from './eventSound.js'
import Events from './events.js'
import ThemeBtn from './ThemeBtn.js'

import {
  btnPlay,
  btnPause,
  minutesDisplay,
  secondsDisplay
} from './elements.js'

//Variáveis
const messageTime = document.querySelector('.message-time')
const messageName = document.querySelector('.message-name')

let timeTimerOut
const sound = Sound()
const controls = Controls({
  btnPlay,
  btnPause
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  timeTimerOut,
  resetControls: controls.reset
})

ThemeBtn()
eventSound()
Events({ timer, controls, sound })

const phrases = [
  'Os problemas são oportunidades para se mostrar o que sabe.',
  'Nossos fracassos, às vezes, são mais frutíferos do que os êxitos.',
  'Tente de novo. Fracasse de novo. Mas fracasse melhor',
  'É costume de um tolo, quando erra, queixar-se dos outros. É costume de um sábio queixar-se de si mesmo',
  'O verdadeiro heroísmo consiste em persistir por mais um momento, quando tudo parece perdido'
]

const random = Math.floor(Math.random() * phrases.length)

function getHours() {
  const date = new Date().toLocaleTimeString()
  if (date >= '00:00:00' && date <= '06:00:00') {
    messageTime.textContent = 'Boa madrugada -'
    messageName.textContent = ' ' + phrases[random]
  } else if (date >= '06:00:00' && date <= '12:00:00') {
    messageTime.textContent = 'Bom dia -'
    messageName.textContent = ' ' + phrases[random]
  } else if (date >= '12:00:00' && date <= '18:00:00') {
    messageTime.textContent = 'Boa tarde -'
    messageName.textContent = ' ' + phrases[random]
  } else if (date >= '18:00:00' && date <= '24:00:00') {
    messageTime.textContent = 'Boa noite -'
    messageName.textContent = ' ' + phrases[random]
  }
}

getHours()
