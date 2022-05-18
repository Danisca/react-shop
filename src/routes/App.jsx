import React from'react';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import SendEmail from '../containers/SendEmail';
import '../styles/globals.css';

const App = ()=>{
    return(
        <Layout>
            <Login/>
            <SendEmail/>
        </Layout>
    );
}

export default App;