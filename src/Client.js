import React from "react";

import { useContext, useState } from "react";
import UserContext from "./contexts/userContext.js";

import {Content, Operation, InfoBox, Buttons, Top} from './style/Client.Style.js';

import Verification from './VerifyLogin.js';

export default function Client(){
    Verification();

    return(
        <Content>
            <Top>
                <h1>Olá, Fulano</h1>
                <ion-icon name="exit-outline"></ion-icon>
            </Top>
            <InfoBox>.</InfoBox>
            <Operation>
                <Buttons>
                <ion-icon name="add-circle-outline"></ion-icon>
                <p>Nova entrada</p>
                </Buttons>
                <Buttons>
                <ion-icon name="remove-circle-outline"></ion-icon>
                <p>Nova saída</p>
                </Buttons>
            </Operation>
        </Content>
    )
}