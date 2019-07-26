'use strict'
const viewEnvelopesTemplate = require('../templates/view-envelopes.handlebars')
const openEnvelopeTemplate = require('../templates/open-envelope.handlebars')
const addSpendingTemplate = require('../templates/add-spending.handlebars')
const store = require('./../store.js')

const viewEnvelopesSuccess = response => {
  const viewEnvelopesHtml = viewEnvelopesTemplate({ envelopes: response.envelopes })
  $('#content').html(viewEnvelopesHtml)
  if (response.envelopes.length < 1) {
    $('#content').append('<h4> You have no Envelopes! Create one to start budgeting. </h4>')
  }
}

const failure = () => {
  $('.status').text('Something went wrong')
}

const getCategoriesSuccess = response => {
  store.categories = response
}

const openEnvelope = (response) => {
  const openEnvelopeHtml = openEnvelopeTemplate({ envelope: response.envelope })
  const addSpendingHtml = addSpendingTemplate({categories: store.categories})
  $('#content').html(addSpendingHtml)
  if (response.envelope.spendings.length < 1) {
    $('#content').append(openEnvelopeHtml)
    $('#content').append('<h3> No purchases so far! </h3>')
  } else {
    $('#content').append(openEnvelopeHtml)
  }
}

const createEnvelopesSuccess = () => {
  $('#create-envelope-modal').modal('hide')
  $('.modal-backdrop').hide()
}

module.exports = {
  viewEnvelopesSuccess,
  failure,
  openEnvelope,
  getCategoriesSuccess,
  createEnvelopesSuccess
}
