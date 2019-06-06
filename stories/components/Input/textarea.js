import styled from "styled-components";
import { errorBorder } from "./input";

export const Textarea = styled.textarea`
    border: none;
    box-sizing: border-box;
    font-size: 1rem;
    margin: 8px;
    color: ${props =>
        props.disabled ? "rgba(0, 0, 0, 0.38)" : "rgba(0, 0, 0, 0.87)"};
    border-bottom: ${props =>
        props.error ? errorBorder : "2px solid rgba(0, 0, 0, 0.42)"};
    transition: border-color 0.2s cubic-bezier(0, 0, 0.2, 1) 0ms;
    :hover {
        border-bottom: ${props =>
            props.error ? errorBorder : "2px solid rgba(0, 0, 0, 0.87)"};
        transition: border-bottom 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    :focus {
        outline: none;
        border-bottom: ${props =>
            props.error ? errorBorder : "2px solid rgb(23, 105, 170)"};
        transition: border-bottom 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
`;
