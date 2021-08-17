import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Button, Card, Grid, Typography } from "@material-ui/core";
import { ProductType } from "../../types/models";
import { ProductIcon } from "./ProductIcon";

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
    console.log(filteredProducts);
    useEffect(() => {
        setFilteredProducts(all);
    }, [props.products, all]);

    const styles = {
        card: css`
            margin-top: 40px;
            margin-bottom: 40px;
            padding: 15px;
            display: flex;
            justify-content: space-between;
        `,
    };

    return (
        <>
            <Card css={styles.card}>
                <Typography
                    variant="h4"
                    css={css`
                        margin: auto;
                        margin-left: 0;
                    `}
                >
                    Produkty
                </Typography>

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
                            <ProductIcon {...product} />
                        </Grid>
                    );
                })}
            </Grid>
        </>
    );
};
