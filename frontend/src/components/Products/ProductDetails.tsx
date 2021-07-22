import React from "react";
import { Link } from "react-router-dom";
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, keyframes } from "@emotion/react";
import {
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    Container,
    Typography,
} from "@material-ui/core";
import { ProductType } from "../../types/models";
import { FC } from "react";
import axios from "axios";
import { useContext } from "react";
import { BasketContext } from "../../hoc/Basket/Basket";

export const ProductDetails: FC<ProductType> = (props) => {
    const { fetchData } = useContext(BasketContext);

    const handleAddToBasket = () => {
        axios
            .post("http://localhost:8000/cart/cart_item", {
                product: 1,
                id: 2,
                quantity: 1,
            })
            .then(fetchData)
            .catch((e) => alert(e.toString()));
    };

    return (
        <Card
            css={css`
                display: flex;
            `}
        >
            <CardMedia
                component="img"
                image={props.thumbnail}
                css={css`
                    height: 70vh;
                    width: 400px;
                    /* background-size: cover; */
                `}
            />
            <div>
                <CardHeader title={props.name} subheader={props.category} />
                <CardContent
                    css={css`
                        display: flex;
                        flex-direction: column;
                    `}
                >
                    <Typography variant="body2">{props.description}</Typography>
                    <button
                        css={css`
                            align-self: flex-end;
                        `}
                        onClick={handleAddToBasket}
                    >
                        Dodaj do koszyka
                    </button>
                    <Link
                        to="/products"
                        css={css`
                            align-self: flex-end;
                        `}
                    >
                        Wroc
                    </Link>
                </CardContent>
            </div>
        </Card>
    );
};
