import React from 'react'

export default function FilterBar({setQuery}) {
  return (
    
    <select className="filter-by-region" onChange={(e) => {
      setQuery(e.target.value.toLocaleLowerCase())
    }}>
          <option hidden>Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="America">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
  )
}
