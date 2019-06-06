import styled from "styled-components";

function bg(props) {
    if (!props.outlined) {
        if (props.primary) {
            return props.theme.primary;
        }
        if (props.secondary) {
            return props.theme.secondary;
        }
        if (props.disabled) return "rgba(0,0,0,0.12)";
        if (props.default) return "#e0e0e0";
    }
    return "inherit";
}

function color(props) {
    if (!props.outlined) {
        if (props.default) {
            return "rgba(0,0,0,0.87)";
        }
        if (props.disabled) {
            return "rgba(0,0,0,0.26)";
        } else {
            return "#fff";
        }
    } else {
        if (props.disabled) {
            return "rgba(0, 0, 0, 0.26)";
        }
        if (props.primary) {
            return props.theme.primary;
        }
        if (props.secondary) return props.theme.secondary;
        if (props.default) return "rgba(0, 0, 0, 0.87)";
        return "black";
    }
}

function border(props) {
    if (props.outlined) {
        if (props.disabled) return "1px solid rgba(0, 0, 0, 0.26)";
        if (props.primary) {
            return `1px solid ${props.theme.primary}80`;
        }
        if (props.secondary) return `1px solid ${props.theme.secondary}80`;
        if (props.default) return "1px solid rgba(0, 0, 0, 0.23)";
    } else return "none";
}

function bghover(props) {
    if (props.outlined) {
        if (props.disabled) return "none";
        if (props.primary) return props.theme.primary + "1a";
        if (props.secondary) return props.theme.secondary + "1a";
        if (props.default) return "rgba(0,0,0,0.08)";
    }
    return "none";
}

export const Button = styled.button`
    margin: 8px;
    border: ${props => border(props)};
    color: ${props => color(props)};
    background-color: ${props => bg(props)};
    box-shadow: ${props =>
        !props.outlined
            ? "0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)"
            : "none"};
    box-sizing: border-box;
    letter-spacing: 0.02857em;
    padding: 6px 16px;
    font-size: 20px;
    min-width: 64px;
    font-weight: 500px;
    border-radius: 4px;
    position: relative;
    text-align: center;
    transition: background-color 0.2s ease;
    &:hover {
        cursor: pointer; //1a
        background-color: ${props => bghover(props)};
        transition: background-color 0.2s ease;
    }
`;

Button.defaultProps = {
    theme: {
        primary: "#2196f3",
        secondary: "#E10050"
    }
};

// export function Button(props) {
//     console.log(props.children);
//     return <StyledButton>{props.children}</StyledButton>;
// }
