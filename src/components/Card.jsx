import { StyledCard, StyledCardBody, StyledCardTitle } from "./styles/Card.styled"
import { Flex } from './styles/Flex.styled'
import { Image, ImageContainer } from './styles/Image.styled'
import { Heading2, Heading3 } from './styles/Home.styled'
import { useNavigate } from "react-router-dom";

const Card = ({ data }) => {
    const navigate = useNavigate();

    const showDetails = (code) => {
        navigate(`/details/${code}`);
    }

    return (
        <Flex as={StyledCard} direction="column" onClick={() => showDetails(data.code)}>
            <ImageContainer height="10rem">
                <Image src={data?.flag} alt={data?.name} width="100%" height="100%" />
            </ImageContainer>
            <StyledCardBody>
                <StyledCardTitle>{data?.name}</StyledCardTitle>
                <div>
                    <Flex gap="0.2rem">
                        <Heading2>Population:</Heading2>
                        <span>{data?.population}</span>
                    </Flex>
                    <Flex gap="0.2rem">
                        <Heading3>Region:</Heading3>
                        <span>{data?.region}</span>
                    </Flex>
                    <Flex gap="0.2rem">
                        <Heading3>Capital:</Heading3>
                        <span>{data?.capital}</span>
                    </Flex>
                </div>
            </StyledCardBody>
        </Flex>
    )
}

export default Card