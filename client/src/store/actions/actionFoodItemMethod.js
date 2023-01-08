import { API_URL } from "../../constants/url";
import { FOOD_FETCH_SUCCESS, LOADING_FOOD_ITEM_PAGE, FOOD_ITEM_BY_ID_FETCH_SUCCESS, DELETE_FOOD_ITEM_SUCCESS, EDIT_FOOD_ITEM_SUCCESS, ADD_FOOD_ITEM_SUCCESS } from "./actionType";
export const foodFetchSuccess = (payload) => {
  return {
    type: FOOD_FETCH_SUCCESS,
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

export const fetchFoodItems = () => {
  return (dispatch) => {
    return fetch(`${API_URL}/items`)
      .then((res) => {
        if (!res.ok) throw new Error("Error! Something wrong");
        else return res.json();
      })
      .then((data) => dispatch(foodFetchSuccess(data)));
  };
};

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


// Delete data
export const successDelete = (payload) => {
  return {
    type: DELETE_FOOD_ITEM_SUCCESS,
    payload
  }
}


export const deleteFoodItemMethod = (id) => {
  return (dispatch) => {
    return fetch(`${API_URL}/items/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json',
        access_token: localStorage.getItem("access_token"),
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Fetch Method not OK . . .");
        }
        return response.json();
      })
      .then((data) => {
        dispatch(fetchFoodItems()); //langsung fetch data
        dispatch(successDelete(data))
        //console.log(data, `<< msg nya ini`)
      })
      .catch((error) => {
        console.error(
          "Fetching Eror. . .Check Server:",
          error
        );
      });
  };
}


export const successEdit = (payload) => {
  return {
    type: EDIT_FOOD_ITEM_SUCCESS,
    payload,
  };
};

export const editFoodItemMethod = ({
  id,
  name,
  category,
  description,
  price,
  imgUrl,
}) => {
  return (dispatch) => {
    return fetch(`${API_URL}/items/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json',
        access_token: localStorage.getItem("access_token"),
      },
      body: JSON.stringify({
        name,
        category,
        description,
        price,
        imgUrl,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Fetch Method not OK . . .");
        }
        return response.json();
      })
      .then((data) => {
        dispatch(successEdit(data));
        dispatch(fetchFoodItems())
        //console.log(data, "<<< ini msg nya");
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  };
};



export const successAdd = (payload) => {
  return {
    type: ADD_FOOD_ITEM_SUCCESS,
    payload,
  };
};

export const addFoodItemMethod = ({
  name,
  category,
  description,
  price,
  imgUrl,
  IngredientOne,
  IngredientTwo,
  IngredientThree,
}) => {
  return (dispatch) => {
    return fetch(`${API_URL}/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json',
        access_token: localStorage.getItem("access_token"),
      },
      body: JSON.stringify({
        name,
        category,
        description,
        price,
        imgUrl,
        IngredientOne,
        IngredientTwo,
        IngredientThree,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Fetch Method not OK . . .");
        }
        return response.json();
      })
      .then((data) => {
        dispatch(successEdit(data));
        dispatch(fetchFoodItems())
        //console.log(data, "<<< ini msg nya");
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  };
};