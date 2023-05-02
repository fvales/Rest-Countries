import styled from "styled-components";

export const Container = styled.main`
    min-width: 100%;
    padding: 6rem 2rem;

    @media only screen and (min-width: ${({ theme }) => theme.size.tablet}) {
        padding: 7rem 4rem;
    }

    form {
        position: relative;
        flex: 0.4;

        input {
            outline: none;
            padding: 1em 1em 1em 4em;
            border-radius: 4px;
            border: unset;
            background-color: ${({ theme }) => theme.colors.elements};
            color: inherit;
            -webkit-box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 2px 1px;
            box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 2px 1px;
            width: 100%;
        }

        > div {
            position: absolute;
            left: 1.5rem;
            top: 1.1rem;
        }
        
        svg {
            fill: ${({ theme }) => theme.colors.text};
        }
    
        ::placeholder { 
            color: ${({ theme }) => theme.colors.text};
        }
    }
`

export const CountryFilterSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media only screen and (min-width: ${({ theme }) => theme.size.tablet}) {
        flex-direction: row;
        justify-content: space-between;
    }
`

export const VisuallyHidden = styled.span`
  border: unset;
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  whiteSpace: nowrap;
  width: 1px;
`