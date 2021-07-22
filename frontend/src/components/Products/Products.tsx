import React from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, keyframes } from "@emotion/react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { ProductType } from "../../types/models";
import { ProductsList } from "./ProductsList";
import { ProductDetails } from "./ProductDetails";
import { Container } from "@material-ui/core";

interface ProductsPropsType {
    products: ProductType[];
}

export const Products = (props: ProductsPropsType) => {
    return (
        <Container
            maxWidth="lg"
            css={css`
                position: relative;
                padding-top: 10px;
                z-index: 10;
            `}
        >
            <Switch>
                <Route path="/products" exact>
                    <ProductsList products={props.products} />
                </Route>
                {props.products.map((product) => {
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
        </Container>
    );
};
