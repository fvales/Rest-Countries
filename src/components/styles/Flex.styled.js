import styled from "styled-components";

export const Flex = styled.div`
    display: flex;
    flex-direction: ${({ direction }) => direction ? direction : 'row'};
    gap: ${({ gap }) => gap ? gap : '0'};
    align-items: ${({ alignItems }) => alignItems ? alignItems : 'normal'};
    justify-content: ${({ justifyContent }) => justifyContent ? justifyContent : 'normal'};
    flex-wrap: ${({ flexWrap }) => flexWrap ? flexWrap : 'no-wrap'};
`