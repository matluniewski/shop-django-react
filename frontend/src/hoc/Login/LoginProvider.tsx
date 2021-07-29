import React, { useState, useEffect } from "react";
import axios from "axios";
export const LoginProvider = () => {
    const [token, setToken] = useState("");

    const getToken = async () => {
        const res = await fetch("http://localhost:8000/accounts/csrf/", {
            credentials: "include",
        });
        const token = res.headers.get("X-CSRFToken");
        console.log(token);
        setToken(token || "");
    };
    useEffect(() => {
        getToken();
    }, []);

    return <div></div>;
};
