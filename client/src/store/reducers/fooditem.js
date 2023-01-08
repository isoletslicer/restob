import { FOOD_FETCH_SUCCESS, FOOD_ITEM_BY_ID_FETCH_SUCCESS, LOADING_FOOD_ITEM_PAGE, DELETE_FOOD_ITEM_SUCCESS } from "../actions/actionType";

const inititalState = {
  foodItems: [],
  foodItemsById: {},
  isLoadingFoodItemPage: false,
  message: ""
}

function foodItemReducer(state = inititalState, action) {
  switch (action.type) {
    case FOOD_FETCH_SUCCESS:
      return { ...state, foodItems: action.payload };
    case LOADING_FOOD_ITEM_PAGE:
      return { ...state, isLoadingFoodItemPage: action.payload };
    case FOOD_ITEM_BY_ID_FETCH_SUCCESS:
      return { ...state, foodItemsById: action.payload };
    case DELETE_FOOD_ITEM_SUCCESS:
      return { ...state, message: action.payload };
    default:
      return state;
  }
}

export default foodItemReducer
