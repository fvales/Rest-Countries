import styled from "styled-components";

export const Container = styled.main`
    min-width: 100%;
    min-height: 100%;
    background-color: ${({theme}) => theme.colors.bg_color};
    padding: 2rem;

    @media only screen and (min-width: ${({theme}) => theme.size.tablet}) {
        padding: 2rem 4rem;
    }
`

export const Heading1 = styled.h1`
    font-weight: ${({ theme }) => theme.fontWeight.fw800};
`
export const Heading2 = styled.h2`
    font-weight: ${({ theme }) => theme.fontWeight.fw600};
`
export const Heading3 = styled.h3`
    font-weight: ${({ theme }) => theme.fontWeight.fw300};
`