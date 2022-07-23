import styled from "styled-components";

export const TagContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 1px 4px 1px 8px;
    gap: 4px;
    background: #000080;
    width: fit-content;
    border-radius: 4px;
`;

export const TagText = styled.p`
    margin: 0;
    font-size: 0.8rem;
    color: #fff;
    font-weight: 600;
`;

export const TagRemove = styled.button`
    border: none;
    outline: none;
    background: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    cursor: pointer;
`;