import React, { useState, useContext } from "react";
import { LoginContext, sendRequest } from "../../hoc/Login/LoginProvider";
import { BasketItemType } from "../../types/models";
import { useSnackbar } from "notistack";
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Card, Typography, Button, Grid } from "@material-ui/core";

export const Basket = () => {
    const { basket, fetchData } = useContext(LoginContext);
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const handleDeleteItem = async (item: BasketItemType) => {
        try {
            await sendRequest.delete(`cart/cart_item/${item.id}`, {
                data: item,
            });
            await fetchData();
            enqueueSnackbar(`${item.product.name} usunieto z koszyka`, {
                variant: "success",
            });
        } catch (e) {
            enqueueSnackbar(e.toString(), { variant: "error" });
        }
    };

    const styles = {
        card: css`
            margin-top: 40px;
            padding: 15px;
            display: flex;
            flex-direction: column;
        `,
        item: css`
            margin: 5px;
            padding: 15px;
            background-color: white;
        `,
        name: css`
            font-size: 17px;
            font-weight: 700;
            color: #1e1e1e;
        `,
        price: css`
            color: #3a8bcd;
            font-size: 15px;
            font-weight: 700;
            text-align: end;
        `,
        buttonsContainer: css`
            display: flex;
            justify-content: flex-start;
            align-items: center;
        `,
    };

    return (
        <>
            <Card css={styles.card}>
                <Typography variant="h4">Koszyk</Typography>
            </Card>
            <Card css={styles.card}>
                {basket.map((item: BasketItemType, idx) => {
                    return (
                        <Grid
                            key={idx}
                            container
                            css={styles.item}
                            alignItems="center"
                        >
                            <Grid item css={styles.name} sm={6} xs={12}>
                                {item.product?.name}
                            </Grid>

                            <Grid
                                item
                                sm={2}
                                xs={6}
                                css={styles.buttonsContainer}
                            >
                                <div>quantity: {item.quantity}</div>
                                <button onClick={() => handleDeleteItem(item)}>
                                    del
                                </button>
                            </Grid>
                            <Grid item sm={4} xs={6} css={styles.price}>
                                {item.product.price}zl
                            </Grid>
                        </Grid>
                    );
                })}
                <div css={styles.item}>
                    <Button variant="outlined">Platnosc</Button>
                </div>
            </Card>
        </>
    );
};
