import styled from "styled-components";

export const CountryListContainer = styled.div`
    --auto-grid-min-size: 14rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(var(--auto-grid-min-size), 1fr));
    grid-gap: 3rem;
    margin: 2rem 0;
`