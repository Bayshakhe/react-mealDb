import React from 'react';

const Meal = (props) => {
    const {idMeal, strMeal, strMealThumb} = props.meal;
    
    return (
        <div className='text-left h-full'>
            <img src={strMealThumb} alt="" />
            <p className='font-bold my-3'>Menu: {strMeal}</p>
            <label onClick={()=>props.setUniqueId(idMeal)} htmlFor="my-modal-5"  className='btn btn-info text-white mr-3'>See Details</label>
            
            <button className='btn btn-error text-white'>Add Menu</button>

        </div>
    );
};

export default Meal;