import TableRowIngredient from "./tablerowcomponents/TableRowIngredient";
// import FormModalFoodIngredient from "../formcomponents/FormModalFoodIngredient";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  fetchFoodIngredients,
  setLoadingIngredientPage,
} from "../../store/actions/actionIngredientFoodMethod";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function TableIngredient() {
  // load data dari use fetch
  // coba array destruct

  const [bodyManipulateIngredientFood, setbodyManipulateIngredientFood] =
    useState({ name: "" });

  const dispatch = useDispatch();

  const { foodIngredients } = useSelector(
    (state) => state.foodIngredientReducer
  );

  const { isLoadingIngredientPage } = useSelector(
    (state) => state.foodIngredientReducer
  );

  useEffect(() => {
    dispatch(setLoadingIngredientPage(true));
    dispatch(fetchFoodIngredients()).finally(() => {
      dispatch(setLoadingIngredientPage(false));
    });
  }, [dispatch]);

  if (isLoadingIngredientPage) {
    return <h3>Loading....</h3>;
  }

  // if (error) {
  //   return <h3>Error!</h3>;
  // }

  return (
    <section className="" id="table-ingredient-section">
      <div className="container py-5 ">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-12 col-lg-12 col-xl-12">
            <div className="card shadow-2-strong " id="card-table-ingredient">
              <div className="card-body p-3 p-md-3">
                <div className="container-fluid">
                  <div className="container-fluid d-flex justify-content-between">
                    <h2 className="">Ingredient List</h2>
                    {/* <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#form-modal-food-ingredient"
                      data-bs-whatever="@mdo"
                      onClick={() =>
                        setbodyManipulateIngredientFood({ name: "" })
                      }
                    >
                      + Modal Add
                    </button>
                    <FormModalFoodIngredient
                      bodyManipulateIngredientFood={
                        bodyManipulateIngredientFood
                      }
                      setbodyManipulateIngredientFood={
                        setbodyManipulateIngredientFood
                      }
                    /> */}
                    <Link to={`add/`} className="btn btn-info">
                      add ingredient
                    </Link>
                  </div>
                  {/* {JSON.stringify(bodyManipulateIngredientFood)} */}
                  <table className="table table-striped table-hover">
                    <thead>
                      <tr className="table-info">
                        <th scope="col">No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {foodIngredients.map((item, index) => {
                        return (
                          <TableRowIngredient
                            key={item.id}
                            item={item}
                            index={index}
                            setbodyManipulateIngredientFood={
                              setbodyManipulateIngredientFood
                            }
                          />
                        );
                      })}
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
