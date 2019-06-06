import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { ThemeProvider } from "styled-components";
import { Button } from "./button";

const theme = {
    primary: "#412B6A",
    secondary: "#FF4122"
};

storiesOf("Button", module).add("Contained button", () => (
    <div>
        <Button primary onClick={action("primary-button-click")}>
            Primary
        </Button>

        <Button secondary onClick={action("primary-button-click")}>
            Secondary
        </Button>

        <Button default onClick={action("primary-button-click")}>
            Default
        </Button>

        <Button disabled onClick={action("primary-button-click")}>
            Disabled
        </Button>

        <ThemeProvider theme={theme}>
            <Button secondary onClick={action("primary-button-click")}>
                Custom
            </Button>
        </ThemeProvider>
    </div>
));
