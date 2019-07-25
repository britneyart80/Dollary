'use strict'

const store = require('./../store')
const signedInTemplate = require('../templates/signed-in.handlebars')
const signedOutTemplate = require('../templates/signed-out.handlebars')

const successfulSignUp = response => {
  $('form').trigger('reset')
  $('#sign-up-modal').modal('hide')
  $('#auth-message').text('Sign up successful!')
}

const failedSignUp = () => {
  $('form').trigger('reset')
  $('#sign-up-modal').modal('hide')
  $('#auth-message').text("This username is taken or your passwords don't match.")
}

const successfulSignIn = response => {
  store.user = response.user
  $('.modal-backdrop').hide()
  $('form').trigger('reset')
  $('#auth-message').text(`Welcome ${response.user.email}!`)
  const signedInHtml = signedInTemplate()
  $('.authentication').html(signedInHtml)
}

const failedSignIn = () => {
  $('form').trigger('reset')
  $('#sign-in-modal').modal('hide')
  $('#auth-message').text('Sorry, your username or password is incorrect.')
}

const successfulSignOut = () => {
  $('form').trigger('reset')
  $('.modal-backdrop').hide()
  $('#content').empty()
  $('#options').empty()
  $('#auth-message').text('Sign out successful! ')
  const signedOutHtml = signedOutTemplate()
  $('.authentication').html(signedOutHtml)
  $('#auth-message').append(store.homeMessage)
}

const failedSignOut = () => {
  $('form').trigger('reset')
  $('#auth-message').text("An error occurred and we couldn't sign you out.")
}

const successfulPasswordChange = () => {
  $('form').trigger('reset')
  $('#change-password-modal').modal('hide')
  $('#auth-message').text('Password changed!')
}

const failedPasswordChange = () => {
  $('form').trigger('reset')
  $('#change-password-modal').modal('hide')
  $('#auth-message').text('Failed to change password!')
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
