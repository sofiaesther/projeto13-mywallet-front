import React from "react";
import { useNavigate} from 'react-router-dom';

import { useContext, useState, useEffect } from "react";
import UserContext from "./contexts/userContext.js";

import { Date, Content, Operation, InfoBox, Buttons, Top, NoTransaction, Information, Transactions} from './style/Client.Style.js';

import styled from "styled-components";
import axios from "axios";

export default function Client({username, setOperator}){
    const navigate = useNavigate();
    const { config, setConfig } = useContext(UserContext);
    const [transactions, setTransactions] = useState([]);

    useEffect(()=>{

        const userAuth = localStorage.getItem("UserAuth");
        if (Object.keys(config).length===0){
            if (!userAuth){
                navigate('/login');
            }else{
                setConfig({headers:{Authorization: `Bearer ${userAuth}`}});
            };
        };

        const loadtransactions = axios.get('http://localhost:5001/', config);
        loadtransactions.then((element)=>{
            setTransactions(element.data);

        });
        loadtransactions.catch((error)=>{
            console.log(error);
            navigate('/login');
        
        })
    },[]);


    let saldo = 0;
    if (transactions.length>0){transactions.map(t => (t.operation==='out')? saldo+=(-1* parseFloat(t.amount)) :saldo+= parseFloat(t.amount))}
    let operation = 'enter';
    if(saldo<0){
        operation = 'out';
    };
    const balance = {
        saldo: saldo,
        operation: operation
    }
    function newOperation(op){
        if(op==='out'){
            setOperator('out');
        } else if (op ==='enter'){
            setOperator('enter')
        };
        navigate('/operation');
    }
    function Logout(){
        const loadtransactions = axios.delete('http://localhost:5001/logout', config);
        loadtransactions.then((element)=>{
            localStorage.removeItem("UserAuth");
            navigate('/login');
        });
        loadtransactions.catch((error)=>{
            console.log(error);
            navigate('/login');
        
        })
    }

    return(
        <Content>
            <Top>
                <h1>Ol??, {username.name}</h1>
                <ion-icon name="exit-outline" onClick={Logout}></ion-icon>
            </Top>
            <InfoBox>

                {(transactions.length>0)? transactions.map( t => <>
                <Transactions>
                    <Date>{t.date}</Date>
                    <Information>
                        <h2>{t.description}</h2>
                        <Amount color={t.operation}>{parseFloat(t.amount).toFixed(2)}</Amount>
                    </Information>
                </Transactions>
                </>
                ): <NoTransaction>N??o h?? registros de entrada ou sa??da</NoTransaction>}
                {(transactions.length!==0)?<Saldo>
                    <h3>SALDO</h3>
                    <Amount color={balance.operation}>{balance.saldo.toFixed(2)}</Amount>
                </Saldo>:<></>}
                    
            </InfoBox>
            <Operation>
                <Buttons onClick={()=>newOperation('enter')}>
                <ion-icon name="add-circle-outline"></ion-icon>
                <p>Nova entrada</p>
                </Buttons>
                <Buttons onClick={()=>newOperation('out')}>
                <ion-icon name="remove-circle-outline"></ion-icon>
                <p>Nova sa??da</p>
                </Buttons>
            </Operation>
        </Content>
    );
};

const Amount = styled.div`
   color: ${props => (props.color==='out') ? '#C70000' : "#03AC00"};
`;
const Saldo = styled.div`
    background-color: #fff;
    color: #000;
    font-weight: 900;
    margin: auto 10px 0 10px;
    display: flex;
    justify-content: space-between;
`;