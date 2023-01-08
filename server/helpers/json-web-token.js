const jwt = require('jsonwebtoken');
// const INI_KUNCI_RAHASIA = process.env.JWT_TOKEN;
const INI_KUNCI_RAHASIA = "LaLiga Udah Ga Laku bOs !!1!";

const createToken = (payload) => { return jwt.sign(payload, INI_KUNCI_RAHASIA); };
const verifyToken = (token) => { return jwt.verify(token, INI_KUNCI_RAHASIA); };

module.exports = {
  createToken,
  verifyToken
};