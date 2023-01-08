export default function TableRowIngredient({
  item,
  index,
  setbodyManipulateIngredientFood,
}) {
  return (
    <tr className="table-active">
      <td>{index + 1}</td>
      <td>{item.name}</td>
      <td>
        <div className="container">
          {/* <button onClick={() => setbodyManipulateIngredientFood(item)}>
            Edit{" "}
          </button> */}
          {/* <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#form-modal-food-ingredient"
            data-bs-whatever="@mdo"
            onClick={() => setbodyManipulateIngredientFood(item)}
          >
            Edit Ingredient
          </button> */}
          {/* <button type="button" className="btn btn-danger">
            DELETE
          </button> */}
        </div>
      </td>
    </tr>
  );
}
