import React, { useState } from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, keyframes } from "@emotion/react";
import { Paper } from "@material-ui/core";
import { ProductType } from "../../types/models";

export const ProductIcon = (props: ProductType) => {
    const [display, setDisplay] = useState<"none" | "block">("none");
    const handleMouseEnter = (event: React.MouseEvent) => {
        setDisplay("block");
    };
    const handleMouseLeave = (event: React.MouseEvent) => {
        setDisplay("none");
    };
    return (
        <Paper
            css={css`
                position: relative;
                height: 400px;
                background: url(${props.thumbnail});
                background-repeat: no-repeat;
                background-position: center;
                background-size: 100%;
                overflow: hidden;
                transition: all 0.5s ease;

                &:hover {
                    background-size: 110%;
                }
            `}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                css={css`
                    position: absolute;
                    bottom: 0;
                    width: 100%;
                    padding: 10px;
                    background: rgba(0, 0, 0, 0.2);
                `}
            >
                <div
                    css={css`
                        display: ${display};
                        padding-bottom: 10px;
                    `}
                >
                    {props.description}
                </div>
                {props.name}
            </div>
            <div
                css={css`
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    color: red;
                    padding: 10px;
                `}
            >
                {props.price}zl
            </div>
        </Paper>
    );
};
