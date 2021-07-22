/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

const animate = keyframes`
0% {
    opacity: 1;
    top: -20vh;
    transform: translateX(0px) rotate(0deg);
}
10% {
    opacity: 1;
}
100% {
    top: 120vh;
    transform: translateX(-20px) rotate(225deg);
}
`;

const BackgroundImg = styled.div`
    position: absolute;
    z-index: 1;
    width: 100%;
    min-height: 100vh;
    background-image: url("img/girl.png");
    background-repeat: no-repeat;
    background-size: 65vh;
    background-position: bottom right;
`;

const Leaves = styled.div`
    position: relative;
    z-index: 1;

    div {
        position: absolute;
        display: block;
    }

    div:nth-of-type(1) {
        left: 5%;
        animation: ${animate} 24s linear infinite;
        animation-delay: -2s;
        img {
            min-width: 160px;
            width: 20vw;
        }
    }
    div:nth-of-type(2) {
        left: 10%;
        animation: ${animate} 27s linear infinite;
        animation-delay: -5s;
        img {
            min-width: 70px;
            width: 8vw;
        }
    }
    div:nth-of-type(3) {
        left: 15%;
        animation: ${animate} 25s linear infinite;
        animation-delay: -3s;
        img {
            min-width: 80px;
            width: 7vw;
        }
    }
    div:nth-of-type(4) {
        left: 20%;
        animation: ${animate} 23s linear infinite;
        animation-delay: -1s;
        img {
            min-width: 80px;
            width: 8vw;
        }
    }
    div:nth-of-type(5) {
        left: 30%;
        animation: ${animate} 26s linear infinite;
        animation-delay: -4s;
        img {
            min-width: 150px;
            width: 15vw;
        }
    }
    div:nth-of-type(6) {
        left: 40%;
        animation: ${animate} 24s linear infinite;
        animation-delay: -6s;
        img {
            min-width: 135px;
            width: 12vw;
        }
    }
    div:nth-of-type(7) {
        left: 50%;
        animation: ${animate} 28s linear infinite;
        animation-delay: -10s;
        img {
            min-width: 80px;
            width: 10vw;
        }
    }
    div:nth-of-type(8) {
        left: 60%;
        animation: ${animate} 26s linear infinite;
        animation-delay: -8s;
        img {
            min-width: 100px;
            width: 12vw;
        }
    }
    div:nth-of-type(9) {
        left: 70%;
        animation: ${animate} 23s linear infinite;
        animation-delay: -7s;
        img {
            min-width: 120px;
            width: 15vw;
        }
    }
    div:nth-of-type(10) {
        left: 80%;
        animation: ${animate} 25s linear infinite;
        animation-delay: -9s;
        img {
            min-width: 100px;
            width: 10vw;
        }
    }
    div:nth-of-type(11) {
        left: 90%;
        animation: ${animate} 22s linear infinite normal;
        animation-delay: -11s;
        img {
            min-width: 100px;
            width: 15vw;
        }
    }
`;
// const LeavesFront = styled(Leaves)`
//     transform: scale(1.2) rotateY(180deg);
//     filter: blur(1px);
// `;
const LeavesBack = styled(Leaves)`
    position: relative;
    transform: scale(0.8) rotateY(180deg);
    filter: blur(2px);
    z-index: 0;
    div:nth-of-type(1),
    div:nth-of-type(2),
    div:nth-of-type(3),
    div:nth-of-type(4),
    div:nth-of-type(5),
    div:nth-of-type(6),
    div:nth-of-type(7),
    div:nth-of-type(8),
    div:nth-of-type(9),
    div:nth-of-type(10),
    div:nth-of-type(11) {
        animation-direction: reverse;
    }
`;
export const HeaderAnimation = (props: any) => {
    const styles = {
        root: css`
            position: absolute;
            overflow: auto;
            width: 100%;
            min-height: 100vh;
            top: 0;
            left: 0;
            margin-top: auto;

            pointer-events: none;
            overflow: hidden;
        `,
    };
    return (
        <section css={styles.root}>
            {props.children}
            <BackgroundImg />
            <Leaves>
                <div>
                    <img src="img/leaf6.png" alt="" />
                </div>
                <div>
                    <img src="img/leaf2.png" alt="" />
                </div>
                <div>
                    <img src="img/leaf3.png" alt="" />
                </div>
                <div>
                    <img src="img/leaf4.png" alt="" />
                </div>
                <div>
                    <img src="img/leaf5.png" alt="" />
                </div>
                <div>
                    <img src="img/leaf11.png" alt="" />
                </div>
                <div>
                    <img src="img/leaf7.png" alt="" />
                </div>
                <div>
                    <img src="img/leaf10.png" alt="" />
                </div>
                <div>
                    <img src="img/leaf9.png" alt="" />
                </div>
                <div>
                    <img src="img/leaf8.png" alt="" />
                </div>
                <div>
                    <img src="img/leaf1.png" alt="" />
                </div>
            </Leaves>

            <LeavesBack>
                <div>
                    <img src="img/leaf6.png" alt="" />
                </div>
                <div>
                    <img src="img/leaf2.png" alt="" />
                </div>
                <div>
                    <img src="img/leaf3.png" alt="" />
                </div>
                <div>
                    <img src="img/leaf4.png" alt="" />
                </div>
                <div>
                    <img src="img/leaf5.png" alt="" />
                </div>
                <div>
                    <img src="img/leaf11.png" alt="" />
                </div>
                <div>
                    <img src="img/leaf7.png" alt="" />
                </div>
                <div>
                    <img src="img/leaf10.png" alt="" />
                </div>
                <div>
                    <img src="img/leaf9.png" alt="" />
                </div>
                <div>
                    <img src="img/leaf8.png" alt="" />
                </div>
                <div>
                    <img src="img/leaf1.png" alt="" />
                </div>
            </LeavesBack>
        </section>
    );
};
