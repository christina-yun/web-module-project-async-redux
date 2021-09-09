import React, {  useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchStart, fetchSuccess, fetchFail } from '../actions/drinkActions';


const Search = (props) => {
    const [search, setSearch] = useState('');
    const { push } = useHistory();

    const handleChange = (event) => {
        setSearch(event.target.value);
    }

    // const allTheDrinks = () => {
    //     return (dispatch) => {
    //         dispatch(props.fetchStart());
    //         axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${search}`)
    //             .then(res => {
    //                 dispatch(props.fetchSuccess(res.data.drinks))
    //             })
    //             .catch(err => {
    //                 console.log('BIG ERROR', err)
    //             })
    //     }
    // }
    
    const handleSubmit= (e) => {
        e.preventDefault();
        // props.fetchStart();
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
        .then(res => {
            props.fetchSuccess(res.data.drinks)
        })
        .catch(err => {
            console.log('big', err)
        })
        push('/drinks')
    }

    return (
        <div className='search'>
            <form>
                <input onChange={handleChange} type='text' placeholder='Search By Ingredient' />
                <input onClick={handleSubmit} type='submit' value='Search'/>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        drinks: state.cocktail.drinks,
        isFetching: state.cocktail.isFetching,
        error: state.cocktail.error


    })
}

export default connect(mapStateToProps, {fetchStart, fetchSuccess, fetchFail})(Search);