import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, keyframes } from "@emotion/react";
import { Button, Card, Container, Grid, Typography } from "@material-ui/core";
import { ProductType } from "../../types/models";
import { ProductIcon } from "./ProductIcon";
import { ProductDetails } from "./ProductDetails";

interface ProductsPropsType {
    products: ProductType[];
}

export const ProductsList = (props: ProductsPropsType) => {
    const [filteredProducts, setFilteredProducts] = useState<ProductType[]>(
        props.products
    );
    const flowers = props.products.filter((p) => p.category === "flowers");
    const candles = props.products.filter((p) => p.category === "candles");
    const all = props.products;

    const handleFilter = (e: React.MouseEvent, filter: ProductType[]) => {
        e.preventDefault();
        setFilteredProducts(filter);
    };
    return (
        <>
            <Card
                css={css`
                    margin-top: 100px;
                    margin-bottom: 40px;
                    padding: 15px;
                    display: flex;
                    justify-content: space-between;
                `}
            >
                <Typography variant="h4">Produkty</Typography>

                <div
                    css={css`
                        margin: auto;
                        margin-right: 0;
                    `}
                >
                    <Button onClick={(e) => handleFilter(e, all)}>
                        Wszystko
                    </Button>
                    /
                    <Button onClick={(e) => handleFilter(e, flowers)}>
                        Kwiaty
                    </Button>
                    /
                    <Button onClick={(e) => handleFilter(e, candles)}>
                        Swieczki
                    </Button>
                </div>
            </Card>
            <Grid container spacing={2}>
                {filteredProducts.map((product) => {
                    return (
                        <Grid item xs={12} sm={6} md={3} key={product.name}>
                            <Link
                                to={`/products/${product.slug}`}
                                css={css`
                                    text-decoration: none;
                                `}
                            >
                                <ProductIcon {...product} />
                            </Link>
                        </Grid>
                    );
                })}
            </Grid>
        </>
    );
};
