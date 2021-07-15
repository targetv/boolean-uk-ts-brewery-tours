import React from "react"


import {Brewery} from "../App"
type BreweryListProps = {
    brewery: Brewery[]
}


function FilterCityComponent({brewery}: BreweryListProps){

 
    return (
        <>
        <input type="checkbox" name={brewery.city} value={brewery.city} /><label htmlFor={brewery.city}
        >{brewery.city}</label>
        </>
    )
}


export default FilterCityComponent