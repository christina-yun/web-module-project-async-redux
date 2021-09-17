import React from 'react';
import { connect } from 'react-redux'

import FavoriteDrinkItem from './FavoriteDrinkItem';

const FavoriteDrinksList = (props) => {
const favoriteDrinks = props.favorites;

    return (
        <div className='favorite-drinks'>
            <h3> Favorite Drinks!</h3>
            {favoriteDrinks.map(drink => {
                return (
                    <FavoriteDrinkItem drink={drink} key={drink.idDrink}/>
                )
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return({
        favorites: state.faves.favorites
    })
}


export default connect(mapStateToProps)(FavoriteDrinksList);