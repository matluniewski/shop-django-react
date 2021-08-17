import { Card } from "@material-ui/core";
import React, { useState, useContext } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import { LoginContext } from "../../hoc/Login/LoginProvider";
import { sendRequest } from "../../hoc/Login/LoginProvider";
import { BasketItemType } from "../../types/models";

export const Basket = () => {
    const { basket, fetchData } = useContext(LoginContext);
    console.log(basket);
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleDeleteItem = async (item: BasketItemType) => {
        try {
            await sendRequest.delete(`cart/cart_item/${item.id}`, {
                data: item,
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
            <Card>
                Basket
                {basket.map((item: BasketItemType) => {
                    return (
                        <div>
                            <div>{item.product?.name}</div>
                            <div>quantity: {item.quantity}</div>

                            <button onClick={() => handleDeleteItem(item)}>
                                del
                            </button>
                        </div>
                    );
                })}
            </Card>
            <Snackbar
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                }}
                open={openSnackbar}
                autoHideDuration={3000}
                onClose={handleClose}
                message="Usunieto z koszyka"
            />{" "}
        </>
    );
};
