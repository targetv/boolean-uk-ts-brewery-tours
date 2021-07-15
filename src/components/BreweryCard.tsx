import React from "react";



type BreweryProp = {
    brewery: { 
        name: string,
        brewery_type: string,
        street: string,
        postal_code: string,
        city: string
    }
}


function BreweryCard({brewery}: BreweryProp){
    console.log(brewery)
    return (
        <li>
        <h2>{brewery.name}</h2>
        <div className="type">{brewery.brewery_type}</div>
        <section className="address">
          <h3>Address:</h3>
          <p>{brewery.street}</p>
          <p><strong>{`${brewery.city} ${brewery.postal_code }`}</strong></p>
        </section>
        <section className="phone">
          <h3>Phone:</h3>
          <p>7169066600</p>
        </section>
        <section className="link">
          <a href="http://www.12gatesbrewing.com" target="_blank" >Visit Website</a>
        </section>
      </li>
    )
}

export default BreweryCard