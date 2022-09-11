import axios from "axios";
import React from "react";
import { useState } from "react";

import { Form, LinktoRegister } from './style/Body.js';
import { Title, Content } from './style/Login.Style.js';

import {Link, useNavigate} from 'react-router-dom';

export default function Login(){
    let navigate = useNavigate();

    const [login, setLogin] = useState({            
    email: "",
    password: ""
    });

    function handleForm(e) {
        setLogin({
            ...login,
            [e.target.name]:e.target.value
        })
    };

    async function sendLogin(){
        try{
        const require = await axios.post('http://localhost:5001/login/',login);
        navigate('/');
        } catch(err){
            console.log(err);
        }
    }



    return(
        <Content>
            <Title>MyWallet</Title>
            <Form onSubmit={sendLogin}>
                <input type='email' name='email' onChange={handleForm} placeholder="Email" required></input>
                <input type='password' name='password' onChange={handleForm} placeholder="Password" required></input>
                <button type="submit">Enter</button>
            </Form>
            <Link to={'/register'}>
                <LinktoRegister>
                Primeira vez? Cadastre-se!
                </LinktoRegister>
            </Link>
        </Content>
    );
};