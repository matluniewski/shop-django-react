import React, { useState, useContext, FC } from "react";
import { Link } from "react-router-dom";
import { LoginContext, sendRequest } from "../../hoc/Login/LoginProvider";
import { ProductType } from "../../types/models";
import { useSnackbar } from "notistack";
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import {
    Button,
    Card,
    CardMedia,
    Grid,
    MenuItem,
    Select,
    Typography,
    Snackbar,
} from "@material-ui/core";
import { Slider } from "./Slider";

export const ProductDetails: FC<ProductType> = (props: ProductType) => {
    const { basket, fetchData } = useContext(LoginContext);
    const [quantity, setQuantity] = useState(1);
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const quantityOptions = [];
    for (let i = 1; i <= props.quantity; i++) {
        quantityOptions.push(i);
    }

    const handleQuantityChange = (
        event: React.ChangeEvent<{ value: unknown }>
    ) => {
        setQuantity(event.target.value as number);
    };

    const handleAddToBasket = async () => {
        const foundBasketItem = basket.find(
            (item) => item.product.id === props.id
        );

        try {
            if (foundBasketItem) {
                const { id: orderId, quantity: oldQuantity } = foundBasketItem;

                await sendRequest.patch(`/cart/cart_item/${orderId}`, {
                    product: props.id,
                    quantity: oldQuantity + quantity,
                });
                await fetchData();
                enqueueSnackbar(`${props.name} dodano do koszyka`, {
                    variant: "success",
                });
            } else {
                await sendRequest.post("/cart/cart_item", {
                    product: props.id,
                    quantity: quantity,
                });
                await fetchData();
                enqueueSnackbar(`${props.name} dodano do koszyka`, {
                    variant: "success",
                });
            }
        } catch (e) {
            enqueueSnackbar(e.toString(), { variant: "error" });
        }
    };

    const styles = {
        card: css`
            margin-top: 40px;
            padding: 20px;
            border: 1px solid white;
        `,
        wrap: css`
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
            padding-left: 20px;
        `,
        name: css`
            font-size: 20px;
            font-weight: 700;
            margin-top: 10px;
        `,
        price: css`
            color: #3a8bcd;
            font-size: 17px;
            font-weight: 700;
            margin-top: 10px;
        `,
        button: css`
            background-color: #3a8bcd;
            outline: none;
            border-radius: 5px;
            color: #fff;
            font-size: 14px;
            transition: all 0.5s;
            box-shadow: none;
        `,
    };

    return (
        <Card css={styles.card}>
            <Grid container>
                <Grid item md={6} sm={5} xs={12}>
                    <Slider images={[props.thumbnail, ...props.images]} />
                </Grid>
                <Grid item md={6} sm={7} xs={12}>
                    <div css={styles.wrap}>
                        <div>
                            <Typography variant="h4" css={styles.name}>
                                {props.name}
                            </Typography>
                            <Typography variant="h4" css={styles.price}>
                                {props.price}
                            </Typography>
                            <Typography
                                variant="body2"
                                css={css`
                                    margin-top: 20px;
                                    margin-bottom: 30px;
                                `}
                            >
                                {props.description}
                            </Typography>
                        </div>
                        <Grid container>
                            <Grid
                                item
                                md={2}
                                sm={2}
                                xs={12}
                                css={css`
                                    align-self: flex-start;
                                    display: flex;
                                `}
                            >
                                <Typography
                                    variant="body1"
                                    css={css`
                                        margin: auto 10px;
                                    `}
                                >
                                    Ilosc:
                                </Typography>
                                <Select
                                    value={quantity}
                                    onChange={handleQuantityChange}
                                >
                                    {quantityOptions.map((option) => {
                                        return (
                                            <MenuItem value={option}>
                                                {option}
                                            </MenuItem>
                                        );
                                    })}
                                </Select>
                            </Grid>
                            <Grid
                                item
                                md={10}
                                sm={10}
                                xs={12}
                                css={css`
                                    display: flex;
                                    justify-content: flex-end;
                                `}
                            >
                                <Button
                                    css={styles.button}
                                    onClick={handleAddToBasket}
                                >
                                    Dodaj do koszyka
                                </Button>

                                <Link
                                    to="/products"
                                    css={css`
                                        text-decoration: none;
                                    `}
                                >
                                    <Button>Wroc</Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </Card>
    );
};
