import { API_URL } from "../../constants/url";
import { INGREDIENT_FETCH_SUCCESS, LOADING_INGREDIENT_PAGE, INGREDIENT_FOOD_BY_ID_FETCH_SUCCESS, ADD_INGREDIENT_FOOD_SUCCESS } from "./actionType";

export const ingredientFetchSuccess = (payload) => {
  return {
    type: INGREDIENT_FETCH_SUCCESS,
    payload,
  };
};
export const setLoadingIngredientPage = (payload) => {
  return {
    type: LOADING_INGREDIENT_PAGE,
    payload,
  };
};
export const ingredientFoodByIdFetchSuccess = (payload) => {
  return {
    type: INGREDIENT_FOOD_BY_ID_FETCH_SUCCESS,
    payload,
  };
};

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

export const fetchIngredientFoodById = (id) => {
  return (dispatch) => {
    return fetch(`${API_URL}/ingredients/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Fetch Method not OK . . .");
        }
        return response.json();
      })
      .then((response) => {
        dispatch(ingredientFoodByIdFetchSuccess(response))
      })
      .catch((error) => {
        console.error(
          "Fetching Eror. . .Check Server:",
          error
        );
      });
  };
};

// Add ingredient
export const addIngredientSuccess = (payload) => {
  return {
    type: ADD_INGREDIENT_FOOD_SUCCESS,
    payload,
  };
};

export const addIngredientMethod = (payload) => {
  return (dispatch) => {
    fetch(`${API_URL}/ingredients`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Error... Network Problem");
        else return res.json();
      })
      .then((data) => {
        dispatch(fetchFoodIngredients())
        dispatch(addIngredientSuccess(data))
        //console.log(data, "<<<<<<");
      })
      .catch((error) => console.error(
        "Fetching Eror. . .Check Server:",
        error
      ));
  };
};
