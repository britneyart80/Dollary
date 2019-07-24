const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')
const budgetAPI = require('./../budget/api.js')
const budgetUI = require('./../budget/ui.js')

const onSignUp = event => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.signUp(formData)
    .then(ui.successfulSignUp)
    .catch(ui.failedSignUp)
}

const onSignIn = event => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.signIn(formData)
    .then(ui.successfulSignIn)
    .then(budgetAPI.viewEnvelopes)
    .then(budgetUI.viewEnvelopesSuccess)
    .catch(ui.failedSignIn)
}

const onSignOut = event => {
  event.preventDefault()
  api.signOut()
    .then(ui.successfulSignOut)
    .catch(ui.failedSignOut)
}

const onChangePassword = event => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.changePassword(formData)
    .then(ui.successfulPasswordChange)
    .catch(ui.failedPasswordChange)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword
}
