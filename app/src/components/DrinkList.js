import React from 'react';
import DrinkListItem from './DrinkListItem';

import { connect } from 'react-redux';

const DrinkList = (props) => {
    // can I somehow put the if statement here?
    const drinks = props.drinks;

    return (
        <div>
            <h4>Drink List</h4>
            {/* if statement for undefined/null. For some reason, it doesn't reach to drinks.map so it needs to be */}
            {drinks===null||undefined ? 
                <h3>Nope</h3> : 
            drinks.map(drink => {
                return <DrinkListItem key={drink.idDrink} drink={drink} />
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