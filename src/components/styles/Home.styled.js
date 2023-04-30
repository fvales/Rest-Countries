import styled from "styled-components";

export const Container = styled.main`
    min-width: 100%;
    height: calc(100% - 4rem);
    padding: 2rem;

    @media only screen and (min-width: ${({theme}) => theme.size.tablet}) {
        padding: 2rem 4rem;
    }
`