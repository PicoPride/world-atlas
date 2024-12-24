import { Country } from "../../pages/Country";
import { CountryCard } from "../layout/CountryCard";
export const SearchFilter = ({ search, setSearch, setFilter, countries, loadMore }) => {
  const handleInputChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  const handleSelectChange = (e) => {
    e.preventDefault();
    setFilter(e.target.value);
  };


  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  };

  const filterCountries = countries.filter((country) => searchCountry(country));

  return (
    <section className="search-section">
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleInputChange}
        className="search-input"
      />
      <select onChange={handleSelectChange} className="select-section" >
        <option value="all">All</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </section>
  );
};
