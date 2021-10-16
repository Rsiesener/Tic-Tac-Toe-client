const player1 = 'x'
const player2 = 'o'
let turn = 1
let arr = ['', '', '', '', '', '', '', '', '']
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
// use require without a reference to ensure a file is bundled
// require('./example')

const playerChoice = function (event) {
  console.log(event)
  if ($(`#${event.target.id}`).is(':empty') && turn % 2 === 1) {
    $(`#${event.target.id}`).html(player1)
    if (event.target.id === 'box-1') {
      arr[0] = 'x'
      turn++
      console.log(arr)
      return arr
    } else if (event.target.id === 'box-2') {
      arr[1] = 'x'
      turn++
      console.log(arr)
      return arr
    } else if (event.target.id === 'box-3') {
      arr[2] = 'x'
      turn++
      console.log(arr)
      return arr
    } else if (event.target.id === 'box-4') {
      arr[3] = 'x'
      turn++
      console.log(arr)
      return arr
    } else if (event.target.id === 'box-5') {
      arr[4] = 'x'
      turn++
      console.log(arr)
      return arr
    } else if (event.target.id === 'box-6') {
      arr[5] = 'x'
      turn++
      console.log(arr)
      return arr
    } else if (event.target.id === 'box-7') {
      arr[6] = 'x'
      turn++
      console.log(arr)
      return arr
    } else if (event.target.id === 'box-8') {
      arr[7] = 'x'
      turn++
      console.log(arr)
      return arr
    } else if (event.target.id === 'box-9') {
      arr[8] = 'x'
      turn++
      console.log(arr)
      return arr
    }
  } else if ($(`#${event.target.id}`).is(':empty') && turn % 2 === 0) {
    $(`#${event.target.id}`).html(player2)
    if (event.target.id === 'box-1') {
      arr[0] = 'o'
      turn++
      console.log(arr)
      return arr
    } else if (event.target.id === 'box-2') {
      arr[1] = 'o'
      turn++
      console.log(arr)
      return arr
    } else if (event.target.id === 'box-3') {
      arr[2] = 'o'
      turn++
      console.log(arr)
      return arr
    } else if (event.target.id === 'box-4') {
      arr[3] = 'o'
      turn++
      console.log(arr)
      return arr
    } else if (event.target.id === 'box-5') {
      arr[4] = 'o'
      turn++
      console.log(arr)
      return arr
    } else if (event.target.id === 'box-6') {
      arr[5] = 'o'
      turn++
      console.log(arr)
      return arr
    } else if (event.target.id === 'box-7') {
      arr[6] = 'o'
      turn++
      console.log(arr)
      return arr
    } else if (event.target.id === 'box-8') {
      arr[7] = 'o'
      turn++
      console.log(arr)
      return arr
    } else if (event.target.id === 'box-9') {
      arr[8] = 'o'
      turn++
      console.log(arr)
      return arr
    }
  } else {
    alert('That tile is taken fool!!!')
  }
}

const winIf = function () {
  if (arr[0] && arr[1] && arr[2] === 'x') {
    console.log('Player1 wins')
  } else if (arr[3] && arr[4] && arr[5] === 'x') {
    console.log('Player1 wins')
  } else if (arr[6] && arr[7] && arr[8] === 'x') {
    console.log('Player1 wins')
  } else if (arr[0] && arr[3] && arr[6] === 'x') {
    console.log('Player1 wins')
  } else if (arr[1] && arr[4] && arr[7] === 'x') {
    console.log('Player1 wins')
  } else if (arr[2] && arr[5] && arr[8] === 'x') {
    console.log('Player1 wins')
  } else if (arr[0] && arr[4] && arr[8] === 'x') {
    console.log('Player1 wins')
  } else if (arr[2] && arr[4] && arr[6] === 'x') {
    console.log('Player1 wins')
  } else if (arr[0] && arr[1] && arr[2] === 'o') {
    console.log('Player2 wins')
  } else if (arr[3] && arr[4] && arr[5] === 'o') {
    console.log('Player2 wins')
  } else if (arr[6] && arr[7] && arr[8] === 'o') {
    console.log('Player2 wins')
  } else if (arr[0] && arr[3] && arr[6] === 'o') {
    console.log('Player2 wins')
  } else if (arr[1] && arr[4] && arr[7] === 'o') {
    console.log('Player2 wins')
  } else if (arr[2] && arr[5] && arr[8] === 'o') {
    console.log('Player2 wins')
  } else if (arr[0] && arr[4] && arr[8] === 'o') {
    console.log('Player2 wins')
  } else if (arr[2] && arr[4] && arr[6] === 'o') {
    console.log('Player2 wins')
  }
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
  arr = ['', '', '', '', '', '', '', '', '']
}

$(() => {
  $('#signUp').on('submit', authEvents.onSignUp)
  $('#signIn').on('submit', authEvents.onSignIn)
  $('#changePassword').on('submit', authEvents.onChangePassword)
  $('#signOut').on('click', authEvents.onSignOut)
  $('#container').on('click', playerChoice)
  $('#container').on('click', winIf)
  $('#playBtn').on('click', authEvents.onPlay)
  $('#newGame').on('click', authEvents.onNewGame)
  $('#newGame').on('click', reset).hide()
})
