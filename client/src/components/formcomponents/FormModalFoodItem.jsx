import { useSelector, useDispatch } from "react-redux";

import { useEffect } from "react";
import { fetchFoodCategories } from "../../store/actions/actionCategoryFoodMethod";
import { fetchFoodIngredients } from "../../store/actions/actionIngredientFoodMethod";

export default function FormModalFoodItem({
  bodyManipulateFoodItem,
  setbodyManipulateFoodItem,
}) {
  const dispatch = useDispatch();
  const { foodCategories } = useSelector((state) => state.foodCategoryReducer);
  const { foodIngredients } = useSelector(
    (state) => state.foodIngredientReducer
  );

  useEffect(() => {
    dispatch(fetchFoodCategories());
    dispatch(fetchFoodIngredients());
  }, [dispatch]);

  const bodyFoodItemFormHandler = (e) => {
    const { name, value } = e.target;
    setbodyManipulateFoodItem({
      ...bodyManipulateFoodItem,
      [name]: value,
    });
  };

  return (
    <div
      className="modal fade"
      id="form-modal-food-item"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              New/Edit Menu
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-1">
                <label className="form-label" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control form-control-md"
                  placeholder="Enter your food name..."
                  name="name"
                  onChange={bodyFoodItemFormHandler}
                  value={bodyManipulateFoodItem.name}
                />
              </div>
              <div className="mb-1">
                <label htmlFor="description" className="col-form-label">
                  Description
                </label>
                <textarea
                  className="form-control"
                  placeholder="Enter your food description..."
                  name="description"
                  onChange={bodyFoodItemFormHandler}
                  value={bodyManipulateFoodItem.description}
                ></textarea>
              </div>
              <div className="mb-1">
                <label className="form-label" htmlFor="price">
                  Price
                </label>
                <input
                  type="number"
                  className="form-control form-control-md"
                  placeholder="Enter your food price..."
                  name="price"
                  onChange={bodyFoodItemFormHandler}
                  value={bodyManipulateFoodItem.price}
                />
              </div>
              <div className="mb-1">
                <label className="form-label" htmlFor="imageUrl">
                  Image URL
                </label>
                <input
                  type="text"
                  className="form-control form-control-md"
                  placeholder="Enter your food image url... "
                  name="imageUrl"
                  onChange={bodyFoodItemFormHandler}
                  value={bodyManipulateFoodItem.imgUrl}
                />
              </div>
              <div className="mb-1">
                <label className="form-label" htmlFor="category">
                  Category
                </label>
                <select
                  value={bodyManipulateFoodItem.categoryId}
                  name="category"
                  onChange={bodyFoodItemFormHandler}
                  className="form-select form-control-lg"
                >
                  {/* <option value="default" disabled>
                    Choose your food category...
                  </option> */}
                  {foodCategories.map((category) => {
                    return (
                      <option value={category.id} key={category.id}>
                        {category.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="mb-1">
                <label className="form-label" htmlFor="ingredients">
                  Ingredients
                </label>
                <select
                  defaultValue={"default"}
                  name=""
                  className="form-select form-control-lg"
                >
                  <option value="default" disabled>
                    Choose your food ingredients...
                  </option>
                  {foodIngredients.map((ingredient) => {
                    return (
                      <option value={ingredient.id} key={ingredient.id}>
                        {ingredient.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-md btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="submit" className="btn btn-md btn-primary">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
