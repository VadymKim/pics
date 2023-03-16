import './searchBar.css';
import React from 'react';
import { useState } from 'react';

function SearchBar({onSubmit}) {
    const [term, setTerm] = useState('');
    const handleChange = (event) => {
        setTerm(event.target.value);
    };
    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
    };

    return (
    <div className="search-bar">
        <form onSubmit={handleFormSubmit}>

            <div>
                <label>Enter search term for images:</label>
                <input  value={term} onChange={handleChange} />
            </div>
           <div className='caption'>Images for everyone`s interest</div>
           <div></div>
        </form>
    </div>
    )
}

export default SearchBar;