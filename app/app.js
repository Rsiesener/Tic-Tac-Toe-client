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
    $(`#${event.target.id}`).html(player1)
  } else {
    $(`#${event.target.id}`).html(player2)
  }
  turn++
}

$(() => {
  $('#signUp').on('submit', authEvents.onSignUp)
  $('#signIn').on('submit', authEvents.onSignIn)
  $('#changePassword').on('submit', authEvents.onChangePassword)
  $('#signOut').on('click', authEvents.onSignOut)
  $('#container').on('click', playerChoice)
})
