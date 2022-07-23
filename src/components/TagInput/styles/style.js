import styled from "styled-components";

export const InputContainer = styled.div`
    width: fit-content;
    max-width: 500px;
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    border: 1px solid #0047ab;
    border-radius: 4px;
    padding: 2px 4px;
`;

export const Input = styled.input`
    border: none;
    outline: none;
    width: 200px;
    &:focus {
        outline: none;
    }
`;

export const ErrorMessage = styled.p`
    font-size: 0.8rem;
    color: red;
    margin: 0;
    margin-top: 4px;
`;

export const Title = styled.p`
    margin: 0;
    margin-bottom: 4px;
`;