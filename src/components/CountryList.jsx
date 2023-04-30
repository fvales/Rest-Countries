import Card from "./Card"
import { CountryListContainer } from "./styles/CountryList.styled"

const CountryList = ({ data }) => {
    return (
        <CountryListContainer>
            {
                data?.map((country) => <Card key={country.name} data={country}/>)
            }
        </CountryListContainer>
    )
}

export default CountryList