import styled from "styled-components";

export const Input = styled.input`
    border: none;
    box-sizing: border-box;
    width: 200px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.42);
    transition: border-bottom 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    :hover {
        border-bottom: 2px solid rgba(0, 0, 0, 0.87);
        transition: border-bottom 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    :focus {
        outline: none;
        border-bottom: 2px solid rgb(23, 105, 170);
        transition: border-bottom 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
`;
