import styled from "styled-components";

export const CountryDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;

    h2 {
        font-weight: ${({ theme }) => theme.fontWeight.fw800}
    }

    @media only screen and (min-width: ${({theme}) => theme.size.tablet}) {
        flex-direction: row;
    }
`

export const CountryDetailsSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-self: center;

    h3 {
        font-weight: ${({ theme }) => theme.fontWeight.fw600}
    }

    @media only screen and (min-width: ${({theme}) => theme.size.tablet}) {
        flex-direction: row;
    }
`