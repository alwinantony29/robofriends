import React from 'react';


const Search = (searchfield, searchchange) => {
    return (
        < div>
            <input className='pa3 ba b--green bg-lightest-blue' type='Search' placeholder='Search Robots' />
            onChange={searchchange}
        </div>
    );
}
export default Search;