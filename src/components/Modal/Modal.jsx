import React from "react";

const Modal = (props) => {
    console.log(props.meal.meals[0])
    const {idMeal, strMeal, strMealThumb, strArea, strCategory} = props.meal.meals[0];
  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-7/12 max-w-2xl">
            <div className="flex gap-5  items-center text-left">
            <img className="h-64" src={strMealThumb} alt="" />
            <div>
            <p className="font-bold text-lg">Item: {strMeal}</p>
            <p>Category: {strCategory}</p>
            <p>Area: {strArea}</p>
          </div>
            </div>
          <div className="modal-action">
            <label htmlFor="my-modal-5" className="btn">
              OK!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
