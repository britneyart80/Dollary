const config = require('./../config')
const store = require('./../store.js')

const createEnvelope = data => {
  const envelope = data.envelope
  return $.ajax({
    url: config.apiUrl + '/envelopes',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'envelope': {
        'budget': envelope.budget,
        'month': envelope.month,
        'year': envelope.year
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

const addSpending = data => {
  const spending = data.spending
  console.log(spending.category_id)
  return $.ajax({
    url: config.apiUrl + '/spendings',
    method: 'POST',
    data: {
      'spending': {
        'item': spending.item,
        'cost': spending.cost,
        'date': spending.date,
        'envelope_id': store.envelope_id,
        'category_id': spending.category_id
      }
    }
  })
}

const deleteSpending = (id) => {
  return $.ajax({
    url: config.apiUrl + `/spendings/${id}`,
    method: 'DELETE'
  })
}

const getCategories = () => {
  return $.ajax({
    url: config.apiUrl + `/categories`
  })
}

module.exports = {
  createEnvelope,
  viewEnvelopes,
  deleteEnvelope,
  getEnvelope,
  updateEnvelope,
  addSpending,
  getCategories,
  deleteSpending
}
