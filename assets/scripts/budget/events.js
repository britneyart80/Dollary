const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')
const store = require('./../store.js')

const onGetCategories = () => {
  api.getCategories()
    .then(ui.getCategoriesSuccess)
    .catch(ui.failure)
}

const onClearEnvelopes = (event) => {
  event.preventDefault()
  onViewEnvelopes()
}

const onCreateEnvelope = event => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.createEnvelope(formData)
    .then(ui.createEnvelopesSuccess)
    .then(function () {
      api.viewEnvelopes()
        .then(ui.viewEnvelopesSuccess)
    })
    .catch(ui.failure)
}

const onViewEnvelopes = () => {
  event.preventDefault()
  api.viewEnvelopes()
    .then(ui.viewEnvelopesSuccess)
    .catch(ui.failure)
}

const onDeleteEnvelope = event => {
  event.preventDefault()
  api.deleteEnvelope(event.target.dataset.id)
    .then(api.viewEnvelopes)
    .then(ui.viewEnvelopesSuccess)
    .catch(ui.failure)
}

const onOpenEnvelope = event => {
  store.envelope = event
  event.preventDefault()
  api.getEnvelope(event.target.dataset.id)
    .then(ui.openEnvelope)
    .catch(ui.failure)
}

const onEditEnvelope = event => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  $('form').trigger('reset')
  $('#edit-envelope-modal').modal('hide')
  $('.modal-backdrop').hide()
  api.updateEnvelope(formData)
    .then(ui.openEnvelope)
    .catch(ui.failure)
}

const onAddSpending = event => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.addSpending(formData)
    .then(function () {
      $('.modal-backdrop').hide()
      api.getEnvelope(store.envelope_id)
        .then(ui.openEnvelope)
        .catch(ui.failure)
    })
    .catch(ui.failure)
}

const onDeleteSpending = event => {
  event.preventDefault()
  api.deleteSpending(event.target.dataset.id)
    .then(function () {
      api.getEnvelope(store.envelope_id)
        .then(ui.openEnvelope)
        .catch(ui.failure)
    })
}

module.exports = {
  onCreateEnvelope,
  onViewEnvelopes,
  onClearEnvelopes,
  onDeleteEnvelope,
  onOpenEnvelope,
  onEditEnvelope,
  onAddSpending,
  onGetCategories,
  onDeleteSpending
}
