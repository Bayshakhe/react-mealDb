import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import Modal from '../Modal/Modal';
import Order from '../Order/Order';

const Container = () => {
    const [meals, setMeals] = useState([]);
    const [meal, setMeal] = useState({});
    const [uniqueId, setUniqueId] = useState(null)

    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${uniqueId}`)
        .then(res=>res.json())
        .then(data=> setMeal(data))
    },[uniqueId])

    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res=> res.json())
        .then(data => setMeals(data.meals))
    },[])
    return (
        <div className='flex gap-3'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 m-8'>
                {
                    meals.map(meal=> <Meal key={meal.idMeal} meal={meal} setUniqueId={setUniqueId}></Meal>)
                }
                <Modal meal={meal}></Modal>
            </div>
            <div>
                <Order></Order>
            </div>
        </div>
    );
};

export default Container;