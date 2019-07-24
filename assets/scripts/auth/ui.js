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
  $('#auth-message').text('Sign up failed!')
}

const successfulSignIn = response => {
  store.user = response.user
  $('.modal-backdrop').hide()
  $('form').trigger('reset')
  $('#auth-message').text(`Welcome ${response.user.email}`)
  const signedInHtml = signedInTemplate()
  $('.authentication').html(signedInHtml)
  $('#options').html('<p class="status"></p> <button id="view-envelopes">View All Envelopes</button>')
}

const failedSignIn = () => {
  $('form').trigger('reset')
  $('#sign-in-modal').modal('hide')
  $('#auth-message').text('Sign in failed!')
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
  $('#auth-message').text('Sign out failed!')
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
