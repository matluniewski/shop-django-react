import React, { FC } from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface SliderPropType {
    images: string[];
}

export const Slider: FC<SliderPropType> = (props) => {
    return (
        <Carousel autoPlay infiniteLoop stopOnHover showThumbs={false}>
            {props.images.map((img) => {
                return (
                    <div>
                        <img
                            src={img}
                            alt=""
                            // css={css`
                            //     max-width: 800px;
                            // `}
                        />
                    </div>
                );
            })}
        </Carousel>
    );
};
