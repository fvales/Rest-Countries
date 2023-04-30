import styled from "styled-components";
import { Button } from "../styles/Button.styled"

export const CountryDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;

    h2 {
        font-weight: ${({ theme }) => theme.fontWeight.fw800};
        font-size: 1.5rem;
    }

    @media only screen and (min-width: ${({theme}) => theme.size.tablet}) {
        flex-direction: row;

        > div {
            flex: 0.5;
        }
    }
`

export const CountryDetailsSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    h3 {
        font-weight: ${({ theme }) => theme.fontWeight.fw600};
    }

    @media only screen and (min-width: ${({theme}) => theme.size.tablet}) {
        flex-direction: row;
        gap: 4rem;
    }
`

export const BackButton = styled(Button)`
    align-self: flex-start;
    display: flex;
    gap: 0.5rem;

    > div {
        margin-top: 2px;
        width: 1rem;
    }

    svg {
        fill: ${({ theme }) => theme.colors.text};
    }
`