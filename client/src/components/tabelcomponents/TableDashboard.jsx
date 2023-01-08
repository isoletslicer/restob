import TableRowDashBoard from "./tablerowcomponents/TableRowDashboard";
// import FormModalFoodItem from "../formcomponents/FormModalFoodItem";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import {
  fetchFoodItems,
  setLoadingFoodItemPage,
} from "../../store/actions/actionFoodItemMethod";
import FormModalDetailFoodIngredient from "../formcomponents/FormModalDetailFoodIngredient";

export default function TableDashboard() {
  // load data dari use fetch
  // coba array destruct

  const dispatch = useDispatch();

  const [bodyManipulateFoodItem, setbodyManipulateFoodItem] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    imgUrl: "",
    Ingredients: [],
  });

  const { foodItems } = useSelector((state) => state.foodItemReducer);
  const { isLoadingFoodItemPage } = useSelector(
    (state) => state.foodItemReducer
  );

  useEffect(() => {
    dispatch(setLoadingFoodItemPage(true));
    dispatch(fetchFoodItems()).finally((_) => {
      dispatch(setLoadingFoodItemPage(false));
    });
  }, [dispatch]);

  if (isLoadingFoodItemPage) {
    return <h3>Loading....</h3>;
  }

  // if (error) {
  //   return <h3>Error!</h3>;
  // }

  return (
    <section className="" id="table-food-item-section">
      <div className="container py-5 ">
        <div className="row justify-content-center align-items-center ">
          <div className="col-12 col-lg-12 col-xl-12">
            <div className="card shadow-2-strong " id="card-table-food-item">
              <div className="card-body p-3 p-md-3">
                <div className="container-fluid">
                  <div className="container-fluid d-flex justify-content-between">
                    <h2 className="">Dashboard Food List</h2>
                    {/* <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#form-modal-food-item"
                      data-bs-whatever="@mdo"
                      onClick={() =>
                        setbodyManipulateFoodItem({
                          name: "",
                          description: "",
                          price: "",
                          category: "",
                          imgUrl: "",
                          Ingredients: [],
                        })
                      }
                    >
                      + Modal Add
                    </button>
                    <FormModalFoodItem
                      bodyManipulateFoodItem={bodyManipulateFoodItem}
                      setbodyManipulateFoodItem={setbodyManipulateFoodItem}
                    /> */}
                    <FormModalDetailFoodIngredient
                      bodyManipulateFoodItem={bodyManipulateFoodItem}
                    />
                    <Link to={`addfooditem/`} className="btn btn-primary">
                      Add Food
                    </Link>
                  </div>
                  <table className="table table-striped table-hover">
                    <thead>
                      <tr className="table-info">
                        <th scope="col">No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Category</th>
                        <th scope="col">Price</th>
                        <th scope="col">Created By</th>
                        <th scope="col">Image</th>
                        <th scope="col">Detail Ing</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {foodItems.map((item, index) => (
                        <TableRowDashBoard
                          key={item.id}
                          item={item}
                          index={index}
                          setbodyManipulateFoodItem={setbodyManipulateFoodItem}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
