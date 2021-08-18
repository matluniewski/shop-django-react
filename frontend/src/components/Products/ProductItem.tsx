import React, { useState } from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Link } from "react-router-dom";
import { ProductType } from "../../types/models";

import { Paper, Typography } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

export const ProductItem = (props: ProductType) => {
    const [loaded, setLoaded] = useState(false);

    const handleImgLoad = () => {
        setLoaded(true);
    };

    const styles = {
        paper: css`
            position: relative;
            border-radius: 5px;
            border: 1px solid #d6d6d6;
            padding: 20px;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            &:hover h4 {
                color: #3a8bcd;
            }
            &:hover img {
                filter: brightness(110%);
                transform: scale(1.1);
            }
        `,
        image: css`
            display: block;
            width: 100%;
            height: 100%;
            transition: transform 1s, filter 1s ease-in-out;
            transform-origin: center center;
            filter: brightness(100%);
        `,
        name: css`
            font-size: 17px;
            font-weight: 700;
            color: #1e1e1e;
            margin-top: 15px;
            transition: all 0.5s;
        `,
        price: css`
            color: #3a8bcd;
            font-size: 15px;
            font-weight: 700;
            margin-bottom: 0px;
        `,
    };

    return (
        <Link
            to={`/products/${props.slug}`}
            css={css`
                text-decoration: none;
            `}
        >
            <Paper css={styles.paper}>
                <div
                    css={css`
                        overflow: hidden;
                        border: 1px solid #d6d6d6;
                    `}
                >
                    {loaded ? (
                        <img
                            src={props.thumbnail}
                            alt={props.name}
                            loading="lazy"
                            css={styles.image}
                            onLoad={handleImgLoad}
                        />
                    ) : (
                        <Skeleton variant="rect" width="100%" animation="wave">
                            <img
                                src={props.thumbnail}
                                alt={props.name}
                                loading="lazy"
                                css={styles.image}
                                onLoad={handleImgLoad}
                            />
                        </Skeleton>
                    )}
                </div>
                <div>
                    <Typography variant="h4" css={styles.name}>
                        {props.name}
                    </Typography>
                    <Typography variant="h6" css={styles.price}>
                        {props.price}zł
                    </Typography>
                </div>
            </Paper>
        </Link>
    );
};
