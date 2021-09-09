import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from './../actions/drinkActions';

const initialState = {
    drinks:[{
        "idDrink": "11410",
        "strDrink": "Gin Fizz",
        "strAlcoholic": "Alcoholic",
        "strGlass": "Highball glass",
        "strInstructions": "Shake all ingredients with ice cubes, except soda water. Pour into glass. Top with soda water.",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/drtihp1606768397.jpg",
        "strIngredient1": "Gin",
        "strIngredient2": "Lemon",
        "strIngredient3": "Powdered sugar",
        "strIngredient4": "Carbonated water",
        "strIngredient5": null,
        "strIngredient6": null,
        "strIngredient7": null,
        "strIngredient8": null,
        "strIngredient9": null,
        "strIngredient10": null,
        "strIngredient11": null,
        "strIngredient12": null,
        "strIngredient13": null,
        "strIngredient14": null,
        "strIngredient15": null,
        "strMeasure1": "2 oz ",
        "strMeasure2": "Juice of 1/2 ",
        "strMeasure3": "1 tsp ",
        "strMeasure4": null,
        "strMeasure5": null,
        "strMeasure6": null,
        "strMeasure7": null,
        "strMeasure8": null,
        "strMeasure9": null,
        "strMeasure10": null,
        "strMeasure11": null,
        "strMeasure12": null,
        "strMeasure13": null,
        "strMeasure14": null,
        "strMeasure15": null,
        "strImageSource": "https://commons.wikimedia.org/wiki/File:15-09-26-RalfR-WLC-0032.jpg",

    },
    {
        "idDrink": "1234",
        "strDrink": "Orange juice",
        "strAlcoholic": "non-alcoholic",
        "strGlass": "milkjug",
        "strInstructions": "Pour into the milkjug until full",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/drtihp1606768397.jpg",
        "strIngredient1": "orange",
        "strIngredient2": "juice",
        "strIngredient3": null,
        "strIngredient4": null,
        "strIngredient5": null,
        "strIngredient6": null,
        "strIngredient7": null,
        "strIngredient8": null,
        "strIngredient9": null,
        "strIngredient10": null,
        "strIngredient11": null,
        "strIngredient12": null,
        "strIngredient13": null,
        "strIngredient14": null,
        "strIngredient15": null,
        "strMeasure1": "1 cup ",
        "strMeasure2": "3 liters ",
        "strMeasure3": null,
        "strMeasure4": null,
        "strMeasure5": null,
        "strMeasure6": null,
        "strMeasure7": null,
        "strMeasure8": null,
        "strMeasure9": null,
        "strMeasure10": null,
        "strMeasure11": null,
        "strMeasure12": null,
        "strMeasure13": null,
        "strMeasure14": null,
        "strMeasure15": null,
        "strImageSource": "https://commons.wikimedia.org/wiki/File:15-09-26-RalfR-WLC-0032.jpg",

    }],
    isFetching:false,
    error: ''
};

export const drinkReducer = (state = initialState, action) => {
    switch (action.type) {
        case(FETCH_START):
            return({
                ...state,
                // drinks:{},
                isFetching: true,
                error: ''
            });
        case(FETCH_SUCCESS):
            return({
                ...state,
                drinks: action.payload,
                isFetching: false,
                error: ''
            });
        case(FETCH_FAIL):
            return({
                ...state,
                // drinks:{},
                isFetching: false,
                error: action.payload
            })
        default:
            return state;
    }
}