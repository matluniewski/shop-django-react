import React from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Paper, Typography } from "@material-ui/core";
import { ProductType } from "../../types/models";

export const ProductIcon = (props: ProductType) => {
    return (
        <Paper
            css={css`
                position: relative;
                border-radius: 5px;
                border: 1px solid #d6d6d6;
                padding: 20px;

                &:hover h4 {
                    color: #3a8bcd;
                }
                &:hover img {
                    filter: brightness(110%);
                    transform: scale(1.1);
                }
            `}
        >
            <div
                css={css`
                    overflow: hidden;

                    border: 1px solid #d6d6d6;
                `}
            >
                <img
                    src={props.thumbnail}
                    alt={props.name}
                    css={css`
                        display: block;
                        width: 100%;
                        height: 100%;
                        transition: transform 1s, filter 1s ease-in-out;
                        transform-origin: center center;
                        filter: brightness(100%);
                    `}
                />
            </div>
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
