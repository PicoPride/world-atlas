// Desc: Country page component for the WorldAtlas project.

import { useEffect, useTransition } from "react";
import { getCountryData } from "../api/getCountryData";

export const Country = () => {
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      console.log(res);
    });
  }, []);

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="row">
            <div className="col-lg-12 col-md-12"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
