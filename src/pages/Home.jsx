import { useEffect, useState } from "react";
import CountryList from "../components/CountryList";
import { Container } from "../components/styles/Home.styled";

const Home = () => {
  const [countryList, setCountryList] = useState([]);



  useEffect(() => {
    const fetchCountryList = async () => {
      const result = await fetch('https://restcountries.com/v3.1/all')
        .then((res) => res.json())
        .then((res) => {
          return res.map(country => ({
            code: country.cca3,
            name: country.name.official,
            population: country.population,
            region: country.region,
            capital: country.capital,
            flag: country.flags.svg,
          }));
        })
        .catch((err) => console.log(err))
      setCountryList(result)
    }
    fetchCountryList();
  }, [])

  return (
    <>
      <div>
        {/* Search Functionality  */}
        {/* Filter Functionality  */}
      </div>
      <CountryList data={countryList} />
    </>
  )
}

export default Home;