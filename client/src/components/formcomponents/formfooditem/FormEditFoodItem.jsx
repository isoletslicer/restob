// import ButtonCancel from "../buttoncomponents/ButtonCancel";
// import ButtonSubmit from "../buttoncomponents/ButtonSubmit";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import Swal from "sweetalert2";
import { API_URL } from "../../../constants/url";
import { fetchFoodCategories } from "../../../store/actions/actionCategoryFoodMethod";
import { editFoodItemMethod } from "../../../store/actions/actionFoodItemMethod";

export default function FormEditFoodItem() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // fetch all food categories
  useEffect(() => {
    dispatch(fetchFoodCategories());
  }, []);

  const { foodCategories } = useSelector((state) => state.foodCategoryReducer);

  // use state

  const [newItem, setNewItem] = useState({
    name: "",
    description: "",
    price: "",
    imgUrl: "",
    category: "",
  });

  const itemHandler = (e) => {
    const { name, value } = e.target;
    setNewItem({
      ...newItem,
      [name]: value,
    });
  };

  // fetch food item by id
  useEffect(() => {
    fetch(`${API_URL}/items/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Fetch Method not OK ...");
        }
        return response.json();
      })
      .then((response) => {
        setNewItem({
          name: response.name,
          category: response.categoryId,
          description: response.description,
          price: response.price,
          imgUrl: response.imgUrl,
        });
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
  }, []);
  //  end of fetch by id

  // excecute
  const editFoodItemExecute = (e) => {
    e.preventDefault();
    dispatch(
      editFoodItemMethod({
        id: id,
        name: newItem.name,
        category: newItem.category,
        description: newItem.description,
        price: newItem.price,
        imgUrl: newItem.imgUrl,
      })
    )
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Sukses Update Data bosku",
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
    <section className="vh-100" id="form-food-item-page-section">
      <div className="container py-5 h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-12 col-lg-6 col-xl-6">
            <div className="card shadow-2-strong ">
              <div className="card-body p-3 p-md-1">
                <h4 className="pb-1 pb-md-0 mb-md-3">Edit Food Item</h4>
                <form onSubmit={editFoodItemExecute}>
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
                          selected
                          className="form-select form-control-lg"
                        >
                          <option value="" disabled>
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
