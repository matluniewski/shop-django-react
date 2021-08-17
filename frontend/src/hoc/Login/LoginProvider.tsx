import React, {
    useState,
    useEffect,
    SetStateAction,
    createContext,
    FC,
} from "react";
import axios from "axios";
import { ProductType, BasketItemType } from "../../types/models";

export const sendRequest = axios.create({
    baseURL: "http://localhost:8000",
    // withCredentials: true,
});

interface LoginContextProps {
    token: string;
    setToken: React.Dispatch<SetStateAction<string>>;
    basket: BasketItemType[];
    fetchData: () => Promise<void>;
}

export const LoginContext = createContext(null as unknown as LoginContextProps);

export const LoginProvider: FC = (props) => {
    const [token, setToken] = useState(localStorage.getItem("token") || "");
    const [basket, setBasket] = useState<BasketItemType[]>([]);

    const fetchData = async () => {
        const resCart = await sendRequest.get("/cart/cart_item");
        const resProducts = await sendRequest.get("/products/product");

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
        if (token) {
            sendRequest.defaults.headers.common[
                "Authorization"
            ] = `Token ${token}`;
        } else {
            delete sendRequest.defaults.headers.common["Authorization"];
        }
        fetchData();
    }, [token]);

    return (
        <LoginContext.Provider
            value={{
                token: token,
                setToken: setToken,
                basket: basket,
                fetchData: fetchData,
            }}
        >
            {props.children}
        </LoginContext.Provider>
    );
};
