import React from 'react';
import PropTypes from 'prop-types';

const Search = (props) => {
    console.log(props)
    const { searchchange } = props
    return (
        < div>
            <input onChange={searchchange} className='pa3 ba b--green bg-lightest-blue' type='Search' placeholder='Search Robots' />
        </div>
    );
}
Search.propTypes = {
    searchchange: PropTypes.func.isRequired
};
export default Search;