import React, { useState} from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@components/Header';
import Menu from '@components/Menu';

const Home = ()=> {
    const [showMenu, setShowMenu] = useState(false);
    const [login, setLogin]= useState(false);

    function toggleMenu(e){
        showMenu === true ? setShowMenu(false) : setShowMenu(true);
    }

    function loginLogout(e){
        console.log(login);
        login === true ? setLogin(false) : setLogin(true)
    }

    return (
        <div>
            <Header clickHandle={toggleMenu}  isLogdedIn={login} />
            {showMenu === true ? <Menu hideMenu={toggleMenu} handleLogin={loginLogout}/> : null}
            <Outlet context={[login, setLogin]} />
        </div>
    );
}

export default Home;