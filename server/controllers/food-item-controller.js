const { Item, User, Ingredient, Category, ItemIngredient } = require('../models')
const { sequelize, Sequelize } = require('../models')

class FoodItemController {
  static async showAllFoodItems(req, res, next) {
    try {
      const optionQueries = {
        include: [
          { model: User, attributes: ["username"] },
          { model: Ingredient, attributes: ["name"] },
          { model: Category, attributes: ["name"] }
        ],
      };

      const listFoodItems = await Item.findAll(optionQueries);

      res.status(200).json(listFoodItems);
    } catch (error) {
      next(error);
    }
  }

  static async showFoodItemById(req, res, next) {
    try {
      const id = +req.params.id;

      const findFoodItemById = await Item.findOne({
        where: { id },
        include: [{ model: Ingredient, attributes: ["name"] }, { model: Category }],
      });
      if (!findFoodItemById) throw { name: "food not found" };

      res.status(200).json(findFoodItemById);
    } catch (error) {
      next(error);
    }
  }


  static async addItemMethod(req, res, next) {
    // declare transaksi
    const transaksi = await sequelize.transaction()

    try {
      // declare author login nya
      const authorId = req.userLogged.id
      // const {
      //   IngredientOne,
      //   IngredientThree,
      //   IngredientTwo,
      //   category,
      //   description,
      //   IngredientId,
      //   name,
      //   price
      // } = req.body

      // //console.log(IngredientOne,
      //   IngredientThree,
      //   IngredientTwo,
      //   category,
      //   description,
      //   IngredientId,
      //   name,
      //   price, `<< ini tangkapan body`)
      // //console.log(authorId, `<< ini userlogin nya`)

      // tangkap body nya
      const bodyAddFoodItem = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        imgUrl: req.body.imgUrl,
        categoryId: req.body.category,
        authorId: req.userLogged.id,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      // //console.log(IngredientOne, `<< ini ingredient none`)
      // //console.log(!IngredientOne)

      // tangkap dulu ingredient nya
      if (!req.body.IngredientOne || !req.body.IngredientTwo || !req.body.IngredientThree) {
        throw { name: 'Ingredient_Missing' }
      }

      // cari apa udah ada belom food item
      const findFood = await Item.findOne({ where: { name: bodyAddFoodItem.name } }, { transaction: transaksi })
      if (findFood) {
        throw { name: `Food_Already` }
      }
      // lanjut bikin
      const createdFoodItem = await Item.create(bodyAddFoodItem, { transaction: transaksi })
      if (!createdFoodItem) {
        throw { name: `failed to add food item` }
      }

      const bodyAddItemIngredient = [
        {
          ItemId: createdFoodItem.id,
          IngredientId: req.body.IngredientOne,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          ItemId: createdFoodItem.id,
          IngredientId: req.body.IngredientTwo,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          ItemId: createdFoodItem.id,
          IngredientId: req.body.IngredientThree,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
      const bulkConjunctionItemIngredient = await ItemIngredient.bulkCreate(bodyAddItemIngredient, { transaction: transaksi })
      await transaksi.commit();
      res.status(201).json({
        message: `Sukses menambahkan food iem baru ${createdFoodItem.name}`
      })

    } catch (error) {
      //console.log(error)
      await transaksi.rollback()
      next(error)

    }
  }

  static async editItemMethod(req, res, next) {
    // MAAF KAK SAYA GA EDIT INGREDIENT;. BINGUNG SAYA
    // declare transaksi
    const transaksi = await sequelize.transaction()

    try {
      const authorId = req.userLogged.id

      const id = req.params.id

      const findFood = await Item.findByPk(id, { transaction: transaksi })

      if (!findFood) {
        throw { name: `food not found` }
      }

      const bodyEditFoodItem = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        imgUrl: req.body.imgUrl,
      }

      const updatedFoodItem = await Item.update(bodyEditFoodItem, { where: { id } }, { transaction: transaksi })

      if (!updatedFoodItem) {
        throw { name: `failed to update food item` }
      }
      await transaksi.commit()
      res.status(200).json({
        message: `Sukses modifikasi food iem  ${bodyEditFoodItem.name}`
      })
    } catch (error) {
      //console.log(error)
      await transaksi.rollback()
      next(error)

    }
  }

  static async deleteItemMethod(req, res, next) {
    // declare transaksi
    const transaksi = await sequelize.transaction()
    try {
      const id = +req.params.id

      const findFood = await Item.findByPk(id, { transaction: transaksi })
      if (!findFood) {
        throw { name: `food not found` }
      }

      const deletedFood = await Item.destroy({ where: { id } }, { transaction: transaksi })


      await transaksi.commit()
      res.status(201).json({ message: `Sukses menghapus item ${findFood.name}` })

    } catch (error) {
      //console.log(error)
      await transaksi.rollback()
      next(error)
    }
  }

}

module.exports = FoodItemController;
