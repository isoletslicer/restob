// import ButtonAdd from "../buttoncomponents/ButtonAdd";
// import ButtonCancel from "../buttoncomponents/ButtonCancel";
// import ButtonRemove from "../buttoncomponents/ButtonRemove";
// import ButtonSubmit from "../buttoncomponents/ButtonSubmit";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { addIngredientMethod } from "../../../store/actions/actionIngredientFoodMethod";

export default function FormAddFoodIngredient() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [newIngredient, setNewIngredient] = useState({ name: "" });

  const newIngredientHandler = (e) => {
    const { name, value } = e.target;
    setNewIngredient({
      ...newIngredient,
      [name]: value,
    });
  };

  const submitForm = async (e) => {
    try {
      e.preventDefault();
      let result = await dispatch(addIngredientMethod(newIngredient));
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Sukses Masukin Ingredient Bosku",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/ingredients");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Eror Bosku... Cek dan penuhi lagi",
        text: error,
      });
    }
  };

  const backToIngredientPage = () => {
    navigate("/ingredients");
  };
  return (
    <section className="vh-100" id="form-food-ingredient-page-section">
      <div className="container py-5 h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-12 col-lg-6 col-xl-6">
            <div className="card shadow-2-strong ">
              <div className="card-body p-3 p-md-1">
                <h4 className="pb-1 pb-md-0 mb-md-3">Add Food Ingredient</h4>
                <form onSubmit={submitForm}>
                  <div className="row">
                    <div className="col-md-12 mb-1">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="name">
                          Name
                        </label>
                        <input
                          type="text"
                          onChange={newIngredientHandler}
                          name="name"
                          value={newIngredient.name}
                          className="form-control form-control-md"
                          placeholder="Enter your food ingredient..."
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <button
                      className="btn btn-warning"
                      onClick={backToIngredientPage}
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
