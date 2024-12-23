import axios from "axios";

export const api = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

// Http get method to get country data

export const getCountryData = () => {
  return api.get(
    "/all?fields=name,capital,flags,population,area,languages,currencies"
  );
};


// Http get method to get individual country data


export const getIndCountryData = (name) => {
  return api.get(
    `/name/${name}?fullText=true&fields=name,capital,flags,population,area,languages,currencies,region,subregion,tld,borders`
  );
};