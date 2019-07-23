const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')

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
