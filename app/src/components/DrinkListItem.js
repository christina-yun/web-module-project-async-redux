import React from 'react';
import { Link } from 'react-router-dom';

const DrinkListItem = (props) => {
    return(
        <div className='drink-card'>
            
            <img src='#' width='100px' alt='a cocktail'/>
            <h3>Drink List Item Name</h3>

            {/* Need to come back and link to drink id */}
            
            <Link to={`/drinks/    `} className='view'>
                <button className='drink-details'>View Details</button>
            </Link>
        </div>
        
    ) 
}
export default DrinkListItem;