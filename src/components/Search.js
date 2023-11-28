import React from "react"

function Search({ updateSearch, search }) {
    return(
        <div className="search-container">
            {/* setting input value to search prop so that it is controlled */}
            <input type="text" placeholder="Search names..." onChange={updateSearch} value={search} />
        </div>
    );
}

export default Search;