import { API_URL } from "../../constants/url";
import { CATEGORY_FETCH_SUCCESS, LOADING_CATEGORY_PAGE, CATEGORY_FOOD_BY_ID_FETCH_SUCCESS, ADD_CATEGORY_FOOD_SUCCESS, ERROR_CATEGORY_PAGE, EDIT_CATEGORY_FOOD_SUCCESS, DELETE_CATEGORY_FOOD_SUCCESS, } from "./actionType";

export const categoryFetchSuccess = (payload) => {
  return {
    type: CATEGORY_FETCH_SUCCESS,
    payload,
  };
};

export const setLoadingCategoryPage = (payload) => {
  return {
    type: LOADING_CATEGORY_PAGE,
    payload,
  };
};

export const categoryFoodByIdFetchSuccess = (payload) => {
  return {
    type: CATEGORY_FOOD_BY_ID_FETCH_SUCCESS,
    payload,
  };
};

export const errorFoodPage = (payload) => {
  return {
    type: ERROR_CATEGORY_PAGE,
    payload,
  }
}

export const fetchFoodCategories = () => {
  return (dispatch) => {
    return fetch(`${API_URL}/categories`)
      .then((res) => {
        if (!res.ok) throw new Error("Error! Something wrong");
        else return res.json();
      })
      .then(data => dispatch(categoryFetchSuccess(data)))
      .catch((error) => dispatch(errorFoodPage(error)))
  }
}

export const fetchCategoryFoodById = (id) => {
  return (dispatch, getState) => {
    return fetch(`${API_URL}/categories/${id}`, {
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
        dispatch(categoryFoodByIdFetchSuccess(response))
      })
      .catch((error) => {
        console.error(
          "Fetching Eror. . .Check Server:",
          error
        );
      });
  };
};


// Add data
export const successAdd = (payload) => {
  return {
    type: ADD_CATEGORY_FOOD_SUCCESS,
    payload
  }
}

export const addCategoryFoodMethod = (payload) => {
  return (dispatch) => {
    return fetch(`${API_URL}/categories`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        access_token: localStorage.getItem('access_token')
      },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Error! Something wrong");
        else return res.json();
      })
      // .then((data) => dispatch(successAdd(data)))
      .then((data) => {
        dispatch(fetchFoodCategories())
        dispatch(successAdd(data))

      })
      .catch((error) => dispatch(errorFoodPage(error)))
  }
}

// Edit data
export const successEdit = (payload) => {
  return {
    type: EDIT_CATEGORY_FOOD_SUCCESS,
    payload
  }
}


export const editCategoryFoodMethod = ({ id, name }) => {
  return (dispatch) => {
    return fetch(`${API_URL}/categories/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json',
        access_token: localStorage.getItem("access_token"),
      },
      body: JSON.stringify({ name }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Fetch Method not OK . . .");
        }
        return response.json();
      })
      .then((data) => {
        dispatch(fetchFoodCategories());
        dispatch(successEdit(data))
        //console.log(data, "<<<<<<");
      })
      .catch((error) => {
        console.error(
          "Fetching Eror. . .Check Server:",
          error
        );
      });
  };
}


// Delete data
export const successDelete = (payload) => {
  return {
    type: DELETE_CATEGORY_FOOD_SUCCESS,
    payload
  }
}


export const deleteCategoryFoodMethod = (id) => {
  return (dispatch) => {
    return fetch(`${API_URL}/categories/${id}`, {
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
        dispatch(fetchFoodCategories()); //langsung fetch data
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