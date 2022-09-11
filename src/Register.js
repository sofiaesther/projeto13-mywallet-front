import axios from "axios";
import React from "react";
import { useState } from "react";

import { Form, LinktoRegister } from './style/Body.js';
import { Title, Content } from './style/Login.Style';

import {Link, useNavigate} from 'react-router-dom';

export default function Register(){
    let navigate = useNavigate();

    const [register, setRegister] = React.useState({  
    name:"",          
    email: "",
    password: "",
    confirmpassword: "",
    });

    function handleForm(e) {
        setRegister({
            ...register,
            [e.target.name]:e.target.value
        });
        console.log(register);
    };

    function sendRegister(e){
        e.preventDefault();
        console.log(register);
        if (register.password === register.confirmpassword){
            const require = axios.post('http://localhost:5001/register',register);
            require.then((element)=> {
                navigate('/login');
            }
            )
            require.catch((element)=>{
                alert(`Erro ${element}`);
            })
        } else{
            alert('senhas não coincidem');
        }
    };



    return(
        <Content>
            <Title>MyWallet</Title>
            <Form onSubmit={sendRegister}>
                <input type='text' name='name' onChange={handleForm} placeholder="Nome" required></input>
                <input type='email' name='email' onChange={handleForm} placeholder="Email" required></input>
                <input type='password' name='password' onChange={handleForm} placeholder="Senha" minLength="8" required></input>
                <input type='password' name='confirmpassword'onChange={handleForm} placeholder="Confirmar Senha" required></input>
                <button type="submit">Cadastrar</button>
            </Form>
            <Link to={'/login'}>
                <LinktoRegister>
                Já tem uma conta? Entre agora!
                </LinktoRegister>
            </Link>
        </Content>
    );
};