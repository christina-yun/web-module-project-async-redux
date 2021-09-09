import React from 'react';

const handleChange = (event) => {
    console.log(event.target.value)
}

const handleSubmit= (e) => {
    e.preventDefault();
    console.log(e.target.value)
}
const Search = (props) => {
    return (
        <div className='search'>
            <form>
                <input onChange={handleChange} type='text' placeholder='Search By Ingredient' />
                <input onClick={handleSubmit} type='submit' value='Search'/>
            </form>
        </div>
    )
}
export default Search;