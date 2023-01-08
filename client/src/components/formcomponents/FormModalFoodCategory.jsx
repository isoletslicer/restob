// kalo pake modal, dan di halaman sama, gaperlu ngefetch
export default function FormModalFoodCategory({
  bodyManipulateCategoryFood,
  setbodyManipulateCategoryFood,
}) {
  // // bikin handler utk shorthand
  const bodyFormFoodCategoryHandler = (e) => {
    const { name, value } = e.target;
    setbodyManipulateCategoryFood({
      ...bodyManipulateCategoryFood,
      [name]: value,
    });
  };

  return (
    <div
      className="modal fade"
      id="form-modal-food-category"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Add||Edit Food Category
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="row">
                <div className="col-md-12 mb-1">
                  <div className="form-outline">
                    <label className="form-label" htmlFor="name">
                      Name
                    </label>
                    <input
                      type="text"
                      onChange={bodyFormFoodCategoryHandler}
                      name="name"
                      value={bodyManipulateCategoryFood.name}
                      className="form-control form-control-md"
                      placeholder="Enter your food category name..."
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
