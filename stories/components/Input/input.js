import React from "react";
import styled from "styled-components";

const errorBorder = "2px solid #f44336";
export const StyledInput = styled.input`
    border: none;
    box-sizing: border-box;
    width: ${props => (props.fullWidth ? "100%" : "200px")};
    height: 32px;
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

const Supplement = styled.p`
    color: ${props =>
        props.helperText !== undefined ? "rgba(0, 0, 0, 0.54)" : "#f44336"};
    margin: 0;
    font-size: 0.75rem;
    text-align: left;
    margin-left: 8px;
    line-height: 1em;
    width: ${props => (props.fullWidth ? "100%" : "200px")};
    word-break: break-all;
`;

export function Input(props) {
    console.log(props.helperText);
    return (
        <div>
            <StyledInput {...props} />
            <Supplement {...props}>
                {props.helperText || props.errorText}
            </Supplement>
        </div>
    );
}
