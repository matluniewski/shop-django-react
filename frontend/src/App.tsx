import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, keyframes } from "@emotion/react";
import axios from "axios";
import { STRIPE_API_KEY } from "./importantData";
import { HeaderAnimation } from "./components/HeaderAnimation";
import { LogoDesktop } from "./components/LogoDesktop";
import { BlogPostType, ProductType } from "./types/models";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js/pure";
import { CheckoutForm } from "./components/CheckoutForm";
import { Products } from "./components/Products/Products";
import { Basket } from "./hoc/Basket/Basket";
import { AppHeaderBar } from "./components/AppHeaderBar";

const gradient = keyframes`0% {
    background-position: 0% 50%;
}
50% {
    background-position: 100% 50%;
}
100% {
    background-position: 0% 50%;
}`;

const stripePromise = loadStripe(STRIPE_API_KEY);

function App() {
    const styles = {
        root: css`
            /* position: relative; */
            min-height: 100vh;
            margin-top: auto;
            background: linear-gradient(
                -45deg,
                #e6b3a4,
                #dda3ba,
                #acd1df,
                #acdfd3
            );
            background-size: 600% 100%;
            animation: ${gradient} 15s ease infinite;
        `,
    };

    const [posts, setPosts] = useState<BlogPostType[]>([]);
    const [products, setProducts] = useState<ProductType[]>([]);

    useEffect(() => {
        axios.get("http://localhost:8000/products/post").then((response) => {
            setPosts(response.data as BlogPostType[]);
        });
        axios.get("http://localhost:8000/products/product").then((response) => {
            setProducts(response.data as ProductType[]);
        });
    }, []);

    console.log(products);

    return (
        <Elements stripe={stripePromise}>
            <BrowserRouter>
                <Basket>
                    <div css={styles.root}>
                        <Switch>
                            <Route path="/" exact>
                                <HeaderAnimation />
                                <LogoDesktop />
                            </Route>
                            <Route path="/products">
                                <AppHeaderBar />
                                <Products products={products} />
                            </Route>
                        </Switch>
                        {/* <CheckoutForm /> */}
                        <div
                            css={css`
                                color: white;
                                display: none;
                            `}
                        >
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Accusamus, officia possimus perspiciatis non
                            nesciunt, id, neque maxime quisquam architecto minus
                            error! Tempora amet, eos tenetur a voluptas quidem.
                            Corporis, reprehenderit! Ut soluta culpa sunt
                            repellat ullam magni quos modi, aperiam minus
                            similique consectetur deleniti fugit nulla porro
                            temporibus voluptas tempora eos placeat id maxime
                            neque ad earum amet adipisci. Laboriosam? Expedita
                            nemo non esse consequuntur, et impedit libero
                            fugiat? Unde quam, quo debitis distinctio
                            praesentium eveniet. Praesentium minima accusamus
                            quae eius, quis veritatis, repellendus
                            necessitatibus ratione eum, consequatur neque
                            voluptatem! Eos sed voluptates earum non beatae
                            necessitatibus autem voluptatum culpa nam obcaecati
                            doloribus iste eligendi possimus officia illo
                            distinctio quaerat magni perferendis, nesciunt
                            dolore reprehenderit dolores nobis amet quam!
                            Aperiam. Repudiandae amet cumque libero dolore
                            voluptas. Nemo, ea! Rerum nemo magni repudiandae,
                            esse est unde cupiditate repellat exercitationem
                            hic, fugiat nobis accusamus nam doloremque
                            dignissimos alias odio quos fugit ad. Cum omnis
                            nobis saepe dolores et veniam voluptatem non
                            accusantium expedita deleniti, quae, repudiandae
                            enim unde hic alias. Id illo quis esse fuga ullam.
                            Illum magnam ad velit tenetur beatae? Nihil a
                            doloremque dignissimos, vero repudiandae dolor
                            laborum quod voluptatibus, odit dolore ipsa
                            quibusdam veniam ducimus! Beatae quod minima
                            reprehenderit voluptate eos adipisci explicabo
                            perferendis. Harum reiciendis omnis doloremque
                            voluptates! Eaque sit nulla vero amet ratione
                            nesciunt est odit perspiciatis esse! Odio aliquid
                            voluptatibus impedit nihil quisquam doloremque fuga,
                            autem, similique fugiat expedita exercitationem
                            doloribus eum quam nulla obcaecati sed. Non natus
                            tempore, recusandae tempora aut labore enim
                            veritatis accusamus facere rem vero, voluptatibus
                            ipsam, minima temporibus? Laboriosam sapiente illo
                            cum cumque architecto. Omnis porro iure dignissimos
                            illum facere eos. Quidem cupiditate, rerum
                            perferendis incidunt eveniet ut nulla facere itaque
                            illo, suscipit nemo atque cumque doloribus labore
                            magni odit beatae impedit voluptate perspiciatis.
                            Voluptas iure, aut expedita ratione deleniti facere.
                            Velit quod quae hic ut corrupti qui et quo
                            doloremque incidunt nostrum magnam iure sequi a,
                            consectetur, ipsa tempora nam laboriosam labore
                            dolorem provident accusantium maxime. A voluptate id
                            labore. Doloremque, quaerat error quia eligendi quo
                            maiores? Beatae, quod dolor?
                        </div>
                    </div>
                </Basket>
            </BrowserRouter>
        </Elements>
    );
}

export default App;
