import React from'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import SendEmail from '../containers/SendEmail';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import '@styles/globals.css';

const App = ()=>{
    return(
        <Layout>
            <Routes>
                <Route path='/' element={<Home/>}>
                    <Route path='login' element={<Login/>}/>
                    <Route path='recovery-password' element={<SendEmail/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Route>
           </Routes>
           <Outlet/>
        </Layout>
    );
}

export default App;