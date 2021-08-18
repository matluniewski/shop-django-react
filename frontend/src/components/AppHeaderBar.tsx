import React from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, keyframes } from "@emotion/react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useContext } from "react";
import { LoginContext } from "../hoc/Login/LoginProvider";
import { Link } from "react-router-dom";
import { Container } from "@material-ui/core";

export const AppHeaderBar = () => {
    const { basket, token } = useContext(LoginContext);

    const styles = {
        toolbar: css`
            display: flex;
            justify-content: space-between;
        `,
    };

    return (
        <div
            css={css`
                position: relative;
            `}
        >
            <AppBar
                position="static"
                css={css`
                    background: inherit;
                    color: white;
                    &::before {
                        content: "";
                        position: absolute;
                        left: 0px;
                        top: 0px;
                        right: 0px;
                        bottom: 0px;
                        background-color: rgba(12, 12, 12, 0.281);
                    }
                `}
            >
                <Container maxWidth="md">
                    <Toolbar css={styles.toolbar}>
                        <Link
                            to="/products"
                            css={css`
                                color: inherit;
                                text-decoration: none;
                            `}
                        >
                            <Typography variant="h6" noWrap>
                                Sklep
                            </Typography>
                        </Link>

                        <div>
                            <Link
                                to="/basket"
                                css={css`
                                    color: inherit;
                                `}
                            >
                                <IconButton color="inherit">
                                    <Badge
                                        badgeContent={
                                            Object.keys(basket).length
                                        }
                                        color="secondary"
                                    >
                                        <ShoppingCartIcon />
                                    </Badge>
                                </IconButton>
                            </Link>
                            <Link
                                to="/login"
                                css={css`
                                    color: inherit;
                                `}
                            >
                                <IconButton color="inherit">
                                    <Badge
                                        color="primary"
                                        badgeContent=" "
                                        variant="dot"
                                        invisible={!token}
                                    >
                                        <AccountCircle />
                                    </Badge>
                                </IconButton>
                            </Link>
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
};
