import { useEffect, useTransition, useState } from "react";
import { getCountryData } from "../api/getCountryData";
import { CountryCard } from "../components/layout/CountryCard";

export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      // console.log(res.data);
      setCountries(res.data);
    });
  }, []);

  if (isPending) {
    return <section className="loader-section"><div className="loader"></div></section>;
  }

  return (
    <section className="country-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <ul className="country-card-parent">
              {countries.map((countryList, index) => (
                <CountryCard key={index} country={countryList} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
