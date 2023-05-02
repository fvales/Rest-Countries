import styled from "styled-components";

export const StyledCard = styled.article`
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.elements};
    border-radius: 0.5rem;

    &:hover {
        transition: 500ms;
        transform: scale(105%);
        transition-timing-function: ease-in-out;
    }

    img {
        object-fit: cover;
    }
`

export const StyledCardBody = styled.div`
    padding: 1rem;
`

export const StyledCardTitle = styled.h2`
    font-weight: ${({ theme }) => theme.fontWeight.fw800};
    margin-bottom: 1rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: ${({theme}) => theme.fontSize.fs500};
`