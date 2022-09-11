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

  const [config, setConfig] = useState({});
  return (
    <>
    <BrowserRouter>
      <UserContext.Provider value={{config, setConfig}}>
        <Body>
          <Routes>
            <Route path='/' element={<Client />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </Body>
      </UserContext.Provider>
    </BrowserRouter>
    </>
  );
};
