'use strict'

const store = require('./../store')

const successfulSignUp = response => {
  $('form').trigger('reset')
  $('#auth-message').text('Sign up successful!').css('color', 'green')
}

const failedSignUp = () => {
  $('form').trigger('reset')
  $('#auth-message').text('Sign up failed!').css('color', 'red')
}

const successfulSignIn = response => {
  store.user = response.user
  $('form').trigger('reset')
  $('#auth-message').text(`Welcome ${response.user.email}`).css('color', 'green')
}

const failedSignIn = () => {
  $('form').trigger('reset')
  $('#auth-message').text('Sign in failed!').css('color', 'red')
}

const successfulSignOut = () => {
  $('form').trigger('reset')
  $('#auth-message').text('Sign out successful!').css('color', 'green')
}

const failedSignOut = () => {
  $('form').trigger('reset')
  $('#auth-message').text('Sign out failed!').css('color', 'red')
}

const successfulPasswordChange = () => {
  $('form').trigger('reset')
  $('#auth-message').text('Password changed!').css('color', 'green')
}

const failedPasswordChange = () => {
  $('form').trigger('reset')
  $('#auth-message').text('Failed to change password!').css('color', 'red')
}

module.exports = {
  successfulSignUp,
  failedSignUp,
  successfulSignIn,
  failedSignIn,
  successfulSignOut,
  failedSignOut,
  successfulPasswordChange,
  failedPasswordChange
}
