import React, { useState, useContext, FC } from "react";
import { Link } from "react-router-dom";
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
} from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import { ProductType } from "../../types/models";
import { LoginContext } from "../../hoc/Login/LoginProvider";
import { Slider } from "./Slider";
import { sendRequest } from "../../hoc/Login/LoginProvider";

export const ProductDetails: FC<ProductType> = (props: ProductType) => {
    const { fetchData } = useContext(LoginContext);
    const [quantity, setQuantity] = useState(1);
    const [openSnackbar, setOpenSnackbar] = useState(false);

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
        console.log(sendRequest.defaults.headers.common);

        try {
            await sendRequest.post("/cart/cart_item", {
                product: props.id,
                quantity: quantity,
            });
            await fetchData();
            setOpenSnackbar(true);
        } catch (e) {
            alert(e.toString());
        }
    };

    const handleClose = (
        event: React.SyntheticEvent | React.MouseEvent,
        reason?: string
    ) => {
        if (reason === "clickaway") {
            return;
        }

        setOpenSnackbar(false);
    };

    return (
        <>
            <Snackbar
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                }}
                open={openSnackbar}
                autoHideDuration={3000}
                onClose={handleClose}
                message="Dodano do koszyka"
            />
            <Card
                css={css`
                    margin-top: 40px;
                    padding: 20px;
                    border: 1px solid white;
                `}
            >
                <Grid container>
                    <Grid item md={6} sm={5} xs={12}>
                        <Slider images={[props.thumbnail, ...props.images]} />
                    </Grid>
                    <Grid item md={6} sm={7} xs={12}>
                        <div
                            css={css`
                                display: flex;
                                flex-direction: column;
                                justify-content: space-between;
                                height: 100%;
                                padding-left: 20px;
                            `}
                        >
                            <div>
                                <Typography
                                    variant="h4"
                                    css={css`
                                        font-size: 20px;
                                        font-weight: 700;
                                        margin-top: 10px;
                                    `}
                                >
                                    {props.name}
                                </Typography>
                                <Typography
                                    variant="h4"
                                    css={css`
                                        color: #3a8bcd;
                                        font-size: 17px;
                                        font-weight: 700;
                                        margin-top: 10px;
                                    `}
                                >
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
                                        css={css`
                                            background-color: #3a8bcd;
                                            outline: none;
                                            border-radius: 5px;
                                            color: #fff;
                                            font-size: 14px;
                                            transition: all 0.5s;
                                            box-shadow: none;
                                        `}
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
        </>
    );
};
