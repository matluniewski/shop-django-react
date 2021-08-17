import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, keyframes } from "@emotion/react";
import { Container } from "@material-ui/core";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js/pure";
import { STRIPE_API_KEY } from "./importantData";
import { HeaderAnimation } from "./components/HeaderAnimation";
import { LogoDesktop } from "./components/LogoDesktop";
import { CheckoutForm } from "./components/CheckoutForm";
import { Products } from "./components/Products/Products";
import { AppHeaderBar } from "./components/AppHeaderBar";
import { Basket } from "./components/Basket/Basket";
import { LoginProvider } from "./hoc/Login/LoginProvider";
import { LoginForm } from "./components/Account/LoginForm";
import { BlogPostType, ProductType } from "./types/models";

// axios.defaults.auth = {
//     username: "admin",
//     password: "admin123",
// };

const gradient = keyframes`0% {
    background-position: 0% 50%;
}
50% {
    background-position: 100% 50%;
}
100% {
    background-position: 0% 50%;
}`;

const stripePromise = loadStripe(STRIPE_API_KEY);

function App() {
    const styles = {
        root: css`
            /* position: relative; */
            min-height: 100vh;
            margin-top: auto;
            background: linear-gradient(
                -45deg,
                #e6b3a4,
                #dda3ba,
                #acd1df,
                #acdfd3
            );
            background-size: 600% 100%;
            animation: ${gradient} 15s ease infinite;
        `,
    };

    return (
        // <Elements stripe={stripePromise}>
        <BrowserRouter>
            <LoginProvider>
                <div css={styles.root}>
                    <AppHeaderBar />
                    <Container maxWidth="md">
                        <Switch>
                            <Route path="/login">
                                <LoginForm />
                            </Route>
                            <Route path="/" exact>
                                <HeaderAnimation />
                                <LogoDesktop />
                            </Route>
                            <Route path="/products">
                                <Products />
                            </Route>
                            <Route path="/basket">
                                <Basket />
                            </Route>
                        </Switch>
                        {/* <CheckoutForm /> */}
                    </Container>
                </div>
            </LoginProvider>
        </BrowserRouter>
        //  </Elements>
    );
}

export default App;
