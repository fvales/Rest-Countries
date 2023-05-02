import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Image, ImageContainer } from "../components/styles/Image.styled";
import { Flex } from "../components/styles/Flex.styled";
import { BackButton, CountryDetailsContainer, CountryDetailsSection, CountryDetailsSectionContainer } from "../components/styles/CountryDetails.styled";
import { ReactSVG } from "react-svg";
import back_icon from "../assets/left-arrow.svg";
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import { ModeContext } from "../context/ModeContext";
import { Button } from "../components/styles/Button.styled";
import { InfoContainer } from "../components/styles/Info.styled";

const CountryDetails = () => {
    const navigate = useNavigate();
    const { code } = useParams();
    const [countryDetails, setCountryDetails] = useState('');
    const { mode } = useContext(ModeContext)

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

    const redirectToCountry = (code) => {
        if (code) {
            navigate(`/details/${code}`);
        }
    }

    const getCurrency = (data) => {
        const currency = data?.map((c) => c.name)
        const code = currency.length <= 1 ?
            <span>
                {currency[0] || '-'}
            </span>
            : <span data-tooltip-variant={mode === 'light' ? 'dark' : 'light'} data-tooltip-content={currency.slice(1).join(',\r\n')} data-tooltip-id='currencies'>
                {currency?.[0]}, +{currency.length - 1}
            </span>
        return code;
    }

    return (
        <Flex direction="column" gap="3rem">
            <BackButton onClick={() => navigate(-1)}>
                <ReactSVG src={back_icon} />
                Back
            </BackButton>

            <CountryDetailsContainer>
                {/* Flag  */}
                <ImageContainer>
                    <Image alt={countryDetails.flags.alt} src={countryDetails?.flags?.svg} />
                </ImageContainer>

                <CountryDetailsSectionContainer>
                    <h2>{countryDetails?.name?.official || '-'}</h2>
                    <CountryDetailsSection>
                        <Flex direction="column" gap="0.5rem">
                            <InfoContainer>
                                <h3>Native Name:</h3>
                                {countryDetails?.name?.common || '-'}
                            </InfoContainer>
                            <InfoContainer>
                                <h3>Population:</h3>
                                {countryDetails?.population || '-'}
                            </InfoContainer>
                            <InfoContainer>
                                <h3>Region:</h3>
                                {countryDetails?.region || '-'}
                            </InfoContainer>
                            <InfoContainer>
                                <h3>Sub Region:</h3>
                                {countryDetails?.subregion || '-'}
                            </InfoContainer>
                            <InfoContainer>
                                <h3>Capital:</h3>
                                <span>{countryDetails?.capital?.join(', ') || '-'}</span>
                            </InfoContainer>
                        </Flex>
                        <Flex direction="column" gap="0.5rem">
                            <InfoContainer>
                                <h3>Top Level Domain:</h3>
                                {
                                    countryDetails?.tld ?
                                        countryDetails?.tld?.length === 1 ?
                                            <span>
                                                {countryDetails?.tld[0]}
                                            </span>
                                            : <span data-tooltip-variant={mode === 'light' ? 'dark' : 'light'} data-tooltip-content={countryDetails?.tld.slice(1).join(',\r\n')} data-tooltip-id='tld'>
                                                {countryDetails?.tld?.[0]}, +{countryDetails?.tld.length - 1}
                                            </span> : '-'
                                }
                                <Tooltip id='tld' />
                            </InfoContainer>
                            <InfoContainer>
                                <h3>Currencies:</h3>
                                {
                                    countryDetails?.currencies ?
                                        getCurrency(Object.values(countryDetails?.currencies)) : '-'
                                }
                                <Tooltip id='currencies' />
                            </InfoContainer>
                            <InfoContainer>
                                <h3>Languages:</h3>
                                {
                                    countryDetails?.languages ?
                                        Object.values(countryDetails?.languages).length <= 1 ?
                                            <span>
                                                {Object.values(countryDetails?.languages) || '-'}
                                            </span>
                                            : <span data-tooltip-variant={mode === 'light' ? 'dark' : 'light'} data-tooltip-content={Object.values(countryDetails?.languages).slice(1).join(',\r\n')} data-tooltip-id='languages'>
                                                {Object.values(countryDetails?.languages)?.[0]}, +{Object.values(countryDetails?.languages).length - 1}
                                            </span> : '-'

                                }
                                <Tooltip id='languages' />
                            </InfoContainer>
                        </Flex>
                    </CountryDetailsSection>
                    <InfoContainer as={Flex} direction="column" gap="1rem">
                        <h3>Borders:</h3>
                        <Flex gap="1rem" alignItems="center" flexWrap="wrap">
                            {
                                countryDetails?.borders ?
                                    countryDetails?.borders.map((border) => <Button key={border} onClick={() => redirectToCountry(border)}>{border}</Button>) : '-'
                            }
                        </Flex>
                    </InfoContainer>
                </CountryDetailsSectionContainer>
            </CountryDetailsContainer >
        </Flex >
    )
}

export default CountryDetails