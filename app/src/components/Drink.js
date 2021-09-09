import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

const Drink = (props) => {

    const { id } = useParams();
    const { push } = useHistory();

    const drinks = props.drinks;
    const drink = drinks.find(drink => drink.idDrink===id);
     
    
    const doNotDisplay = (input) => {
        return input === '' ? '' : input;
    }

    

    return (
        <div className='drink'>
            <div className='drink-details'>
                <div className='drink-name-and-glass'>
                    <label>{drink.strDrink}</label><br></br>
                    <label>Served in: {drink.strGlass} </label>
                </div>
                <div className='drink-ingredients'>
                    <label>Ingredients:</label>
                    <div>
                    <p>
                    {doNotDisplay(drink.strMeasure1)}{doNotDisplay(drink.strIngredient1)}
                    </p>

                    <p>
                    {doNotDisplay(drink.strMeasure2)}{doNotDisplay(drink.strIngredient2)}
                    </p>

                    <p>
                    {doNotDisplay(drink.strMeasure3)}
                    {doNotDisplay(drink.strIngredient3)}
                    </p>

                    <p>
                    {doNotDisplay(drink.strMeasure4)}
                    {doNotDisplay(drink.strIngredient4)}
                    </p>

                    <p>
                    {doNotDisplay(drink.strMeasure5)}
                    {doNotDisplay(drink.strIngredient5)}
                    </p>

                    <p>
                    {doNotDisplay(drink.strMeasure6)}
                    {doNotDisplay(drink.strIngredient6)}
                    </p>

                    <p>
                    {doNotDisplay(drink.strMeasure7)}
                    {doNotDisplay(drink.strIngredient7)}
                    </p>

                    <p>
                    {doNotDisplay(drink.strMeasure8)}
                    {doNotDisplay(drink.strIngredient8)}
                    </p>

                    <p>
                    {doNotDisplay(drink.strMeasure9)}
                    {doNotDisplay(drink.strIngredient9)}
                    </p>

                    <p>
                    {doNotDisplay(drink.strMeasure10)}
                    {doNotDisplay(drink.strIngredient10)}
                    </p>

                    <p>
                    {doNotDisplay(drink.strMeasure11)}
                    {doNotDisplay(drink.strIngredient11)}
                    </p>

                    <p>
                    {doNotDisplay(drink.strMeasure12)}
                    {doNotDisplay(drink.strIngredient12)}
                    </p>

                    <p>
                    {doNotDisplay(drink.strMeasure13)}
                    {doNotDisplay(drink.strIngredient13)}
                    </p>

                    <p>
                    {doNotDisplay(drink.strMeasure14)}
                    {doNotDisplay(drink.strIngredient14)}
                    </p>

                    <p>
                    {doNotDisplay(drink.strMeasure15)}
                    {doNotDisplay(drink.strIngredient15)}
                    </p>
                    </div>

                </div>
                <div className='drink-instructions'>
                    <p>Instructions:<br></br>
                    {drink.strInstructions}</p>
                </div>
            </div>
            <section>
                <span>Favorite</span>
            </section> 
        </div>
    )
}
const mapStateToProps = (state) => {
    return ({
        drinks: state.cocktail.drinks
    })
}
export default connect(mapStateToProps)(Drink);