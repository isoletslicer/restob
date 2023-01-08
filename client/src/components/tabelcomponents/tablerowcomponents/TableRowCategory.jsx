import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteCategoryFoodMethod } from "../../../store/actions/actionCategoryFoodMethod";
import Swal from "sweetalert2";

export default function TableRowCategory({
  item,
  index,
  setbodyManipulateCategoryFood,
}) {
  const dispatch = useDispatch();

  async function deleteCategoryExecute(e) {
    try {
      e.preventDefault();
      let result = dispatch(deleteCategoryFoodMethod(item.id));
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Sukses Delete bosku",
        text: result,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Eror Delete Bosku",
        text: error,
      });
    }
  }

  return (
    <tr className="table-active">
      <td>{index + 1}</td>
      <td>{item.name}</td>
      <td>
        <div className="container">
          <Link to={`edit/${item.id}`} className="btn btn-warning">
            Edit Category
          </Link>
          {/* <button onClick={() => setbodyManipulateCategoryFood(item)}>
            Edit V2{" "}
          </button> */}
          <button
            type="button"
            className="btn btn-danger"
            onClick={deleteCategoryExecute}
          >
            DELETE Category
          </button>{" "}
        </div>
      </td>
    </tr>
  );
}
