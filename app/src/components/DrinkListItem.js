import React from 'react';
import { Link } from 'react-router-dom';

const DrinkListItem = (props) => {
    const { drink } = props;
    console.log(drink)
    return(
        <div className='drink-card'>
            
            <img src={drink.strDrinkThumb} width='100px' alt='a cocktail'/>
            <h3>{drink.strDrink}</h3>
            <Link to={`/drinks/${drink.idDrink}`} className='view'>
                <button className='drink-details'>View Details</button>
            </Link>
        </div>
        
    ) 
}
export default DrinkListItem;