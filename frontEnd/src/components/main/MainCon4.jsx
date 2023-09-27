import React from 'react';
import { BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import { MainCon4Wrap } from '../../styled/MainStyle';

const MainCon4 = () => {
    return (
        <MainCon4Wrap>
            <Swiper
                navigation={true}
                pagination={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className='box'>
                    <img src="./images/main/main-box-4-1.jpg" alt="주얼리" />
                    <div className="mainCon4">
                        <h2>Wedding Gift</h2>
                        <p>로이드의 웨딩 예물 상품을 만나보세요.</p>
                        <Link to={'/'} className='button'>MORE VIEW <BsArrowRight /></Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='box'>
                    <img src="./images/main/main-box-4-2.jpg" alt="주얼리" />
                    <div className="mainCon4">
                        <h2>Lab Grown Diamond</h2>
                        <p>More Perfect, New Diamond for Every Women</p>
                        <Link to={'/'} className='button'>MORE VIEW <BsArrowRight /></Link>
                    </div>
                </SwiperSlide>

            </Swiper>
        </MainCon4Wrap>
    );
};

export default MainCon4;