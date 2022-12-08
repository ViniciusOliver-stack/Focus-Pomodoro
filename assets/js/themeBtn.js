export default function ThemeBtn() {
  let themeBtn = document.querySelectorAll('.theme-buttons')

  function setBodyTheme(link) {
    let getBody = document.querySelector('body')
    getBody.style.backgroundImage = 'url(' + link + ')'
    getBody.style.backgroundRepeat = 'no-repeat'
    getBody.style.backgroundSize = 'cover'
    getBody.style.backgroundPosition = 'center'
  }

  themeBtn.forEach(color => {
    color.addEventListener('click', () => {
      let dataColor = color.getAttribute('data-color')
      document
        .querySelector(':root')
        .style.setProperty('--main-color', dataColor)

      if (dataColor === '#ffff') {
        document.querySelector(':root').style.setProperty('--fc-dark', '#000')
        setBodyTheme('#fff')
      } else if (
        dataColor === '#000' ||
        dataColor == '#ffc837' ||
        dataColor === '#1d976'
      ) {
        document.querySelector(':root').style.setProperty('--fc-dark', '#fff')
        setBodyTheme('#000' || '#ffc837')
      } else if (dataColor === 'gif-01') {
        setBodyTheme(
          'https://media0.giphy.com/media/fUpvkRuLKE4xMBJLvH/giphy.gif?cid=ecf05e47vf85xdvdcg2j6z2xo5k5r6k804mx463v7swrvtki&rid=giphy.gif&ct=g'
        )
        document.querySelector(':root').style.setProperty('--fc-dark', '#fff')
      } else if (dataColor === 'gif-02') {
        setBodyTheme(
          'https://media4.giphy.com/media/vMSXa7KFGx49aeeXhe/giphy.gif?cid=790b7611e43b8f58070641fd1dfce3eb636f34cae6886b27&rid=giphy.gif&ct=g'
        )
        document.querySelector(':root').style.setProperty('--fc-dark', '#fff')
      } else if (dataColor === 'gif-03') {
        setBodyTheme(
          'https://media4.giphy.com/media/ssq8oGi0pPO5rMLrEV/giphy.gif?cid=ecf05e47cplv2gp3tslq0pcpewwqgnippxt6es9akpd0jpej&rid=giphy.gif&ct=g'
        )
        document.querySelector(':root').style.setProperty('--fc-dark', '#fff')
      } else if (dataColor === 'gif-04') {
        setBodyTheme(
          'https://media4.giphy.com/media/1zgzISaYrnMAYRJJEr/giphy.gif?cid=ecf05e47czfqfrjyhvszaddbrgpuw7rozkbgm810mf81rm7z&rid=giphy.gif&ct=g'
        )
        document.querySelector(':root').style.setProperty('--fc-dark', '#fff')
      }
    })
  })
}
