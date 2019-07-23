'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js')
const budgetEvents = require('./budget/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#create-envelope').on('submit', budgetEvents.onCreateEnvelope)
  $('#view-envelopes').on('click', budgetEvents.onViewEnvelopes)
  $('#clear-envelopes').on('click', budgetEvents.onClearEnvelopes)
  $('body').on('click', '.delete-envelope', budgetEvents.onDeleteEnvelope)
  $('body').on('click', '.envelope', budgetEvents.onOpenEnvelope)
  $('body').on('submit', '#edit-envelope', budgetEvents.onEditEnvelope)
  $('body').on('submit', '#add-spending', budgetEvents.onAddSpending)
})
