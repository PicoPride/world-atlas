import {NavLink} from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
export const CountryCard = ({ country }) => {
  const { flags, name, capital, population } = country;
  return (
    <li className="card-list">
      <img src={flags.png} alt="" className="count-img" />
      <h2 className="country-title">{ name.common.length < 10 ? name.common : name.common.slice(0, 10)+'...'}</h2>
      <p className="country-capital">
        <span>Capital:</span> {capital[0]}
      </p>
      <p className="country-population">
        <span> Population:</span> {population}
      </p>
      <NavLink to={`/country/${name.common}`} className="nav-link">
      <button className="icon-btn">
      Know More <FaArrowRightLong />
      </button>
      </NavLink>

    </li>
  );
};