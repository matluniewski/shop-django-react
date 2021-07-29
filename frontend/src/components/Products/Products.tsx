import React, { useState, useEffect, FC } from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Switch, Route } from "react-router-dom";
import { ProductType } from "../../types/models";
import { ProductsList } from "./ProductsList";
import { ProductDetails } from "./ProductDetails";
import axios from "axios";

export const Products: FC = (props) => {
    const [products, setProducts] = useState<ProductType[]>([]);

    useEffect(() => {
        axios.get("http://localhost:8000/products/product").then((response) => {
            setProducts(response.data as ProductType[]);
        });
    }, []);
    return (
        <Switch>
            <Route path="/products" exact>
                <ProductsList products={products} />
            </Route>

            {products.map((product) => {
                return (
                    <Route
                        path={`/products/${product.slug}`}
                        key={product.name}
                    >
                        <ProductDetails {...product} />
                    </Route>
                );
            })}
        </Switch>
    );
};
