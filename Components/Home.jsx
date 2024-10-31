import { useState } from "react";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";
import CountriesContainer from "./CountriesContainer";
import { useTheme } from "../hooks/useTheme";

export default function Home() {
  let [query, setQuery] = useState("");
  const [isDark] = useTheme()

  return (
    <main className={`${isDark?'dark' : ''}`}>
    <div className="search-filter-container">
      <SearchBar setQuery={setQuery} />
      <FilterBar setQuery={setQuery}/>
    </div>
    {query === "unmount" ? "" : <CountriesContainer query={query} />}
  </main>
  )
}
