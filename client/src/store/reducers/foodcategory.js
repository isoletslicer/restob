import { CATEGORY_FETCH_SUCCESS, CATEGORY_FOOD_BY_ID_FETCH_SUCCESS, LOADING_CATEGORY_PAGE, ERROR_CATEGORY_PAGE, ADD_CATEGORY_FOOD_SUCCESS, EDIT_CATEGORY_FOOD_SUCCESS, DELETE_CATEGORY_FOOD_SUCCESS } from "../actions/actionType";

const inititalState = {
  foodCategories: [],
  foodCategoriesById: {},
  isLoadingCategoryPage: false,
  errorCategoryPage: '',
  message: ''
};

function foodCategoryReducer(state = inititalState, action) {
  switch (action.type) {
    case CATEGORY_FETCH_SUCCESS:
      return { ...state, foodCategories: action.payload };
    case LOADING_CATEGORY_PAGE:
      return { ...state, isLoadingCategoryPage: action.payload };
    case CATEGORY_FOOD_BY_ID_FETCH_SUCCESS:
      return { ...state, foodCategoriesById: action.payload };
    case ERROR_CATEGORY_PAGE:
      return { ...state, errorCategoryPage: action.payload }
    case ADD_CATEGORY_FOOD_SUCCESS:
      return { ...state, message: action.payload }
    case EDIT_CATEGORY_FOOD_SUCCESS:
      return { ...state, message: action.payload }
    case DELETE_CATEGORY_FOOD_SUCCESS:
      return { ...state, message: action.payload }
    default:
      return state;
  }
}

export default foodCategoryReducer;
