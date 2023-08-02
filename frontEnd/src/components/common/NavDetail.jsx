import React from 'react';
import { Link } from 'react-router-dom';
import { NavDetailWrap } from '../../styled/HeaderStyle';

const NavDetail = ({hide}) => {
    return (
        <NavDetailWrap className={hide?'':'on'}>
            <ul className='navLeft'>
                <li>
                    <Link to={''} className='title'>주얼리</Link>
                    <ul>
                        <li><Link>전체</Link></li>
                        <li><Link>목걸이</Link></li>
                        <li><Link>귀걸이</Link></li>
                        <li><Link>팔찌</Link></li>
                        <li><Link>반지</Link></li>
                        <li><Link>키즈</Link></li>
                    </ul>
                </li>
                <li>
                    <Link to={''} className='title'>L-Diamond</Link>
                    <ul>
                        <li><Link>전체</Link></li>
                        <li><Link>목걸이</Link></li>
                        <li><Link>펜던트</Link></li>
                        <li><Link>귀걸이</Link></li>
                        <li><Link>팔찌</Link></li>
                        <li><Link>반지</Link></li>
                    </ul>
                </li>
                <li>
                    <Link to={''} className='title'>커플&웨딩</Link>
                    <ul>
                        <li><Link>웨딩밴드</Link></li>
                        <li><Link>웨딩링</Link></li>
                        <li><Link>레이어드링</Link></li>
                        <li><Link>다이아몬드 세팅</Link></li>
                    </ul>
                </li>
                <li>
                    <Link to={''} className='title'>시계</Link>
                    <ul>
                        <li><Link>전체</Link></li>
                        <li><Link>여성용</Link></li>
                        <li><Link>남성용</Link></li>
                    </ul>
                </li>
                <li>
                    <Link to={''} className='title'>스마트워치</Link>
                    <ul>
                        <li><Link>워치 스트랩 [애플워치 38-41mm호환]</Link></li>
                        <li><Link>워치 스트랩 [애플워치 42-45mm호환]</Link></li>
                        <li><Link>로이드 스마트워치</Link></li>
                    </ul>
                </li>
                <li>
                    <Link to={''} className='title'>세일</Link>
                    <ul>
                        <li><Link>전체</Link></li>
                        <li><Link>주얼리</Link></li>
                        <li><Link>시계</Link></li>
                        <li><Link>워치스트랩</Link></li>
                    </ul>
                </li>
            </ul>
            <ul className='navRight'>
                <li><Link>About LLOYD</Link></li>
                <li><Link>고객센터</Link></li>
                <li><Link>이벤트</Link></li>
                <li><Link>다이아몬드 전문가 상담</Link></li>
            </ul>
        </NavDetailWrap>
    );
};

export default NavDetail;