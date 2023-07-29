import { useState } from "react";

function SearchBar (props){
    const {products, filterProducts} = props;
 
    const handleChange = (event) => {
        console.log('handleChange', event.target.value);
        filterProducts(event.target.value);
    }

    return(
        <div className='SearchBar'>
            <h2>Search</h2>
            <input type="text" onChange= {handleChange} placeholder="search"/>
        </div>
    )
}

export default SearchBar;