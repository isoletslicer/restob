import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editCategoryFoodMethod } from "../../../store/actions/actionCategoryFoodMethod";
import Swal from "sweetalert2";
import { API_URL } from "../../../constants/url";

export default function FormEditFoodCategory() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [newCategory, setNewCategory] = useState({ name: "" });

  const { message } = useSelector((state) => state.foodCategoryReducer);

  const newCategoryHandler = (e) => {
    const { name, value } = e.target;
    setNewCategory({
      ...newCategory,
      [name]: value,
    });
  };

  useEffect(() => {
    // fetch by id langsung aja dah disini. capek
    fetch(`${API_URL}/categories/${id}`, {
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
        setNewCategory({ name: response.name });
        //console.log(response, "<<<<<<");
      })
      .catch((error) => {
        console.error("Fetching Eror. . .Check Server:", error);
      });
  }, []);

  // excecute
  const editFoodCategoryExecute = (e) => {
    e.preventDefault();
    dispatch(
      editCategoryFoodMethod({
        id: id,
        name: newCategory.name,
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
        navigate("/categories");
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
  //console.log(newCategory, `diluar`);
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
                <h4 className="pb-1 pb-md-0 mb-md-3">Edit Food Category</h4>
                <form onSubmit={editFoodCategoryExecute}>
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
