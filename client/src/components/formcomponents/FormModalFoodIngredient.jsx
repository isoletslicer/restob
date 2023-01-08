// import { API_URL } from "../../constants/url";
// import { useNavigate } from "react-router-dom";
// import useFetch from "../../hooks/useFetch";
// import { useState, useEffect } from "react";

export default function FormModalFoodIngredient({
  bodyManipulateIngredientFood,
  setbodyManipulateIngredientFood,
}) {
  // const [bodyFormFoodIngredient, setbodyFormFoodIngredient] = useState({
  //   name: "",
  // });
  //console.log(bodyManipulateIngredientFood, ` << ini masuk bodi nya`);

  //console.log(setbodyManipulateIngredientFood, `<< ini setter nya masok`);
  // bikin handler utk shorthand
  const bodyFormFoodIngredientHandler = (e) => {
    const { name, value } = e.target;
    setbodyManipulateIngredientFood({
      ...bodyManipulateIngredientFood,
      [name]: value,
    });
  };

  return (
    <div
      className="modal fade"
      id="form-modal-food-ingredient"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Add||Edit Food Ingredient
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
              <div className="row">
                <div className="col-md-12 mb-1">
                  <div className="form-outline">
                    <label className="form-label" htmlFor="name">
                      Name
                    </label>
                    <input
                      type="text"
                      onChange={bodyFormFoodIngredientHandler}
                      name="name"
                      value={bodyManipulateIngredientFood.name}
                      className="form-control form-control-md"
                      placeholder="Enter your food ingredient name..."
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
