import React, { useContext } from "react";
import { LoginContext, sendRequest } from "../../hoc/Login/LoginProvider";
import { BasketItemType } from "../../types/models";
import { useSnackbar } from "notistack";
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Card, Typography, Button } from "@material-ui/core";
import { BasketItem } from "./BasketItem";

export const Basket = () => {
    const { basket, fetchData } = useContext(LoginContext);
    const { enqueueSnackbar } = useSnackbar();

    const handleDeleteItem = async (itemName: string) => {
        const item = basket.find((item) => item.product.name === itemName)!;
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

    const handleIncreaseQuantity = async (itemName: string) => {
        const item = await basket.find(
            (item) => item.product.name === itemName
        )!;
        let newQuantity = item.quantity + 1;
        console.log(newQuantity);

        try {
            await sendRequest.patch(`cart/cart_item/${item.id}`, {
                data: { ...item, quantity: newQuantity },
            });
            await fetchData();
            // enqueueSnackbar(`${item.product.name} usunieto z koszyka`, {
            //     variant: "success",
            // });
        } catch (e) {
            enqueueSnackbar(e.toString(), { variant: "error" });
        }
    };

    const totalPrice = basket.reduce(
        (sum, { product: { price }, quantity }) => sum + price * quantity,
        0
    );

    const styles = {
        card: css`
            margin-top: 40px;
            padding: 15px;
            display: flex;
            flex-direction: column;
        `,
        text: css`
            font-size: 17px;
            font-weight: 700;
            color: #1e1e1e;
        `,
        price: css`
            color: #3a8bcd;
            font-size: 20px;
            font-weight: 700;
            padding-left: 10px;
        `,
        buttonRow: css`
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
            padding: 10px;
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
                        <BasketItem
                            key={idx}
                            name={item.product.name}
                            quantity={item.quantity}
                            price={item.product.price}
                            handleDelete={handleDeleteItem}
                            increase={handleIncreaseQuantity}
                        />
                    );
                })}
                <div css={styles.buttonRow}>
                    <span css={styles.text}>Razem: </span>
                    <span css={styles.price}>{totalPrice}zl</span>
                </div>
                <div css={styles.buttonRow}>
                    <Button variant="contained" color="primary">
                        Platnosc
                    </Button>
                </div>
            </Card>
        </>
    );
};
