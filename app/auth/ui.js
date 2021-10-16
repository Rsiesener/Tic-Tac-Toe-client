const store = require('../store')

const signUpSuccess = function (responseData) {
  $('#movies-display').text('Signed up successfully!')

  $('#movies-display').removeClass()
  $('#movies-display').addClass('text-success')

  $('form').trigger('reset')

  console.log('responseData is', responseData)
}

const signUpFailure = function (error) {
  $('#error-message').text('Sign up fail!')

  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')

  console.error(error)
}

const signInSuccess = function (responseData) {
  store.user = responseData.user

  $('#movies-display').text('Signed in successfully!')

  $('#movies-display').removeClass()
  $('#movies-display').addClass('text-success')
  $('#afterSignIn').show()
  $('#beforeSignIn').hide()
  $('#playBtn').show()
  $('#signOut').show()
  $('form').trigger('reset')
  $('#changePassword').show()

  console.log('responseData is', responseData)
}

const signInFailure = function (error) {
  $('#error-message').text('Sign in fail!')

  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')

  console.error(error)
}

const changePasswordSuccess = function (responseData) {
  $('#movies-display').text('Change password successfully!')

  $('#movies-display').removeClass()
  $('#movies-display').addClass('text-success')

  $('form').trigger('reset')

  console.log('responseData is', responseData)
}

const changePasswordFailure = function (error) {
  $('#error-message').text('Change password fail!')

  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')

  console.error(error)
}

const onSignOutSuccess = function (responseData) {
  $('#movies-display').text('Signed Out successfully!')

  $('#movies-display').removeClass()
  $('#movies-display').addClass('text-success')
  $('#beforeSignIn').show()
  $('#playBtn').hide()
  $('#signOut').hide()
  $('#changePassword').hide()
  $('#container').hide()
  $('#counter').hide()

  $('form').trigger('reset')

  $('#after-sign-in').show()
  $('#before-sign-in').hide()
  $('#newGame').hide()

  console.log('responseData is', responseData)
}

const onSignOutFailure = function (error) {
  $('#error-message').text('Sign Out Fail!')

  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')

  console.error(error)
}

const onPlaySuccess = function (responseData) {
  $('#container').show()
  $('#counter').show()
  $('#playBtn').hide()
  $('#newGame').show()
}

const onPlayFailure = function () {

}
const onNewGameSuccess = function () {
  $('#container').show()
  $('#counter').show()
  $('#playBtn').hide()
  $('#newGame').show()
}

const onNewGameFailure = function () {

}
module.exports = {
  signUpFailure,
  signUpSuccess,
  signInSuccess,
  signInFailure,
  changePasswordFailure,
  changePasswordSuccess,
  onSignOutFailure,
  onSignOutSuccess,
  onNewGameSuccess,
  onNewGameFailure,
  onPlaySuccess,
  onPlayFailure
}
