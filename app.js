const play_game_btn = document.getElementById('start-game')
const screensEL = document.querySelectorAll('.screen')
const chooseBtn = document.querySelectorAll('.sword')
const game_container = document.getElementById('game-container')
const scoreEL = document.getElementById('score')
const timeEL = document.getElementById('time')
const messageEL = document.getElementById('message')
const audio = document.getElementById('audio-intro')
const audioBtn = document.getElementById('toggle-sound')



let score = 0
let seconds = 0

// const audio = new Audio("./Songs/intro.mp3")
audio.play()
audio.volume = 0.2

audioBtn.addEventListener('click', () => {
  audioBtn.classList.toggle('off')
  if (audioBtn.classList.contains('off')) {
    audioBtn.innerText = 'SOUND Off'
    audio.pause()
  } else {
    audio.play()
    audioBtn.innerText = 'SOUND ON'

  }
})


// Play game section
play_game_btn.addEventListener('click', () => screensEL[0].classList.add('up'))

chooseBtn.forEach(sword => {
  console.log(sword)
  sword.addEventListener('click', () => {
    const img = sword.querySelector('img')
    const src = img.getAttribute('src')
    const alt = img.getAttribute('alt')
    if (alt === 'Sword1') {
      document.body.style.cursor = 'url(./imgs/Test/sword1-small.png), auto'
    } else {
      document.body.style.cursor = 'url(./imgs/Test/sword2-small.png), auto'
    }
    screensEL[1].classList.add('up')
    setTimeout(createEnemy, 1000)
    startGame()
  })
})

function startGame() {
  setInterval(increaseTime, 1000)
}

function increaseTime() {
  let m = Math.floor(seconds / 60)
  let s = seconds % 60
  m = m < 10 ? `0${m}` : m
  s = s < 10 ? `0${s}` : s
  timeEL.innerHTML = `Time: ${m}:${s}`
  seconds++
}

function createEnemy() {
  const enemy = document.createElement('div')
  enemy.classList.add('enemy')
  const { x, y } = getRandomLocation()
  enemy.style.top = `${y}px`
  enemy.style.left = `${x}px`
  enemy.innerHTML = `
  <img src="./imgs/parshendi.webp" alt="" />`
  game_container.appendChild(enemy)
  enemy.addEventListener('click', killEnemy)
}

function getRandomLocation() {
  const width = window.innerWidth
  const height = window.innerHeight
  const x = Math.random() * (width - 200) + 100
  const y = Math.random() * (height - 200) + 100
  return { x, y }
}

function killEnemy() {
  increaseScore()
  this.classList.add('dead')
  setTimeout(() => this.remove(), 1000)
  addMoreEnemies()
}

function addMoreEnemies() {
  setTimeout(createEnemy, 1000)
  setTimeout(createEnemy, 1500)
}

function increaseScore() {
  score++
  scoreEL.innerHTML = `Score: ${score}`
  if (score > 1) {
    messageEL.classList.add('visible')
    messageEL.innerText = `You kill 10 enemies, now things will get more difficult!`
    addMoreEnemies()

  }

  if (score > 29) {
    messageEL.innerText = "You didn't give up yet? Sorry, but this is an impossible game, you cannot to win"

    setTimeout(() => messageEL.remove(), 5000)
  }

}
