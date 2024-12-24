import { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { getIndCountryData } from "../../api/getCountryData";

export const CountryDetails = () => {
  const params = useParams();

  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    startTransition(async () => {
      const res = await getIndCountryData(params.id);
      // console.log(res.data[0]);
      // setCountry(res.data[0]);
    });
  }, [params.id]);

  if (isPending || !country) {
    return (
      <section className="loader-section">
        <div className="loader"></div>
      </section>
    );
  }

  return (
    <section className="country-details">
      <div className="container">
        <div className="col-lg-12">
          <div className="country-details-card">
            <div className="details-card-img">
              <img src={country.flags.png} alt={country.name.common} />
            </div>
            <div className="details-card-details">
              <h2 className="main-title">{country.name.common}</h2>
              <p className="country-capital">
                <span>Capital:</span> {country.capital[0]}
              </p>
              <p className="country-population">
                <span> Population:</span> {country.population}
              </p>
              <p className="country-region">
                <span> Region:</span> {country.region}
              </p>
              <p className="country-subregion">
                <span> Subregion:</span> {country.subregion}
              </p>
              <p className="country-languages">
                <span> Languages:</span>{" "}
                {Object.values(country.languages).join(", ")}
              </p>
            </div>
            <button className="back-btn">
            <FaArrowLeftLong /> <NavLink to={"/country"}> Back</NavLink>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
