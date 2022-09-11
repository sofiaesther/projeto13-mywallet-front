import e from "cors";
import React from "react";
import { useState } from "react";
import { Body } from './style/Body.Style.js';

export default function Login(){
    const [login, setLogin] = useState({});
    function handleForm(e) {
        setLogin({
            ...login,
            [e.target.name]:e.target.value
        })
    };

    return(
        <Body>

        </Body>
    );
};