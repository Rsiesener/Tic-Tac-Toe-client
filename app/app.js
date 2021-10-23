const player1 = 'x'
const player2 = 'o'
let turn = 1
let arr = ['', '', '', '', '', '', '', '', '']
let win = 'false'
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
// use require without a reference to ensure a file is bundled
// require('./example')

const winIf = function () {
  let player = 'Player1'
  const square = (selector) => selector !== ''
  if (arr[0] === 'x' && arr[1] === 'x' && arr[2] === 'x') {
    $('#winner').html(player + ' WINS!!!')
    win = 'true'
    return win
  } else if (arr[3] === 'x' && arr[4] === 'x' && arr[5] === 'x') {
    $('#winner').html(player + ' WINS!!!')
    win = 'true'
    return win
  } else if (arr[6] === 'x' && arr[7] === 'x' && arr[8] === 'x') {
    $('#winner').html(player + ' WINS!!!')
    win = 'true'
    return win
  } else if (arr[0] === 'x' && arr[3] === 'x' && arr[6] === 'x') {
    $('#winner').html(player + ' WINS!!!')
    win = 'true'
    return win
  } else if (arr[1] === 'x' && arr[4] === 'x' && arr[7] === 'x') {
    $('#winner').html(player + ' WINS!!!')
    win = 'true'
    return win
  } else if (arr[2] === 'x' && arr[5] === 'x' && arr[8] === 'x') {
    $('#winner').html(player + ' WINS!!!')
    win = 'true'
    return win
  } else if (arr[0] === 'x' && arr[4] === 'x' && arr[8] === 'x') {
    $('#winner').html(player + ' WINS!!!')
    win = 'true'
    return win
  } else if (arr[2] === 'x' && arr[4] === 'x' && arr[6] === 'x') {
    $('#winner').html(player + ' WINS!!!')
    win = 'true'
    return win
  } else if (arr[0] === 'o' && arr[1] === 'o' && arr[2] === 'o') {
    player = 'Player2'
    $('#winner').html(player + ' WINS!!!')
    win = 'true'
    return win
  } else if (arr[3] === 'o' && arr[4] === 'o' && arr[5] === 'o') {
    player = 'Player2'
    $('#winner').html(player + ' WINS!!!')
    win = 'true'
    return win
  } else if (arr[6] === 'o' && arr[7] === 'o' && arr[8] === 'o') {
    player = 'Player2'
    $('#winner').html(player + ' WINS!!!')
    win = 'true'
    return win
  } else if (arr[0] === 'o' && arr[3] === 'o' && arr[6] === 'o') {
    player = 'Player2'
    $('#winner').html(player + ' WINS!!!')
    win = 'true'
    return win
  } else if (arr[1] === 'o' && arr[4] === 'o' && arr[7] === 'o') {
    player = 'Player2'
    $('#winner').html(player + ' WINS!!!')
    win = 'true'
    return win
  } else if (arr[2] === 'o' && arr[5] === 'o' && arr[8] === 'o') {
    player = 'Player2'
    $('#winner').html(player + ' WINS!!!')
    win = 'true'
    return win
  } else if (arr[0] === 'o' && arr[4] === 'o' && arr[8] === 'o') {
    player = 'Player2'
    $('#winner').html(player + ' WINS!!!')
    win = 'true'
    return win
  } else if (arr[2] === 'o' && arr[4] === 'o' && arr[6] === 'o') {
    player = 'Player2'
    $('#winner').html(player + ' WINS!!!')
    win = 'true'
    return win
  } else if (arr.every(square)) {
    $('#winner').html("It's a TIE!!! Start a new game.")
    win = 'true'
  }
}

const endGame = function () {
  if (win === 'true') {
    $('#container').off('click')
  }
}

