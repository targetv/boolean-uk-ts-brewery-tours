

import './App.css'
import Header from './components/Header'
import Aside from './components/Aside'
import ListSection from './components/ListSection'
import React, { useEffect, useState } from 'react'


export type Brewery = {
  address_2: null,
  address_3: null,
  brewery_type: string,
  city: string,
  country: string,
  county_province: null,
  created_at: string,
  id: number,
  latitude: null,
  longitude: null,
  name: string,
  obdb_id: string,
  phone: null,
  postal_code: string,
  state: string,
  street: string,
  updated_at: string,   
  website_url: null

}




function App() {

  useEffect(() => {
    fetch("https://api.openbrewerydb.org/breweries?by_state=ohio").then(resp => resp.json()).then(setBreweries)
  },[])


  const [breweries, setBreweries] = useState<Brewery | []>([])

  return (
    <div className="App">
      <Header />
      <main>
       <Aside breweries={breweries}/>
       <ListSection breweries={breweries}/>
      </main>

     
    </div>
  )
}

export default App
