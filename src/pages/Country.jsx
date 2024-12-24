import { useEffect, useTransition, useState } from "react";
import { getCountryData } from "../api/getCountryData";
import { CountryCard } from "../components/layout/CountryCard";
import { SearchFilter } from "../components/UI/SearchFilter";

export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [loadMore, setLoadMore] = useState(12);
  const increment = 12;

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  const handleLoadMore = () => {
    setLoadMore(loadMore + increment);
  };

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      // console.log(res.data);
      setCountries(res.data);
    });
  }, []);

  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  };

  const filterCountries = countries.filter((country) => searchCountry(country));

  if (isPending) {
    return (
      <section className="loader-section">
        <div className="loader"></div>
      </section>
    );
  }

  return (
    <section className="country-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <SearchFilter
              search={search}
              setSearch={setSearch}
              filter={filter}
              setFilter={setFilter}
              countries={countries}
              loadMore={loadMore}
            />
            <ul className="country-card-parent">
              {filterCountries.slice(0, loadMore).map((countryList, index) => (
                <CountryCard key={index} country={countryList} />
              ))}
            </ul>
            <div className="load-more-btn-parent">
              <button className="load-more-btn" onClick={handleLoadMore}>
                Load More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
