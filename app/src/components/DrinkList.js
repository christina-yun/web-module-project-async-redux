import React from 'react';
import DrinkListItem from './DrinkListItem';

import { connect } from 'react-redux';

const DrinkList = (props) => {
    const drinks = props.drinks;

    return (
        <div>
            <h4>Drink List</h4>
            {drinks.map(drink => {
                return <DrinkListItem key={drink.idDrink} drink={drink}/>
            })}
        </div>
        
    )
}
const mapStateToProps = (state) => {
    return ({
        drinks: state.cocktail.drinks
    })
}
export default connect(mapStateToProps)(DrinkList);