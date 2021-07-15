import React, { useEffect, useState } from "react";

import FilterCityComponent from "./FilterCityComponent";


import {Brewery} from "../App"
type BreweryListProps = {
    breweries: Brewery[]
}






function FilterComponent({breweries}:BreweryListProps){

    const [filteredBreweries, setFilteredBreweries] = useState([])
   

    useEffect(() => {
    
      filterDuplicateCities(breweries)
    }, [breweries])
    function filterDuplicateCities(breweriesToFilter : []){
        let filteredCitiesList : string[] = []
            breweriesToFilter.map(brewery => {
               const doesItExsist =  filteredCitiesList.find(checkCity => checkCity.city === brewery.city)
                if(doesItExsist){
                    return
                }
                filteredCitiesList = [...filteredCitiesList, brewery]
    }
            ) 
            setFilteredBreweries(filteredCitiesList)}

          
    
    return(
        <aside className="filters-section">
            <h2>Filter By:</h2>
            <form id="filter-by-type-form" autoComplete="off">
            <label htmlFor="filter-by-type"><h3>Type of Brewery</h3></label>
            <select name="filter-by-type" id="filter-by-type">
                <option value="">Select a type...</option>
                <option value="micro">Micro</option>
                <option value="regional">Regional</option>
                <option value="brewpub">Brewpub</option>
            </select>
            </form>
            <div className="filter-by-city-heading">
            <h3>Cities</h3>
            <button className="clear-all-btn">clear all</button>
            </div>
            <form id="filter-by-city-form"> 
            {filteredBreweries.map(brewery => <FilterCityComponent brewery={brewery}/>)}
            </form>
      </aside>
      

    )
}

export default FilterComponent