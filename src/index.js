import React from 'react';
import ReactDom from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '@pages/Home';
import Products from '@containers/Products';
import Login from '@containers/Login';
import SendEmail from '@containers/SendEmail';
import NotFound from '@pages/NotFound';
import '@styles/globals.css';


const mainContainer = ReactDom.createRoot(document.getElementById('app'));
mainContainer.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}>
                    <Route index element={<Products/>}/>
                    <Route path='login' element={<Login/>}/>
                    <Route path='recovery-password' element={<SendEmail/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Route>
        </Routes>
    </BrowserRouter>
);
