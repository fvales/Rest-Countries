import styled from "styled-components";

export const InfoContainer = styled.div`
    display: flex;
    gap: 4px;

    h3 {
        font-weight: ${({ theme }) => theme.fontWeight.fw600};
    }
`