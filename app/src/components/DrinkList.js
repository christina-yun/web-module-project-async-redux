import React from 'react';
import DrinkListItem from './DrinkListItem';
import { Row } from 'reactstrap';
import { connect } from 'react-redux';

const DrinkList = (props) => {
    // can I somehow put the if statement here?
    const drinks = props.drinks;

    return (
        <div className='drinkList'>
            <h4>Drink List</h4>
            {/* if statement for undefined/null. For some reason, it doesn't reach to drinks.map so it needs to be */}
            <Row>
            {drinks===null||undefined ? 
                <h3>No such drink has that name. Time for you to go home.</h3> : 
            drinks.map(drink => {
                return <DrinkListItem key={drink.idDrink} drink={drink} />
            })}
            </Row>
        </div>
        
    )
}
const mapStateToProps = (state) => {
    return ({
        drinks: state.cocktail.drinks
    })
}
export default connect(mapStateToProps)(DrinkList);