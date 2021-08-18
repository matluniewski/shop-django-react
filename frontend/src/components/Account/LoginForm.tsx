import React, { useState, useContext } from "react";
import { LoginContext, sendRequest } from "../../hoc/Login/LoginProvider";
import { useForm } from "react-hook-form";
import { useSnackbar } from "notistack";
import { useCookies } from "react-cookie";

/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Button, Card, TextField } from "@material-ui/core";

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
    const { enqueueSnackbar } = useSnackbar();
    const [, setCookie] = useCookies(["token"]);
    const { setToken } = useContext(LoginContext);

    const handleSubmit = handleHookFormSubmit(async (data) => {
        if (isLogin) {
            const {
                data: { token },
            } = await sendRequest.post("accounts/obtain-auth-token", data);

            setCookie("token", token);
            setToken(token);
            enqueueSnackbar("Zalogowano", { variant: "success" });
        } else {
            try {
                const registerData = {
                    email: data.username,
                    password: data.password,
                };
                const {
                    data: { user },
                } = await sendRequest.post("accounts/register", registerData);
                enqueueSnackbar(`${user.email} zarejestrowano`, {
                    variant: "success",
                });
                console.log(user);
            } catch (e) {
                console.log(e);

                enqueueSnackbar(e.toString(), { variant: "error" });
            }
        }
    });

    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
    };

    const styles = {
        form: css`
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
        `,
        card: css`
            margin-top: 40px;
            margin-bottom: 40px;
            padding: 15px;
            text-align: center;
        `,
    };
    return (
        <Card css={styles.card}>
            <h1>{isLogin ? "Login" : "Sign Up"}</h1>
            <form onSubmit={handleSubmit} css={styles.form}>
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
        </Card>
    );
};
