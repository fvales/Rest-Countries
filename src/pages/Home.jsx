import { useEffect, useState } from "react";
import CountryList from "../components/CountryList";
import { CountryFilterSection, VisuallyHidden } from "../components/styles/Home.styled";
import Dropdown from "../components/Dropdown";
import search_icon from "../assets/search-icon.svg";
import { ReactSVG } from "react-svg";
import { Flex } from "../components/styles/Flex.styled";

const REGION = ['All', 'Asia', 'Africa', 'Americas', 'Antarctic', 'Europe', 'Oceania'];

const Home = () => {
  const [countryListInitial, setCountryListInitial] = useState([]);
  const [countryList, setCountryList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterTerm, setFilterTerm] = useState('All');

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
      setCountryListInitial(result)
      setCountryList(result)
    }
    fetchCountryList();
  }, [])

  const searchCountry = (search) => {
    if (search) {
      const result = countryListInitial?.filter((country) => country.name.toLowerCase().indexOf(search.toLowerCase()) !== -1);
      setCountryList(result)
    } else {
      setCountryList(countryListInitial);
    }
  }

  const handleSearch = async (search) => {
    setSearchTerm(search)
    searchCountry(search)
  }

  const filterCountry = (value) => {
    setFilterTerm(value)
    if (value === 'All')
      setCountryList(countryListInitial)
    else {
      const result = countryListInitial?.filter((country) => country.region === value)
      setCountryList(result)
    }
  }

  return (
    <>
      <CountryFilterSection>
        {/* Search Functionality  */}
        <Flex as="form" gap="2rem">
          <ReactSVG src={search_icon} />
          <VisuallyHidden as="label" htmlFor="search">Search by country</VisuallyHidden>
          <input type="search" onChange={(event) => handleSearch(event.target.value)} id="search" value={searchTerm} placeholder="Search for a country..." />
        </Flex>
        {/* Filter Functionality  */}
        <Dropdown
          label="Filter by region"
          values={REGION}
          filterList={filterCountry}
          selectedTerm={filterTerm}
        />
      </CountryFilterSection>
      <CountryList data={countryList} />
    </>
  )
}

export default Home;