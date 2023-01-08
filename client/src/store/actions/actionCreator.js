import { API_URL } from "../../constants/url";
import { FOOD_FETCH_SUCCESS, CATEGORY_FETCH_SUCCESS, INGREDIENT_FETCH_SUCCESS, LOADING_CATEGORY_PAGE, LOADING_INGREDIENT_PAGE, LOADING_FOOD_ITEM_PAGE, FOOD_ITEM_BY_ID_FETCH_SUCCESS, CATEGORY_FOOD_BY_ID_FETCH_SUCCESS, INGREDIENT_FOOD_BY_ID_FETCH_SUCCESS } from "./actionType";

export const foodFetchSuccess = (payload) => {
  return {
    type: FOOD_FETCH_SUCCESS,
    payload,
  };
};

export const categoryFetchSuccess = (payload) => {
  return {
    type: CATEGORY_FETCH_SUCCESS,
    payload,
  };
};

export const ingredientFetchSuccess = (payload) => {
  return {
    type: INGREDIENT_FETCH_SUCCESS,
    payload,
  };
};

export const setLoadingCategoryPage = (payload) => {
  return {
    type: LOADING_CATEGORY_PAGE,
    payload,
  };
};

export const setLoadingIngredientPage = (payload) => {
  return {
    type: LOADING_INGREDIENT_PAGE,
    payload,
  };
};

export const setLoadingFoodItemPage = (payload) => {
  return {
    type: LOADING_FOOD_ITEM_PAGE,
    payload,
  };
};


export const foodItemByIdFetchSuccess = (payload) => {
  return {
    type: FOOD_ITEM_BY_ID_FETCH_SUCCESS,
    payload,
  };
};

export const categoryFoodByIdFetchSuccess = (payload) => {
  return {
    type: CATEGORY_FOOD_BY_ID_FETCH_SUCCESS,
    payload,
  };
};

export const ingredientFoodByIdFetchSuccess = (payload) => {
  return {
    type: INGREDIENT_FOOD_BY_ID_FETCH_SUCCESS,
    payload,
  };
};

export const fetchFoodItems = () => {
  return (dispatch) => {
    return fetch(`${API_URL}/items?_expand=category`)
      .then((res) => {
        if (!res.ok) throw new Error("Error! Something wrong");
        else return res.json();
      })
      .then((data) => dispatch(foodFetchSuccess(data)));
  };
};

export const fetchFoodCategories = () => {
  return (dispatch) => {
    return fetch(`${API_URL}/categories`)
      .then((res) => {
        if (!res.ok) throw new Error("Error! Something wrong");
        else return res.json();
      })
      .then(data => dispatch(categoryFetchSuccess(data)))
  }
}

export const fetchFoodIngredients = () => {
  return (dispatch) => {
    return fetch(`${API_URL}/ingredients`)
      .then((res) => {
        if (!res.ok) throw new Error("Error! Something wrong");
        else return res.json();
      })
      .then(data => dispatch(ingredientFetchSuccess(data)))
  }
}


export const fetchFoodItemById = (id) => {
  return (dispatch) => {
    fetch(`${API_URL}/items/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Error! Something wrong");
        else return res.json();
      })
      .then((data) => dispatch(foodItemByIdFetchSuccess(data)));
  };
};

export const fetchCategoryFoodById = (id) => {
  return (dispatch) => {
    fetch(`${API_URL}/categories/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Error! Something wrong");
        else return res.json();
      })
      .then((data) => dispatch(categoryFoodByIdFetchSuccess(data)));
  };
};

export const fetchIngredientFoodById = (id) => {
  return (dispatch) => {
    fetch(`${API_URL}/ingredients/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Error! Something wrong");
        else return res.json();
      })
      .then((data) => dispatch(ingredientFoodByIdFetchSuccess(data)));
  };
};