const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const onClearEnvelopes = () => {
  console.log('got here')
  event.preventDefault()
  $('#content').empty()
}

const onCreateEnvelope = event => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.createEnvelope(formData)
    .then(ui.createEnvelopesSuccess)
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
  event.preventDefault()
  api.getEnvelope(event.target.dataset.id)
    .then(ui.openEnvelope)
    .catch(ui.failure)
}

const onEditEnvelope = event => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  console.log(formData)
  api.updateEnvelope(formData)
    .then(console.log)
}

module.exports = {
  onCreateEnvelope,
  onViewEnvelopes,
  onClearEnvelopes,
  onDeleteEnvelope,
  onOpenEnvelope,
  onEditEnvelope
}
