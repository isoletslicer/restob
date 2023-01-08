const { User } = require('../models/')
const { verifyToken } = require('../helpers/json-web-token')

async function authentification(req, res, next) {
  try {
    let access_token = req.headers.access_token
    if (!access_token) {
      throw { name: `Unauthorized Activity` }
      // res.status(401).json({ message: `Unauthorized Activity` })
    } else {
      let payload = verifyToken(access_token)
      let userLogged = await User.findByPk(payload.id)

      if (!userLogged) {
        throw { name: `Unauthorized Activity` }
        // res.status(401).json({ message: `Unauthorized Activity` })
      } else {
        req.userLogged = {
          id: userLogged.id,
          username: userLogged.username,
          role: userLogged.role
        }
        // //console.log(req.userLogged)
        // //console.log(`<<<<<sukses semua ya sampe sini lanjut next`)
        next()
      }
    }

  } catch (error) {
    // //console.log(error.name)
    // if (error.name === "JsonWebTokenError") {
    //   res.status(401).json({ message: `invalid token` })
    // } else if (error.name === "TokenExpiredError") {
    //   res.status(401).json({ message: `expired token` })
    // } 
    // else {
    //   res.status(500).json({ message: `internal server error` })
    // }
    next(error)
  }
}

module.exports = authentification