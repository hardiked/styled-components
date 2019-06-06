import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Input } from "./input";

// const theme = {
//     primary: "#412B6A",
//     secondary: "#FF4122"
// };

storiesOf("Input", module).add("Simple input", () => (
    <div>
        <Input placeholder="email" />
    </div>
));
