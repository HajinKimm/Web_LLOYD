import React from 'react';
import { Link } from 'react-router-dom';
import { TopNavWrap } from '../../styled/HeaderStyle';

const TopNav = () => {
    return (
        <TopNavWrap>
            <li><Link to={'/'}>Search</Link></li> 
            <li><Link to={'/'}>Cart</Link></li> 
            <li><Link to={'/'}>Login</Link></li> 
        </TopNavWrap>

    );
};

export default TopNav;