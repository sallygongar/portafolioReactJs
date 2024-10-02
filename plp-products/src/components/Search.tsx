import React from "react";

const Search: React.FC = () => {
    return(
      <form> 
        <div className="search__content">
          <input type="search" id="mySearch" name="q" placeholder="Buscar producto"/>
          <button>Buscar</button>
        </div>
      </form>
    )

}

export default Search
        