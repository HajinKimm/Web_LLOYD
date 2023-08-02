import React, { useState } from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import TopNav from './TopNav';
import NavDetail from './NavDetail';
import { HeaderWrap } from '../../styled/HeaderStyle';

const Header = () => {
    const [hide, setHide] = useState(true)
    return (
        <HeaderWrap>
            <div className="inner">
                <h1><Link to={'/'}>LLOYD</Link></h1>
                <NavBar setHide={setHide}/>
                <TopNav/>
            </div>
            <NavDetail hide={hide}/>
        </HeaderWrap>
    );
};

export default Header;