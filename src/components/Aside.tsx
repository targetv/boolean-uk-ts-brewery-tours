import React from "react";
import FilterComponent from "./FilterComponent";




function Aside({breweries}){
    
    return (
        <aside className="filters-section"><FilterComponent breweries={breweries}/></aside>
    )
}

export default Aside



