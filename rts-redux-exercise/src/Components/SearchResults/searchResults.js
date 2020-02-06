// http://hn.algolia.com/api/v1/search?query=

import React from 'react';
// ninjas.JS

const SearchResults = ({searchResults}) => {
    const searchResultsList = searchResults.map(ninja => {
        return ninja.age > 20 ? (
            <div className='searchResultItem' key={ninja.id}>
                <div>Name: {ninja.name}</div>
                <div>Age: {ninja.age} </div>
                <div>belt: {ninja.belt}</div>
            </div>
        ) : null
    })

    return(
        <div>
            hello from search results component
            <div className='searchResultsList'>
                {searchResultsList}
            </div>
        </div>
    )
}
export default SearchResults;
