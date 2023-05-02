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

  const searchCountry = (list, search) => {
    if (search) {
      const result = list?.filter((country) => country.name.toLowerCase().indexOf(search.toLowerCase()) !== -1);
      return result;
    }
    return list;
  }

  const filterCountry = (list, region) => {
    if (region !== 'All') {
      const result = list?.filter((country) => country.region === region);
      return result;
    }
    return list;
  }

  const handleSearch = (search) => {
    setSearchTerm(search)
    // Filter not applied then only search
    if (filterTerm === 'All') {
      const result = searchCountry(countryListInitial, search)
      setCountryList(result)
    } else {
      // Filter is applied
      if (search) {
        const result = countryListInitial?.filter((country) => country.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 && country.region === filterTerm);
        setCountryList(result)
      } else {
        const result = filterCountry(countryListInitial, filterTerm)
        setCountryList(result)
      }
    }
  }

  const handleFilter = (region) => {
    setFilterTerm(region);
    // No search term
    if (!searchTerm) {
      const result = filterCountry(countryListInitial, region)
      setCountryList(result)
    } else {
      // SearchTerm is present
      if (region !== 'All') {
        const result = countryListInitial?.filter((country) => country.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 && country.region === region);
        setCountryList(result)
      } else {
        const result = searchCountry(countryListInitial, searchTerm)
        setCountryList(result)
      }
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
          filterList={handleFilter}
          selectedTerm={filterTerm}
        />
      </CountryFilterSection>
      {
        countryListInitial.length && !countryList?.length ?
          <span className="info-message">No records found</span> : !countryListInitial?.length ? <span className="info-message">Loading...</span>
            : <CountryList data={countryList} />
      }
    </>
  )
}

export default Home;