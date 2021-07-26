import React, { Dispatch, SetStateAction } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { createContext } from "react";
import { FC } from "react";
import { ProductType } from "../../types/models";

type BasketItemType = {
    product: ProductType | undefined;
    id: number;
    quantity: number;
};

interface BasketContextProps {
    basket: BasketItemType[];
    fetchData: () => Promise<void>;
    // setBasket: Dispatch<SetStateAction<BasketItemType[]>>;
}

export const BasketContext = createContext<BasketContextProps>(
    null as unknown as BasketContextProps
);

export const BasketContextProvider: FC = (props) => {
    const [basket, setBasket] = useState<BasketItemType[]>([]);

    const fetchData = async () => {
        const resCart = await axios.get("http://localhost:8000/cart/cart_item");
        const resProducts = await axios.get(
            "http://localhost:8000/products/product"
        );

        setBasket(
            (
                resCart.data as (Omit<BasketItemType, "product"> & {
                    product: number;
                })[]
            ).map((cart) => {
                return {
                    ...cart,
                    product: (resProducts.data as ProductType[]).find(
                        (p) => p.id === cart.product
                    ),
                };
            })
        );
    };
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <BasketContext.Provider
            value={{
                basket: basket,
                fetchData: fetchData,
                // setBasket: setBasket,
            }}
        >
            {props.children}
        </BasketContext.Provider>
    );
};
