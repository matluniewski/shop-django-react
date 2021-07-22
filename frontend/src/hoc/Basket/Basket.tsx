import React, { Dispatch, SetStateAction } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { createContext } from "react";
import { FC } from "react";

type BasketItemType = {
    product: number;
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

export const Basket: FC = (props) => {
    const [basket, setBasket] = useState<BasketItemType[]>([]);

    const fetchData = async () => {
        axios.get("http://localhost:8000/cart/cart_item").then((res) => {
            setBasket(res.data);
        });
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
