import React, {  useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { allTheDrinks } from '../actions/drinkActions';

const Search = (props) => {
    const [search, setSearch] = useState('');
    const { push } = useHistory();

    const handleChange = (event) => {
        setSearch(event.target.value);
    }
    
    const handleSubmit= (e) => {
        e.preventDefault();
        
        props.allTheDrinks(search);
        push('/drinks')
    }

    return (
        <div className='search'>
            <form>
                <input onChange={handleChange} type='text' placeholder='Search By Name' />
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

// export default connect(mapStateToProps, {fetchStart, fetchSuccess, fetchFail})(Search);

export default connect(mapStateToProps, { allTheDrinks })(Search);