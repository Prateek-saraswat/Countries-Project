import React from 'react'
import './CountryDeatilShimmer.css'
import { useTheme } from '../hooks/useTheme'

export default function CountryDetailShimmer() {
    const [isDark, setIsDark] =useTheme()
  return (
    <main className={`${isDark ? "dark" : ""}`}>
    <div className="country-details shimmer">
    <div className="flag"></div>
    <div className="details-text-container">
      <h1 className="title"></h1>
      <div className="">
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>
    </div>
  </div>
  </main>
  )
}
