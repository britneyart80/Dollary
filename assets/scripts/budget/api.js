const config = require('./../config')
const store = require('./../store.js')

const createEnvelope = data => {
  const envelope = data.envelope
  return $.ajax({
    url: config.apiUrl + '/envelopes',
    method: 'POST',
    data: {
      'envelope': {
        'budget': envelope.budget,
        'month': envelope.month,
        'year': envelope.year,
        'user_id': store.user.id
      }
    }
  })
}

const viewEnvelopes = () => {
  return $.ajax({
    url: config.apiUrl + '/envelopes',
    method: 'GET',
    contentType: 'application/json',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteEnvelope = id => {
  return $.ajax({
    url: config.apiUrl + `/envelopes/${id}`,
    method: 'DELETE'
  })
}

const getEnvelope = id => {
  store.envelope_id = id
  return $.ajax({
    url: config.apiUrl + `/envelopes/${id}`
  })
}

const updateEnvelope = data => {
  return $.ajax({
    url: config.apiUrl + `/envelopes/${store.envelope_id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

module.exports = {
  createEnvelope,
  viewEnvelopes,
  deleteEnvelope,
  getEnvelope,
  updateEnvelope
}
