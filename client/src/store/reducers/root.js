import foodItemReducer from "./fooditem"
import foodCategoryReducer from "./foodcategory"
import foodIngredientReducer from "./foodingredient"
import { combineReducers } from "redux"
import userReducer from "./reduceruser"

const rootReducer = combineReducers({ foodItemReducer, foodCategoryReducer, foodIngredientReducer, userReducer })

export default rootReducer