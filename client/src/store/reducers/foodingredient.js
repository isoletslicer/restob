import { INGREDIENT_FETCH_SUCCESS, INGREDIENT_FOOD_BY_ID_FETCH_SUCCESS, LOADING_INGREDIENT_PAGE, ADD_INGREDIENT_FOOD_SUCCESS } from "../actions/actionType";

const inititalState = {
  foodIngredients: [],
  foodIngredientsById: {},
  isLoadingIngredientPage: false,
  message: ''
};

function foodIngredientReducer(state = inititalState, action) {
  switch (action.type) {
    case INGREDIENT_FETCH_SUCCESS:
      return { ...state, foodIngredients: action.payload };
    case LOADING_INGREDIENT_PAGE:
      return { ...state, isLoadingIngredientPage: action.payload };
    case INGREDIENT_FOOD_BY_ID_FETCH_SUCCESS:
      return { ...state, foodIngredientsById: action.payload }
    case ADD_INGREDIENT_FOOD_SUCCESS:
      return { ...state, message: action.payload };
    default:
      return state;
  }
}

export default foodIngredientReducer;
