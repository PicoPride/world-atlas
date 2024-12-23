import { useEffect, useState, useTransition } from "react";
import { useParams } from "react-router-dom";
import { getIndCountryData } from "../../api/getCountryData";

export const CountryDetails = () => {
  const params = useParams();

  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    startTransition(async () => {
      const res = await getIndCountryData(params.id);
      setCountry(res);
      console.log(res.data[0]);
      console.log(country);
    });
  }, []);

  if (isPending) {
    return (
      <section className="loader-section">
        <div className="loader"></div>
      </section>
    );
  }

  return (
    <div>
      <h1>details</h1>
      <h1>{}</h1>
    </div>
  );
};
