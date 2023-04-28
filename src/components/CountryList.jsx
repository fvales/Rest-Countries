import Card from "./Card"
import { Flex } from "./styles/Flex.styled"

const CountryList = ({ data }) => {
    return (
        <Flex gap="3rem" flexWrap="wrap" justifyContent="space-between">
            {
                data?.map((country) => <Card key={country.name} data={country}/>)
            }
        </Flex>
    )
}

export default CountryList