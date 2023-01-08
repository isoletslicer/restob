const bcrypt = require('bcryptjs')
// nge hash
const hashPassword = (rawPassword) => {
  return bcrypt.hashSync(rawPassword, 5)
}

// nge compare antara password mentahan dgn yang udah di crypt

const comparePassword = (rawPassword, passwordThatHash) => {

  return bcrypt.compareSync(rawPassword, passwordThatHash)
}

module.exports = {
  hashPassword,
  comparePassword
}