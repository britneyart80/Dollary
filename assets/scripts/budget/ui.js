'use strict'
const viewEnvelopesTemplate = require('../templates/view-envelopes.handlebars')
const openEnvelopeTemplate = require('../templates/open-envelope.handlebars')

const viewEnvelopesSuccess = response => {
  console.log(response.envelopes)
  const viewEnvelopesHtml = viewEnvelopesTemplate({ envelopes: response.envelopes })
  $('#content').html(viewEnvelopesHtml)
}

const failure = () => {
  $('.status').text('Something went wrong')
}

const openEnvelope = (response) => {
  const openEnvelopeHtml = openEnvelopeTemplate({ envelope: response.envelope })
  if (response.envelope.spendings.length < 1) {
    $('#content').html(openEnvelopeHtml)
    $('#content').append('<h3> No purchases so far! </h3>')
  } else {
    $('#content').html(openEnvelopeHtml)
  }
}

module.exports = {
  viewEnvelopesSuccess,
  failure,
  openEnvelope
}
