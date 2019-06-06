import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { ThemeProvider } from "styled-components";
import { Button } from "./button";

const theme = {
    primary: "#412B6A",
    secondary: "#FF4122"
};

storiesOf("Button", module).add("Outlined button", () => (
    <div>
        <Button primary outlined onClick={action("primary-button-click")}>
            Primary
        </Button>

        <Button secondary outlined onClick={action("primary-button-click")}>
            Secondary
        </Button>

        <Button default outlined onClick={action("primary-button-click")}>
            Default
        </Button>

        <Button disabled outlined onClick={action("primary-button-click")}>
            Disabled
        </Button>

        <ThemeProvider theme={theme}>
            <Button secondary outlined onClick={action("primary-button-click")}>
                Custom
            </Button>
        </ThemeProvider>
    </div>
));
