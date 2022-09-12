import React from 'react';

import { useState } from "react";
import UserContext from "./contexts/userContext.js";

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Login from './Login.js';
import Register from './Register.js';
import Operation from './Operation.js';
import Client from './Client.js';

import {Body} from './style/Body.js';

export default function App() {
  const [username, setUsername] = useState({name:''});
  const [operator, setOperator] = useState('');

  const [config, setConfig] = useState({});
  return (
    <>
    <BrowserRouter>
      <UserContext.Provider value={{config, setConfig}}>
        <Body>
          <Routes>
            <Route path='/' element={<Client setOperator={setOperator} username={username} />} />
            <Route path='/login' element={<Login username={username} setUsername={setUsername}/>} />
            <Route path='/register' element={<Register />} />
            <Route path='/operation' element={<Operation operator={operator} setOperator={setOperator}/>} />
          </Routes>
        </Body>
      </UserContext.Provider>
    </BrowserRouter>
    </>
  );
};
