'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js')
const budgetEvents = require('./budget/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('document').ready(budgetEvents.onGetCategories)
  $('body').on('submit', '#sign-up', authEvents.onSignUp)
  $('body').on('submit', '#sign-in', authEvents.onSignIn)
  $('body').on('click', '#sign-out', authEvents.onSignOut)
  $('body').on('submit', '#change-password', authEvents.onChangePassword)
  $('body').on('submit', '#create-envelope', budgetEvents.onCreateEnvelope)
  $('body').on('click', '#view-envelopes', budgetEvents.onViewEnvelopes)
  $('body').on('click', '#clear-envelopes', budgetEvents.onClearEnvelopes)
  $('body').on('click', '.delete-envelope', budgetEvents.onDeleteEnvelope)
  $('body').on('click', '.envelope', budgetEvents.onOpenEnvelope)
  $('body').on('submit', '#edit-envelope', budgetEvents.onEditEnvelope)
  $('body').on('submit', '#add-spending', budgetEvents.onAddSpending)
  $('body').on('click', '.delete-spending', budgetEvents.onDeleteSpending)
})
