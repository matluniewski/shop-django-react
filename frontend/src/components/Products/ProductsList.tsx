import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, keyframes } from "@emotion/react";
import { Container, Grid } from "@material-ui/core";
import { ProductType } from "../../types/models";
import { ProductIcon } from "./ProductIcon";
import { ProductDetails } from "./ProductDetails";

interface ProductsPropsType {
    products: ProductType[];
}

export const ProductsList = (props: ProductsPropsType) => {
    return (
        <Grid container spacing={2}>
            {props.products.map((product) => {
                return (
                    <Grid item xs={12} sm={6} md={3} key={product.name}>
                        <Link to={`/products/${product.slug}`}>
                            <ProductIcon {...product} />
                        </Link>
                    </Grid>
                );
            })}
        </Grid>
    );
};
