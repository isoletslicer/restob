import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCategoryFoodMethod } from "../../../store/actions/actionCategoryFoodMethod";
import Swal from "sweetalert2";

export default function FormAddFoodCategory() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [newCategory, setNewCategory] = useState({ name: "" });

  const newCategoryHandler = (e) => {
    const { name, value } = e.target;
    setNewCategory({
      ...newCategory,
      [name]: value,
    });
  };

  const submitForm = async (e) => {
    try {
      e.preventDefault();
      let result = await dispatch(addCategoryFoodMethod(newCategory));
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Sukses Add Kategori Bosku",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/categories");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Eror Bosku... Cek dan penuhi lagi",
        text: error,
      });
    }
  };

  const backToCategoryPage = () => {
    navigate("/categories");
  };
  return (
    <section className="vh-100" id="form-food-category-page-section">
      <div className="container py-5 h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-12 col-lg-6 col-xl-6">
            <div className="card shadow-2-strong ">
              <div className="card-body p-3 p-md-1">
                <h4 className="pb-1 pb-md-0 mb-md-3">Add Food Category</h4>
                <form onSubmit={submitForm}>
                  <div className="row">
                    <div className="col-md-12 mb-1">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="name">
                          Name
                        </label>
                        <input
                          type="text"
                          onChange={newCategoryHandler}
                          name="name"
                          value={newCategory.name}
                          className="form-control form-control-md"
                          placeholder="Enter your food category..."
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <button
                      className="btn btn-warning"
                      onClick={backToCategoryPage}
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
