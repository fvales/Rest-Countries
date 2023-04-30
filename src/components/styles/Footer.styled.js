import styled from "styled-components";

export const StyledFooter = styled.footer`
    background-color: ${({ theme }) => theme.colors.bg_color};
    text-align: center;

    > p {
        color: ${({ theme }) => theme.colors.text};
    }

    > p > a {
        color: ${({ theme }) => theme.colors.text};
        text-decoration: underline; 
    }
`