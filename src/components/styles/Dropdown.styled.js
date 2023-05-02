import styled, { css } from "styled-components";

export const DropdownItem = styled.div`
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    border-radius: 0.3rem;
    cursor: pointer;
  ${(p) =>
        p.active &&
        css`
      color: inherit;
    `}
  &:hover, :focus, :focus:hover {
    background-color: ${({ theme }) => theme.colors.bg_color};
    color: inherit;
    outline: none;
  }
`;

export const DropdownItemContainer = styled.div`
  position: absolute;
  top: auto;
  left: 0;
  margin-top: 4px;
  max-height: 40vmax;
  min-width: 10rem;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.elements};
  transition: max-height 0.2s ease;
  overflow: scroll;
  -webkit-box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 2px 1px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 2px 1px;
  ${(p) =>
        p.isVisible !== true &&
        css`
      max-height: 40px;
      visibility: hidden;
    `}

  @media only screen and (min-width: ${({ theme }) => theme.size.tablet}) {
    right: 0;
  }
`;

export const SelectLabelButton = styled.button`
  padding: 1em 2em;
  background-color: ${({ theme }) => theme.colors.elements};
  border: none;
  border-radius: 5px;
  color: inherit;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  -webkit-box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 2px 1px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 2px 1px;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  width: 10rem;

  > div {
    margin-top: 4px;
    width: 1rem;
  }

  svg {
      fill: ${({ theme }) => theme.colors.text};
  }
`;

export const SelectContainer = styled.div`
  position: relative;
  margin: 0;
  z-index: 1;
`;