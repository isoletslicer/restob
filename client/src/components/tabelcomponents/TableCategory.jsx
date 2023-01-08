import TableRowCategory from "./tablerowcomponents/TableRowCategory";
// import FormModalFoodCategory from "../formcomponents/FormModalFoodCategory";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import {
  fetchFoodCategories,
  setLoadingCategoryPage,
} from "../../store/actions/actionCategoryFoodMethod";
import { useState } from "react";
export default function TableCategory() {
  // load data dari use fetch
  // coba array destruct
  const [bodyManipulateCategoryFood, setbodyManipulateCategoryFood] = useState({
    name: "",
  });

  const dispatch = useDispatch();
  // dispatch semua state nya
  const { foodCategories } = useSelector((state) => state.foodCategoryReducer);
  const { isLoadingCategoryPage } = useSelector(
    (state) => state.foodCategoryReducer
  );
  useEffect(() => {
    dispatch(setLoadingCategoryPage(true));
    dispatch(fetchFoodCategories()).finally((_) => {
      dispatch(setLoadingCategoryPage(false));
    });
  }, [dispatch]);

  if (isLoadingCategoryPage) {
    return <h3>Loading....</h3>;
  }

  return (
    <section className="" id="table-category-section">
      <div className="container py-5 ">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-12 col-lg-12 col-xl-12">
            <div className="card shadow-2-strong " id="card-table-category">
              <div className="card-body p-3 p-md-3">
                <div className="container-fluid">
                  <div className="container-fluid d-flex justify-content-between">
                    <h2 className="">Category List</h2>

                    <Link to={`add/`} className="btn btn-info">
                      Add Category
                    </Link>
                  </div>
                  {/* {JSON.stringify(bodyManipulateCategoryFood)} */}
                  <table className="table table-striped table-hover">
                    <thead>
                      <tr className="table-info">
                        <th scope="col">No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {foodCategories.map((item, index) => {
                        return (
                          <TableRowCategory
                            key={item.id}
                            item={item}
                            index={index}
                            setbodyManipulateCategoryFood={
                              setbodyManipulateCategoryFood
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
