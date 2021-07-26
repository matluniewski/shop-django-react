import { Card } from "@material-ui/core";
import React from "react";
import { useContext } from "react";
import { BasketContext } from "../../hoc/Basket/BasketContextProvider";

export const Basket = () => {
    const { basket, fetchData } = useContext(BasketContext);
    console.log(basket);
    return (
        <Card>
            {basket.map((item) => {
                if (item.product) {
                    return <div>{item.product.name}</div>;
                } else {
                    return <div>Product not found.</div>;
                }
            })}
        </Card>
    );
};
