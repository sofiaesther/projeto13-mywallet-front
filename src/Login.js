import axios from "axios";
import React from "react";
import { useState } from "react";

import { useContext } from "react";
import UserContext from "./contexts/userContext.js";

import { Form, LinktoRegister } from './style/Body.js';
import { Title, Content } from './style/Login.Style.js';

import {Link, useNavigate} from 'react-router-dom';

export default function Login({username, setUsername}){
    const { config, setConfig } = useContext(UserContext);

    let navigate = useNavigate();

    const [login, setLogin] = useState({            
    email: "",
    password: ""
    });

    function handleForm(e) {
        setLogin({
            ...login,
            [e.target.name]:e.target.value
        });
    };

    function sendLogin(e){
        e.preventDefault();

        const require = axios.post('http://localhost:5001/login/',login);
        require.then((element)=> {
            const response = element.data;

            setConfig({headers:{...config, Authorization: `Bearer ${response.token}`}});
            localStorage.setItem("UserAuth", `${response.token}`);
            setUsername({...username, name:response.name});
            navigate('/');
        });
        require.catch((element)=>{
            alert(`Erro ${element}`);
        });
    };




    return(
        <Content>
            <Title>MyWallet</Title>
            <Form onSubmit={sendLogin}>
                <input type='email' name='email' onChange={handleForm} placeholder="Email" required></input>
                <input type='password' name='password' onChange={handleForm} placeholder="Senha" required></input>
                <button type="submit">Entrar</button>
            </Form>
            <Link to={'/register'}>
                <LinktoRegister>
                Primeira vez? Cadastre-se!
                </LinktoRegister>
            </Link>
        </Content>
    );
};