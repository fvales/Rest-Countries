import styled from "styled-components";

export const StyledFooter = styled.footer`
    background-color: ${({ theme }) => theme.colors.bg_color};
    text-align: center;
    position: fixed;
    bottom:0; 
    left:0;
    width: 100%;
    z-index: 2;

    > p > a {
        color: ${({ theme }) => theme.colors.text};
        text-decoration: underline; 
    }
`