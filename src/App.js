import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Login from './Login.js';
import Register from './Register.js';
import Operation from './Operation.js';
import Client from './Client.js';

import {Body} from './style/Body.js';

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Body>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Body>
    </BrowserRouter>
    </>
  );
};
