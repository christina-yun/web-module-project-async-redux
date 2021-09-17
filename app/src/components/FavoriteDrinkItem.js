import React from 'react'

const FavoriteDrinkItem= (props) => {
    console.log('drinkItem', props.drink)
    return (
        <div>
           {props.drink.strDrink}
        </div>
    )
}
export default FavoriteDrinkItem;