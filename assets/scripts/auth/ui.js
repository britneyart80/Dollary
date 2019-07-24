'use strict'

const store = require('./../store')
const signedInTemplate = require('../templates/signed-in.handlebars')
const signedOutTemplate = require('../templates/signed-out.handlebars')

const successfulSignUp = response => {
  $('form').trigger('reset')
  $('#sign-up-modal').modal('hide')
  $('#auth-message').text('Sign up successful!').css('color', 'green')
}

const failedSignUp = () => {
  $('form').trigger('reset')
  $('#auth-message').text('Sign up failed!').css('color', 'red')
}

const successfulSignIn = response => {
  store.user = response.user
  $('.modal-backdrop').hide()
  $('form').trigger('reset')
  $('#auth-message').text(`Welcome ${response.user.email}`).css('color', 'green')
  const signedInHtml = signedInTemplate()
  $('.authentication').html(signedInHtml)
  $('.create-envelope').removeClass('invisible')
  $('#options').html('<p class="status"></p> <button id="view-envelopes">View All Envelopes</button>')
}

const failedSignIn = () => {
  $('form').trigger('reset')
  $('#sign-in-modal').modal('hide')
  $('#auth-message').text('Sign in failed!').css('color', 'red')
}

const successfulSignOut = () => {
  $('form').trigger('reset')
  $('.modal-backdrop').hide()
  $('#content').empty()
  $('#options').empty()
  $('#auth-message').text('Sign out successful!').css('color', 'green')
  const signedOutHtml = signedOutTemplate()
  $('.authentication').html(signedOutHtml)
  $('.create-envelope').addClass('invisible')
}

const failedSignOut = () => {
  $('form').trigger('reset')
  $('#auth-message').text('Sign out failed!').css('color', 'red')
}

const successfulPasswordChange = () => {
  $('form').trigger('reset')
  $('#change-password-modal').modal('hide')
  $('#auth-message').text('Password changed!').css('color', 'green')
}

const failedPasswordChange = () => {
  $('form').trigger('reset')
  $('#change-password-modal').modal('hide')
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