const playerChoice = function (event) {
  console.log(event)
  if ($(`#${event.target.id}`).html() === '' && turn % 2 === 1) {
    $(`#${event.target.id}`).html(player1)
    if (event.target.id === 'box-1') {
      arr[0] = 'x'
      turn++
      console.log(arr)
      winIf()
      endGame()
      return arr
    } else if (event.target.id === 'box-2') {
      arr[1] = 'x'
      turn++
      console.log(arr)
      winIf()
      endGame()
      return arr
    } else if (event.target.id === 'box-3') {
      arr[2] = 'x'
      turn++
      console.log(arr)
      winIf()
      endGame()
      return arr
    } else if (event.target.id === 'box-4') {
      arr[3] = 'x'
      turn++
      console.log(arr)
      winIf()
      endGame()
      return arr
    } else if (event.target.id === 'box-5') {
      arr[4] = 'x'
      turn++
      console.log(arr)
      winIf()
      endGame()
      return arr
    } else if (event.target.id === 'box-6') {
      arr[5] = 'x'
      turn++
      console.log(arr)
      winIf()
      endGame()
      return arr
    } else if (event.target.id === 'box-7') {
      arr[6] = 'x'
      turn++
      console.log(arr)
      winIf()
      endGame()
      return arr
    } else if (event.target.id === 'box-8') {
      arr[7] = 'x'
      turn++
      console.log(arr)
      winIf()
      endGame()
      return arr
    } else if (event.target.id === 'box-9') {
      arr[8] = 'x'
      turn++
      console.log(arr)
      winIf()
      endGame()
      return arr
    }
  } else if ($(`#${event.target.id}`).html() === '' && turn % 2 === 0) {
    $(`#${event.target.id}`).html(player2)
    if (event.target.id === 'box-1') {
      arr[0] = 'o'
      turn++
      console.log(arr)
      winIf()
      endGame()
      return arr
    } else if (event.target.id === 'box-2') {
      arr[1] = 'o'
      turn++
      console.log(arr)
      winIf()
      endGame()
      return arr
    } else if (event.target.id === 'box-3') {
      arr[2] = 'o'
      turn++
      console.log(arr)
      winIf()
      endGame()
      return arr
    } else if (event.target.id === 'box-4') {
      arr[3] = 'o'
      turn++
      console.log(arr)
      winIf()
      endGame()
      return arr
    } else if (event.target.id === 'box-5') {
      arr[4] = 'o'
      turn++
      console.log(arr)
      winIf()
      endGame()
      return arr
    } else if (event.target.id === 'box-6') {
      arr[5] = 'o'
      turn++
      console.log(arr)
      winIf()
      endGame()
      return arr
    } else if (event.target.id === 'box-7') {
      arr[6] = 'o'
      turn++
      console.log(arr)
      winIf()
      endGame()
      return arr
    } else if (event.target.id === 'box-8') {
      arr[7] = 'o'
      turn++
      console.log(arr)
      winIf()
      endGame()
      return arr
    } else if (event.target.id === 'box-9') {
      arr[8] = 'o'
      turn++
      console.log(arr)
      winIf()
      endGame()
      return arr
    }
  } else {
    $('#winner').html('That tile is taken!!!')
    console.log('some word')
  }
}

const reset = function () {
  $('#box-1').html('')
  $('#box-2').html('')
  $('#box-3').html('')
  $('#box-4').html('')
  $('#box-5').html('')
  $('#box-6').html('')
  $('#box-7').html('')
  $('#box-8').html('')
  $('#box-9').html('')
  $('#winner').html('Eat, Play, SLAY!!!')
  $('#container').on('click', playerChoice)
  turn = 1
  win = 'false'
  arr = ['', '', '', '', '', '', '', '', '']
}

const callBack = function (event) {
  authEvents.onNewGame(event)
  reset()
}

$(() => {
  $('#signUp').on('submit', authEvents.onSignUp)
  $('#signIn').on('submit', authEvents.onSignIn)
  $('#changePassword').on('submit', authEvents.onChangePassword)
  $('#signOut').on('click', authEvents.onSignOut)
  $('#container').on('click', playerChoice)
  $('#playBtn').on('click', authEvents.onPlay)
  $('#newGame').on('click', callBack).hide()
})
