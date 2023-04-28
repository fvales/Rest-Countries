import styled from "styled-components";

export const Image = styled.img`
    cursor: pointer;
    width: ${({width}) => width ? width : '100%'};
    height: ${({height}) => height ? height : '100%'};
`

export const ImageContainer = styled.div`
    position: relative;
    width: ${({width}) => width ? width : '100%'};
    height: ${({height}) => height ? height : '100%'};
`