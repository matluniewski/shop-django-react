import React from "react";
import ReactDOM from "react-dom";
import { StylesProvider } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { SnackbarProvider } from "notistack";
import { CookiesProvider } from "react-cookie";

import App from "./App";

ReactDOM.render(
    <React.StrictMode>
        <CookiesProvider>
            <StylesProvider injectFirst>
                <SnackbarProvider
                    maxSnack={3}
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "center",
                    }}
                >
                    <CssBaseline />
                    <App />
                </SnackbarProvider>
            </StylesProvider>
        </CookiesProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
