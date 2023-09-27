import React from 'react';
import { Link } from 'react-router-dom';
import { MainWrap } from '../../styled/MainStyle';
import { BsArrowRight } from "react-icons/bs";

import MainCon1 from './MainCon1';
import MainCon3 from './MainCon3';
import MainCon4 from './MainCon4';

const MainPage = () => {
    return (
        <MainWrap>

            <div className='con-box box1'>
                <div className="text">
                    <h2>Signature Collection</h2>
                    <p>로이드 시그니처 컬렉션</p>
                </div>
                <MainCon1/>
            </div>


            <div className='con-box box2'>
                <Link to={'/'}>
                    <img src="./images/main/main-box-2.jpg" alt="" />
                </Link>
            </div>


            <div className='con-box box3'>
                <div className="text">
                    <h2>Best Seller</h2>
                    <Link to={'/'} className='button'>MORE VIEW <BsArrowRight /></Link>
                </div>
                <MainCon3/>
            </div>


            <div className='con-box box4'>
                <MainCon4/>
            </div>


            <div className='con-box box5'>
                <div className='text'>
                    <h2>Off-line <br />Store</h2>
                    <p>가까운 로이드 매장을 찾아보세요</p>
                    <Link to={'/'} className='button'>MORE VIEW <BsArrowRight /></Link>
                </div>
                <div>
                    <img src="./images/main/main-box-5.jpg" alt="" />
                </div>
            </div>

            
            <div className='con-box box6'>
                <Link to={'/attend'}>
                    <img src="./images/main/main-box-6.jpg" alt="" />
                </Link>
            </div>


            <div className='con-box box7'>
                <h3>공식몰 단독 서비스</h3>
                <ul>
                    <li>
                        <Link to={'/'}>
                            <div>
                                <img src="./images/main/bttm-online-icon01.png" alt="" />
                            </div>
                            <div>
                                <h4>로이드 신규 혜택</h4>
                                <em>로이드 공식몰 회원만의<br />특별한 혜택을 놓치지마세요</em>

                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/'}>
                            <div>
                                <img src="./images/main/bttm-online-icon03.png" alt="" />
                            </div>
                            <div>
                                <h4>오늘주문 오늘출발</h4>
                                <em>오늘 주문하고, 오늘 출발하는<br />공식몰 서비스를 경험해보세요</em>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/'}>
                            <div>
                                <img src="./images/main/bttm-online-icon02.png" alt="" />
                            </div>
                            <div>
                                <h4>선물하기</h4>
                                <em>고급 포장은 물론, 마음을 담은<br />카드까지 함께 선물하세요</em>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/'}>
                            <div>
                                <img src="./images/main/bttm-online-icon05.png" alt="" />
                            </div>
                            <div>
                                <h4>매장 상담<br />예약하기</h4>
                                <em>전문가가 고객님만을 위한<br />링스타일과 세팅을 제안해 드려요</em>
                            </div>
                        </Link>
                    </li>

                </ul>
            </div>
        </MainWrap>
    );
};

export default MainPage;