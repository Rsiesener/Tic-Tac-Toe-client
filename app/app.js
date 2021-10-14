const player1 = 'x'
const player2 = 'o'
let turn = 1

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
// use require without a reference to ensure a file is bundled
// require('./example')

const playerChoice = function (event) {
  console.log(event.target.id)
  if (turn % 2 === 1) {
    $(`#${event.target.id}`).text(player1)
  } else {
    $(`#${event.target.id}`).text(player2)
  }
  turn++
}

const reset = function () {
  $('#box-1').text('')
  $('#box-2').text('')
  $('#box-3').text('')
  $('#box-4').text('')
  $('#box-5').text('')
  $('#box-6').text('')
  $('#box-7').text('')
  $('#box-8').text('')
  $('#box-9').text('')
  turn = 1
  return turn
}

$(() => {
  $('#signUp').on('submit', authEvents.onSignUp)
  $('#signIn').on('submit', authEvents.onSignIn)
  $('#changePassword').on('submit', authEvents.onChangePassword)
  $('#signOut').on('click', authEvents.onSignOut)
  $('#container').on('click', playerChoice)
  $('#playBtn').on('click', authEvents.onPlay)
  $('#newGame').on('click', reset)
})
