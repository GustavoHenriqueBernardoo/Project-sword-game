const play_game_btn = document.getElementById('start-game')
const screensEL = document.querySelectorAll('.screen')
const chooseBtn = document.querySelectorAll('.sword')
const game_container = document.getElementById('game-container')
const scoreEL = document.getElementById('score')
const timeEL = document.getElementById('time')
const messageEL = document.getElementById('message')

if (window.performance) {
  console.log('enter here')
  screensEL.forEach(screen => screen.classList.remove('up'))
}

let score = 0
let seconds = 0



play_game_btn.addEventListener('click', () => {
  console.log(screensEL[0])
  screensEL[0].classList.add('up')
})

chooseBtn.forEach(sword => {
  sword.addEventListener('click', () => {
    const img = sword.querySelector('img')
    const src = img.getAttribute('src')
    const alt = img.getAttribute('alt')
    // document.body.style.cursor = 'url(./imgs/small.png), auto'
    // screensEL[1].classList.add('up')
    setInterval(createEnemy, 1000)
    startGame()
  })
})

function createEnemy() {

}

function startGame() {

}