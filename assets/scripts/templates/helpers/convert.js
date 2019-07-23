// HELPER
// Converts the number for a month to the string

const convert = (month) => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  if (months[month - 1] === undefined) {
    return 'No month provided'
  } else {
    return months[month - 1]
  }
}

module.exports = convert
