// import ButtonCancel from "../buttoncomponents/ButtonCancel";
// import ButtonSubmit from "../buttoncomponents/ButtonSubmit";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../../constants/url";
import { fetchFoodCategories } from "../../../store/actions/actionCategoryFoodMethod";
import {
  addFoodItemMethod,
  fetchFoodItems,
} from "../../../store/actions/actionFoodItemMethod";
import { fetchFoodIngredients } from "../../../store/actions/actionIngredientFoodMethod";

import Swal from "sweetalert2";

export default function FormAddFoodItem() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [newItem, setNewItem] = useState({
    name: "",
    description: "",
    price: "",
    imgUrl: "",
    category: "",
    IngredientOne: "",
    IngredientTwo: "",
    IngredientThree: "",
  });
  // panggil category dan ingredient
  useEffect(() => {
    dispatch(fetchFoodCategories());
    dispatch(fetchFoodIngredients());
  }, []);

  const { foodCategories } = useSelector((state) => state.foodCategoryReducer);
  const { foodIngredients } = useSelector(
    (state) => state.foodIngredientReducer
  );

  const itemHandler = (e) => {
    const { name, value } = e.target;
    setNewItem({
      ...newItem,
      [name]: value,
    });
  };

  // excecute
  const addFoodItemExecute = (e) => {
    e.preventDefault();
    dispatch(
      addFoodItemMethod({
        name: newItem.name,
        category: newItem.category,
        description: newItem.description,
        price: newItem.price,
        imgUrl: newItem.imgUrl,
        IngredientOne: newItem.IngredientOne,
        IngredientTwo: newItem.IngredientTwo,
        IngredientThree: newItem.IngredientThree,
      })
    )
      .then((response) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Sukses Add Data bosku",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Eror Bosku... Cek dan penuhi lagi",
          text: error,
        });
        //console.log(error);
        console.error("There has been a problem fetch method :", error);
      });
  };

  const backToDashboardPage = () => {
    navigate("/");
  };

  return (
    <section className="" id="form-food-item-page-section">
      <div className="container py-5 ">
        <div className="row justify-content-center align-items-center ">
          <div className="col-12 col-lg-6 col-xl-6">
            <div className="card shadow-2-strong ">
              <div className="card-body p-3 p-md-1">
                <h4 className="pb-1 pb-md-0 mb-md-3">Add Food Item</h4>
                <form onSubmit={addFoodItemExecute}>
                  <div className="row">
                    <div className="col-md-12 mb-1">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="name">
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          onChange={itemHandler}
                          value={newItem.name}
                          className="form-control form-control-md"
                          placeholder="Enter your food name..."
                        />
                      </div>
                    </div>
                    <div className="col-md-12 mb-1">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="description">
                          Description
                        </label>
                        <input
                          type="text"
                          name="description"
                          onChange={itemHandler}
                          value={newItem.description}
                          className="form-control form-control-md"
                          placeholder="Enter your food description..."
                        />
                      </div>
                    </div>
                    <div className="col-md-12 mb-1">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="price">
                          Price
                        </label>
                        <input
                          type="number"
                          name="price"
                          onChange={itemHandler}
                          value={newItem.price}
                          className="form-control form-control-md"
                          placeholder="Enter your food price..."
                        />
                      </div>
                    </div>
                    <div className="col-md-12 mb-1">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="category">
                          Category
                        </label>
                        <select
                          name="category"
                          value={newItem.category}
                          onChange={itemHandler}
                          className="form-select form-control-lg"
                        >
                          <option value="" selected disabled>
                            Choose Food Category
                          </option>
                          {foodCategories.map((category) => {
                            return (
                              <option value={category.id}>
                                {category.name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12 mb-1">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="imgUrl">
                          Image URL
                        </label>
                        <input
                          type="text"
                          name="imgUrl"
                          value={newItem.imgUrl}
                          onChange={itemHandler}
                          className="form-control form-control-md"
                          placeholder="Enter your food image URL...."
                        />
                      </div>
                    </div>
                    <div className="col-md-12 mb-1">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="category">
                          Ingredient 1 :
                        </label>
                        <select
                          name="IngredientOne"
                          value={newItem.IngredientOne}
                          onChange={itemHandler}
                          className="form-select form-control-lg"
                        >
                          <option value="" selected disabled>
                            Choose Food Ingredient
                          </option>
                          {foodIngredients.map((ingredient) => {
                            return (
                              <option value={ingredient.id}>
                                {ingredient.name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12 mb-1">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="category">
                          Ingredient 2 :
                        </label>
                        <select
                          name="IngredientTwo"
                          value={newItem.IngredientTwo}
                          onChange={itemHandler}
                          className="form-select form-control-lg"
                        >
                          <option value="" selected disabled>
                            Choose Food Ingredient
                          </option>
                          {foodIngredients.map((ingredient) => {
                            return (
                              <option value={ingredient.id}>
                                {ingredient.name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12 mb-1">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="category">
                          Ingredient 3 :
                        </label>
                        <select
                          name="IngredientThree"
                          value={newItem.IngredientThree}
                          onChange={itemHandler}
                          className="form-select form-control-lg"
                        >
                          <option value="" selected disabled>
                            Choose Food Ingredient
                          </option>
                          {foodIngredients.map((ingredient) => {
                            return (
                              <option value={ingredient.id}>
                                {ingredient.name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button
                      className="btn btn-warning"
                      onClick={backToDashboardPage}
                    >
                      Cancel
                    </button>{" "}
                    <button type="submit" className="btn btn-success">
                      SUBMIT
                    </button>{" "}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
