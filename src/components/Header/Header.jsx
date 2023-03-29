import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div className='bg-orange-100 p-4'>
            <h1 className='text-4xl font-bold text-red-500'>The Meal DB <span className='rounded-full bg-red-500 px-3 py-1 text-white'><FontAwesomeIcon icon={faUtensils} /></span></h1>

        </div>
    );
};

export default Header;