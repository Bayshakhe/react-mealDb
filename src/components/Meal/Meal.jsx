import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

const Meal = (props) => {
    const {idMeal, strMeal, strMealThumb} = props.meal;
    
    return (
        <div className='text-left h-full'>
            <img src={strMealThumb} alt="" />
            <p className='font-bold my-3'>Menu: {strMeal}</p>
            <label onClick={()=>props.setUniqueId(idMeal)} htmlFor="my-modal-5"  className='btn btn-info text-white mr-3'>See Details</label>
            
            <button className='btn btn-error text-white'>Add Menu <FontAwesomeIcon className='ml-2' icon={faPlusCircle} /></button>

        </div>
    );
};

export default Meal;