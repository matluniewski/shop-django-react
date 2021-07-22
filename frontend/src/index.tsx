import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import App from "./App";
import { StylesProvider } from "@material-ui/core";

ReactDOM.render(
    <React.StrictMode>
        <StylesProvider injectFirst>
            <CssBaseline />
            <App />
        </StylesProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
