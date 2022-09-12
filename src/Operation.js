import React from "react";
import { useNavigate} from 'react-router-dom';
import styled from "styled-components";
import axios from "axios";

import { useContext, useState, useEffect } from "react";
import UserContext from "./contexts/userContext.js";

import { Form } from './style/Body.js';
import { Content } from './style/Login.Style.js';

export default function Operation({operator, setOperator}){
    const { config, setConfig } = useContext(UserContext);
    const navigate = useNavigate();

    const [form, setForm] = useState({
        operation: operator,
        amount: '',
        description: ''
    });

    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
        console.log(form)
    };

    useEffect(()=>{
        const userAuth = localStorage.getItem("UserAuth");
        if (Object.keys(config).length===0){
            if (!userAuth){
                navigate('/login');
            }else{
                setConfig({headers:{Authorization: `Bearer ${userAuth}`}});
            };
        };
    },[]);

    function sendOperation(e){
        e.preventDefault();
        console.log(form, config)
        const addtransactions = axios.post('http://localhost:5001/operation', form, config);
        addtransactions.then((element)=>{
            navigate('/');

        });
        addtransactions.catch((error)=>{
            console.log(error);
            navigate('/');
        
        });
    };

    return(
        <Content>
            <Top>
            {(operator==='out')?(<h1>Nova Saída</h1>):<h1>Nova Entrada</h1>}
            </Top>
                <Form onSubmit={sendOperation}>
                <input type='number' name='amount' onChange={handleForm} placeholder="Valor" required></input>
                <input type='text' name='description' onChange={handleForm} placeholder="Descrição" minLength="5" required></input>
                <button type="submit">{(operator==='out')?('Registrar Saída'):'Registrar Entrada'}</button>
            </Form>
        </Content>
    );
};

const Top = styled.div`
    margin: 30px auto auto 40px;
    display: flex;
    justify-content:left;
    font-size: 26px;
    font-weight: 900;

`;