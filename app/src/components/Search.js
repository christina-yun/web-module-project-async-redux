import React, {  useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { allTheDrinks } from '../actions/drinkActions';
import { Form, FormGroup, Input, Button } from 'reactstrap';

const Search = (props) => {
    const [search, setSearch] = useState('');
    const { push } = useHistory();

    const handleChange = (event) => {
        setSearch(event.target.value);
    }
    
    const handleSubmit= (e) => {
        e.preventDefault();
        props.allTheDrinks(search);
        push('/drinks');
    }

    return (
        <div className='search'>
            <Form>
                <FormGroup className='inputs'>
                    <Input onChange={handleChange} type='text' placeholder='Search By Name' />
                    <Button className='submit' onClick={handleSubmit}>Search</Button>
                </FormGroup>
            </Form>
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

export default connect(mapStateToProps, { allTheDrinks })(Search);