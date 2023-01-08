const { Item, User, Ingredient, Category, ItemIngredient } = require('../models')

class CategoryFoodController {
  static async showAllCategoryFood(req, res, next) {
    try {
      const listCategoryFoods = await Category.findAll()
      res.status(200).json(listCategoryFoods);
    } catch (error) {
      next(error)
    }
  }

  static async showCategoryFoodById(req, res, next) {
    try {
      const id = +req.params.id;

      const categoryFoodById = await Category.findOne({
        where: { id },
      });
      if (!categoryFoodById) throw { name: "Category not found" };

      res.status(200).json(categoryFoodById);

    } catch (error) {
      next(error)
    }
  }

  static async addCategoryMethod(req, res, next) {
    try {
      const { name } = req.body

      const isCategoryAlready = await Category.findOne({ where: { name } })
      //console.log(isCategoryAlready)
      if (isCategoryAlready) {
        throw { name: 'Category_Already' }
      }
      const createdCategory = await Category.create({ name })
      res.status(201).json({ message: `Sukses menambahkan kategori baru ${createdCategory.name}` })

    } catch (error) {
      //console.log(error)
      next(error)
    }
  }

  static async editCategoryMethod(req, res, next) {
    try {
      const id = +req.params.id
      const { name } = req.body

      // const isCategoryAlready = await Category.findOne({ where: { name } })
      // //console.log(isCategoryAlready)
      // if (isCategoryAlready) {
      //   throw { name: 'Category_Already' }
      // }
      const findCategory = await Category.findByPk(id)
      if (!findCategory) {
        throw { name: `Category not found` }
      }

      const modifiedCategory = await Category.update({ name }, { where: { id } })
      res.status(200).json({ message: `Sukses modifikasi kategori ${findCategory.name} menjadi ${name}` })

    } catch (error) {
      //console.log(error)
      next(error)
    }
  }

  static async deleteCategoryMethod(req, res, next) {
    try {
      const id = +req.params.id
      // const { name } = req.body

      // const isCategoryAlready = await Category.findOne({ where: { name } })
      // //console.log(isCategoryAlready)
      // if (isCategoryAlready) {
      //   throw { name: 'Category_Already' }
      // }
      const findCategory = await Category.findByPk(id)
      if (!findCategory) {
        throw { name: `Category not found` }
      }

      const deletedCategory = await Category.destroy({ where: { id } })
      res.status(201).json({ message: `Sukses menghapus kategori ${findCategory.name}` })

    } catch (error) {
      //console.log(error)
      next(error)
    }
  }
}

module.exports = CategoryFoodController;



