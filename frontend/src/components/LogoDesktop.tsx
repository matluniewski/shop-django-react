/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React, { useState } from "react";

export const LogoDesktop = () => {
    const [position, setPosition] = useState(20);
    const moveToShop = () => {
        setPosition(-120);
    };
    const styles = {
        root: css`
            display: none;
            font-family: "Zen Tokyo Zoo", cursive;
            position: absolute;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            padding: 2%;
            top: 50%;
            left: ${position}%;

            transition: 1500ms 200ms;
            transform: translate(-20%, -50%);
            min-width: 550px;
            min-height: 550px;
            color: white;
            background: rgba(255, 255, 255, 0.1);
            border: 4px white solid;
            z-index: 20;
            font-size: 50px;
            a {
                text-decoration: none;
                color: inherit;
            }
        `,
        title: css`
            font-family: Georgia, "Times New Roman", Times, serif;
            font-size: 80px;
            margin: 30px 0 40px 0;
        `,
        link: css`
            font-family: "Zen Tokyo Zoo", cursive;
            position: relative;
            display: inline;
            /* padding: 19px 22px; */
            transition: all 0.2s ease;
            &:before {
                content: "";
                position: absolute;
                top: 7px;
                left: -10px;
                display: block;
                border-radius: 35px;
                background: rgba(63, 124, 25, 1);
                width: 65px;
                height: 70px;
                transition: all 0.3s ease;
            }
            span {
                position: relative;
                font-size: 55px;
                text-transform: uppercase;
                vertical-align: middle;
            }
            svg {
                position: relative;
                top: -7px;
                margin-left: 10px;
                fill: none;
                stroke-linecap: round;
                stroke-linejoin: round;
                stroke: white;
                stroke-width: 2;
                transform: translateX(-5px);
                transition: all 0.3s ease;
            }
            &:hover {
                &:before {
                    width: 100%;
                    background: rgba(63, 124, 25, 1);
                }
                svg {
                    transform: translateX(0);
                }
            }
            &:active {
                transform: scale(0.96);
            }
        `,
    };
    return (
        <div css={styles.root}>
            <a onClick={moveToShop} href="#" css={styles.link}>
                <span>KWIATKI</span>
                <svg width="13px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
            </a>
            <div css={styles.title}>Ola Jankowska</div>
            <a href="#" css={styles.link}>
                <span>SWIECZKI</span>
                <svg width="13px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
            </a>
        </div>
    );
};
