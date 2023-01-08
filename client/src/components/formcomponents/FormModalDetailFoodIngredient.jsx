export default function FormModalDetailFoodIngredient({
  bodyManipulateFoodItem,
}) {
  return (
    <div
      className="modal fade"
      id="modal-detail-ingredient"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Ingredients :
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {/* <ul>{JSON.stringify(bodyManipulateFoodItem.Ingredients)}</ul> */}

            <ul>
              {bodyManipulateFoodItem.Ingredients.map((item) => {
                return <li key={item.id}>{item.name}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
