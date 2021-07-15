import React from "react";

import { Brewery } from "../App";
import BreweryCard from "../components/BreweryCard"

type BreweryListProps = {
    breweries: Brewery[]
}


function ListSection({breweries}: BreweryListProps){
    return (
        <>
        <h1>List of Breweries from New York</h1>
<header className="search-bar">
  <form id="search-breweries-form" autoComplete="off">
    <label htmlFor="search-breweries"><h2>Search breweries:</h2></label>
    <input id="search-breweries" name="search-breweries" type="text" />
  </form>
</header>
<article>
  <ul className="breweries-list">
        {breweries.map(brewery => <BreweryCard brewery={brewery}/>)}
  </ul>
</article>
 </>
    )
}

export default ListSection