const play_game_btn = document.getElementById('start-game')
const screensEL = document.querySelectorAll('.screen')

console.log(screensEL)

screensEL[0].classList.add('up')

// play_game_btn.addEventListener('click', () => {
//   screensEL.forEach(screen =>
//     screen.classList.add('up'))
// })