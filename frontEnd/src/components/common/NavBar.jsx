import React from 'react';
import { Link } from 'react-router-dom';
import { NavBarWrap } from '../../styled/HeaderStyle';

const NavBar = ({setHide}) => {
    return (
        <NavBarWrap onMouseEnter={() => {setHide(false)}} onMouseLeave={() => {setHide(true)}}  >
           <li><Link to={'/'}>SHOP</Link></li> 
           <li><Link to={'/'}>멤버쉽 10%</Link></li> 
           <li><Link to={'/'}>생일 기프트</Link></li> 
           <li><Link to={'/'}>GIA다이아몬드</Link></li> 
           <li><Link to={'/'}>로이드워치</Link></li> 
        </NavBarWrap>
    );
};

export default NavBar;