import React from "react";
import { FC } from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Grid } from "@material-ui/core";
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";
import IndeterminateCheckBoxOutlinedIcon from "@material-ui/icons/IndeterminateCheckBoxOutlined";
import HighlightOffOutlinedIcon from "@material-ui/icons/HighlightOffOutlined";
import IconButton from "@material-ui/core/IconButton";

interface BasketItemType {
    price: number;
    name: string;
    quantity: number;
    handleDelete: (itemName: string) => Promise<void>;
    increase: (itemName: string) => Promise<void>;
}

export const BasketItem: FC<BasketItemType> = (props) => {
    const styles = {
        item: css`
            margin: 5px;
            padding: 15px;
            background-color: white;
        `,
        name: css`
            font-size: 20px;
            font-weight: 700;
            color: #1e1e1e;
        `,
        price: css`
            color: #3a8bcd;
            font-size: 17px;
            font-weight: 700;
            text-align: end;
        `,
        quantity: css`
            font-size: 20px;
        `,
        buttonsContainer: css`
            display: flex;
            justify-content: flex-start;
            align-items: center;
            color: #646464;
        `,
        deleteBtn: css`
            color: #d60303;
        `,
    };
    return (
        <Grid container css={styles.item} alignItems="center">
            <Grid item css={styles.name} sm={6} xs={12}>
                {props.name}
            </Grid>

            <Grid item sm={2} xs={6} css={styles.buttonsContainer}>
                <IconButton color="inherit">
                    <IndeterminateCheckBoxOutlinedIcon />
                </IconButton>
                <div css={styles.quantity}>{props.quantity}</div>
                <IconButton
                    color="inherit"
                    onClick={() => props.increase(props.name)}
                >
                    <AddBoxOutlinedIcon />
                </IconButton>
                <IconButton
                    css={styles.deleteBtn}
                    onClick={() => props.handleDelete(props.name)}
                >
                    <HighlightOffOutlinedIcon />
                </IconButton>
            </Grid>
            <Grid item sm={4} xs={6} css={styles.price}>
                {props.quantity * props.price}zl
            </Grid>
        </Grid>
    );
};
