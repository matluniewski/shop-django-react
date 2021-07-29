import React, { useState } from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, keyframes } from "@emotion/react";
import { Button, Paper, Typography } from "@material-ui/core";
import { ProductType } from "../../types/models";

export const ProductIcon = (props: ProductType) => {
    return (
        <Paper
            css={css`
                position: relative;
                border-radius: 5px;
                border: 1px solid white;
                padding: 20px;

                &:hover h4 {
                    color: #3a8bcd;
                }
            `}
        >
            <img
                src={props.thumbnail}
                alt={props.name}
                css={css`
                    width: 100%;
                `}
            />
            <Typography
                variant="h4"
                css={css`
                    font-size: 17px;
                    font-weight: 700;
                    color: #1e1e1e;
                    margin-top: 15px;
                    transition: all 0.5s;
                `}
            >
                {props.name}
            </Typography>
            <Typography
                variant="h6"
                css={css`
                    color: #3a8bcd;
                    font-size: 15px;
                    font-weight: 700;
                    margin-bottom: 0px;
                `}
            >
                {props.price}zł
            </Typography>
        </Paper>
    );
};
