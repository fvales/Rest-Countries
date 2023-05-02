import styled from "styled-components";

export const Button = styled.button`
    background-color: ${({ theme }) => theme.colors.elements};
    color: ${({ theme }) => theme.colors.text};
    outline: none;
    padding: 0.5em 1em;
    border: none;
    cursor: pointer;
    -webkit-box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 2px 1px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 2px 1px;
    border-radius: 4px;

    &:hover {
        transition-timing-function: ease-in-out;
        transition: 500ms;
        transform: scale(105%);
    }

    &:active {
        transition-timing-function: ease-in-out;
        transition: 200ms;
        transform: scale(96%);
    }
`