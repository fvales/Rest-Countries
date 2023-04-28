import styled from "styled-components";

export const StyledCard = styled.article`
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.elements};
    border-radius: 0.5rem;

    img {
        object-fit: cover;
        
    }

    @media only screen and (min-width: ${({theme}) => theme.size.tablet}) {
        flex: 1 0 calc(33.33% - 3rem);
    }

    @media only screen and (min-width: ${({theme}) => theme.size.laptop}) {
        flex: 1 0 calc(25% - 3rem);
    }
`

export const StyledCardBody = styled.div`
    padding: 1rem;
`

export const StyledCardTitle = styled.h2`
    font-weight: ${({ theme }) => theme.fontWeight.fw800};
`