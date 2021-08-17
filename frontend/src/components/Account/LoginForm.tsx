import React, { FormEventHandler, useState, useContext } from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Button, Paper, TextField } from "@material-ui/core";
import { LoginContext, sendRequest } from "../../hoc/Login/LoginProvider";

type FormValues = {
    username: string;
    password: string;
};

export const LoginForm = () => {
    const [isLogin, setIsLogin] = useState(true);
    const {
        register,
        handleSubmit: handleHookFormSubmit,
        watch,
        formState: { errors },
    } = useForm<FormValues>();

    const { setToken } = useContext(LoginContext);

    const handleSubmit = handleHookFormSubmit(async (data) => {
        if (isLogin) {
            const {
                data: { token },
            } = await sendRequest.post("accounts/obtain-auth-token", data);

            console.log(token);
            localStorage.setItem("token", token);
            setToken(token);
        } else {
            const registerData = {
                email: data.username,
                password: data.password,
            };
            const res = await sendRequest.post(
                "accounts/register",
                registerData
            );
            console.log(res);
        }
    });

    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
    };
    return (
        <Paper
            css={css`
                text-align: center;
            `}
        >
            <h1>{isLogin ? "Login" : "Sign Up"}</h1>
            <form
                onSubmit={handleSubmit}
                css={css`
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 10px;
                `}
            >
                <TextField
                    {...register("username")}
                    required
                    type="text"
                    label="Email"
                    variant="outlined"
                />
                <TextField
                    {...register("password")}
                    required
                    type="password"
                    label="Password"
                    variant="outlined"
                />
                <Button type="submit" variant="contained">
                    {isLogin ? "Login" : "Create Account"}
                </Button>
                <Button type="button" onClick={switchAuthModeHandler}>
                    {isLogin
                        ? "Create new account"
                        : "Login with existing account"}
                </Button>
            </form>
        </Paper>
    );
};
