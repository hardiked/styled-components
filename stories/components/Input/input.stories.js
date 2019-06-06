import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Input } from "./input";
import { Textarea } from "./textarea";

// const theme = {
//     primary: "#412B6A",
//     secondary: "#FF4122"
// };

storiesOf("Input", module).add("Simple input", () => (
    <div>
        <Input placeholder="email" />
        <Input placeholder="email" helperText="Enter valid email" />
        <Input placeholder="email" defaultValue="default@value.com" />
        <Input placeholder="password" type="password" />
        <Input placeholder="email" error errorText="Provide valid email" />
        <Textarea rows="4" cols="20" placeholder="Adderess" />
    </div>
));
