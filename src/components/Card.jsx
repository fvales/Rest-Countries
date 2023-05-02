import { StyledCard, StyledCardBody, StyledCardTitle } from "./styles/Card.styled"
import { Flex } from './styles/Flex.styled'
import { Image, ImageContainer } from './styles/Image.styled'
import { useNavigate } from "react-router-dom";
import { InfoContainer } from "./styles/Info.styled";

const Card = ({ data }) => {
    const navigate = useNavigate();
    const nf = new Intl.NumberFormat('en-US');

    const showDetails = (code) => {
        navigate(`/details/${code}`);
    }

    return (
        <Flex as={StyledCard} direction="column" onClick={() => showDetails(data.code)}>
            <ImageContainer height="10rem">
                <Image src={data?.flag} alt={data?.name} width="100%" height="100%" />
            </ImageContainer>
            <StyledCardBody>
                <StyledCardTitle title={data?.name}>{data?.name}</StyledCardTitle>
                <Flex direction="column" gap="4px">
                    <InfoContainer>
                        <h3>Population:</h3>
                        <span>{nf.format(data?.population) || '-'}</span>
                    </InfoContainer>
                    <InfoContainer>
                        <h3>Region:</h3>
                        <span>{data?.region || '-'}</span>
                    </InfoContainer>
                    <InfoContainer>
                        <h3>Capital:</h3>
                        <span>{data?.capital || '-'}</span>
                    </InfoContainer>
                </Flex>
            </StyledCardBody>
        </Flex>
    )
}

export default Card