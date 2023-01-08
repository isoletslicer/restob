import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import Swal from "sweetalert2";
import rupiahFormatter from "../../../helpers/formattedRupiah";
import { deleteFoodItemMethod } from "../../../store/actions/actionFoodItemMethod";
// import FormModalDetailFoodIngredient from "../../formcomponents/FormModalDetailFoodIngredient";

export default function TableRowDashBoard({
  item,
  index,
  setbodyManipulateFoodItem,
}) {
  const dispatch = useDispatch();
  async function deleteItemExecute(e) {
    try {
      e.preventDefault();
      let result = dispatch(deleteFoodItemMethod(item.id));
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Sukses Delete Bosku",
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
  // //console.log(item.category, item.name);
  return (
    <tr className="table-active">
      <td>{index + 1}</td>
      <td>{item.name}</td>
      <td>{item.Category ? item.Category.name : "kategori not found"}</td>
      <td>{rupiahFormatter(item.price)}</td>
      <td>{item.User.username}</td>
      <td>
        <img
          src={item.imgUrl}
          className="card-img-top"
          alt="gambar-makanan"
          width="25px"
          height="50px"
        />
      </td>
      <td>
        <button
          type="button"
          className="btn btn-info"
          data-bs-toggle="modal"
          data-bs-target="#modal-detail-ingredient"
          data-bs-whatever="@mdo"
          onClick={() => setbodyManipulateFoodItem(item)}
        >
          See Ingredients
        </button>
      </td>
      <td>
        <div className="container">
          {/* <button
            type="button"
            className="btn btn-dark"
            data-bs-toggle="modal"
            data-bs-target="#form-modal-food-item"
            data-bs-whatever="@mdo"
            onClick={() => setbodyManipulateFoodItem(item)}
          >
            Edit Data
          </button> */}
          <Link to={`editfooditem/${item.id}`} className="btn btn-warning">
            Edit Category
          </Link>
          <button
            type="button"
            className="btn btn-danger"
            onClick={deleteItemExecute}
          >
            DELETE
          </button>{" "}
        </div>
      </td>
    </tr>
  );
}
