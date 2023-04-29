import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Image, ImageContainer } from "../components/styles/Image.styled";
import { Flex } from "../components/styles/Flex.styled";
import { CountryDetailsContainer, CountryDetailsSection } from "../components/styles/CountryDetails.styled";

const CountryDetails = () => {
    const { code } = useParams();
    const [countryDetails, setCountryDetails] = useState('');

    useEffect(() => {
        const fetchCountryDetails = async (code) => {
            const result = await fetch(`https://restcountries.com/v3.1/alpha/${code}`)
                .then((res) => res.json())
                .catch((err) => console.log(err));
            setCountryDetails(result[0])
        }

        if (code) {
            fetchCountryDetails(code);
        }
    }, [code])

    if (!countryDetails) {
        return <div>Loading...</div>
    }

    return (
        <CountryDetailsContainer>
            {/* Flag  */}
            <ImageContainer>
                <Image alt={countryDetails.flags.alt} src={countryDetails?.flags?.svg} />
            </ImageContainer>

            <Flex direction="column" gap="2.5rem">
                <h2>{countryDetails?.name?.official}</h2>
                <CountryDetailsSection>
                    <Flex direction="column" gap="1rem">
                        <Flex gap="4px">
                            <h3>Native Name:</h3>
                            {countryDetails?.name?.common}
                        </Flex>
                        <Flex gap="4px">
                            <h3>Population:</h3>
                            {countryDetails?.population}
                        </Flex>
                        <Flex gap="4px">
                            <h3>Region:</h3>
                            {countryDetails?.region}
                        </Flex>
                        <Flex gap="4px">
                            <h3>Sub Region:</h3>
                            {countryDetails?.subregion}
                        </Flex>
                        <Flex gap="4px">
                            <h3>Capital:</h3>
                            {countryDetails?.capital.join(', ')}
                        </Flex>
                    </Flex>
                    <Flex direction="column" gap="1rem">
                        {/* {countryDetails?.name}
                        {countryDetails?.name}
                        {countryDetails?.name}
                        {countryDetails?.name}
                        {countryDetails?.name} */}
                        <div>{Object.values(countryDetails?.languages).join(', ')}</div>
                    </Flex>
                </CountryDetailsSection>
            </Flex>
        </CountryDetailsContainer>
    )
}

export default CountryDetails