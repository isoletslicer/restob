function errorHandler(error, req, res, next) {
  // default error
  let erorrMessage = {
    code: 500,
    response: { message: "Internal Server Error" }
  };

  if (error.name === "SequelizeValidationError") {
    let errorList = error.errors.map(item => {
      return item.message
    })
    res.status(400).json({ message: errorList })
  }

  else if (error.name === "SequelizeUniqueConstraintError") {
    let errorList = error.errors.map(item => {
      return item.message
    })
    res.status(400).json({ message: errorList })
  }

  else if (error.name === 'Email must be unique') {
    res.status(400).json({ message: 'Email must be unique. Try other one' })
  }
  else if (error.name === 'failed to add food item') {
    res.status(400).json({ message: 'Failed to add food item, try again' })
  }
  else if (error.name === `failed to update food item`) {
    res.status(400).json({ message: 'Failed to update food item, try again' })
  }
  else if (error.name === 'already_wishlisted') {
    res.status(400).json({ message: 'Already Wishlisted! Select other.' })
  }
  else if (error.name === 'Food_Already') {
    res.status(400).json({ message: 'Food Already in Database. Please enter another.' })
  }
  else if (error.name === 'Ingredient_Missing') {
    res.status(400).json({ message: 'Ingredient missing, pleace enter.' })
  }
  else if (error.name === 'Category_Already') {
    res.status(400).json({ message: 'Category Already in Database. Please enter another.' })
  }
  else if (error.name === 'Ingredient_Already') {
    res.status(400).json({ message: 'Ingreadient Already in Database. Please enter another.' })
  }
  else if (error.name === `invalid email/password`) {
    res.status(401).json({ message: `error invalid username or email or password` })
  }

  else if (error.name === `Unauthorized Activity`) {
    res.status(401).json({ message: `Unauthorized Activity` })
  }

  else if (error.name === "JsonWebTokenError") {
    res.status(401).json({ message: `invalid token` })
  }

  else if (error.name === "TokenExpiredError") {
    res.status(401).json({ message: `expired token` })
  }

  else if (error.name === `forbidden to access`) {
    res.status(403).json({ message: `forbidden to access ` })
  }

  else if (error.name === `food not found`) {
    res.status(404).json({ message: `Sorry, food not found ` })
  }

  else if (error.name === `Category not found`) {
    res.status(404).json({ message: `Sorry, Category not found ` })
  }


  else {
    res.status(erorrMessage.code).json(erorrMessage.response)
  }



}

module.exports = errorHandler