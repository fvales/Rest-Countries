import styled from "styled-components";

export const StyledHeader = styled.header`
    padding: 1rem 2rem;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.5);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.5);
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.5);
    position: sticky;
    background-color: ${({ theme }) => theme.colors.elements};
    color: ${({ theme }) => theme.colors.text};

    > h1 {
        font-size: ${({theme}) => theme.fontSize.fs500};
        font-weight: ${({ theme }) => theme.fontWeight.fw800};
    }

    @media only screen and (min-width: ${({theme}) => theme.size.tablet}) {
        padding: 1rem 4rem;
    }

    svg {
        cursor: pointer;
        fill: ${({ theme }) => theme.colors.text};
    }
`