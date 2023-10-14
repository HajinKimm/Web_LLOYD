
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const MainCon3 = () => {
    const {originalData} = useSelector(state=>state.cartR)
    return (
        <>
            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                navigation={true}
                modules={[ Navigation]}
                className="itemListWrap"
            >
                {originalData.map(item=>
                    <SwiperSlide key={item.idx}>
                        <Link to={`/productDetail/${item.idx}`}>
                            <div className='ListWrap'>
                                {
                                    item.message&&<em>{item.message}</em>
                                }
                                
                                <div className='imgBox'><img src={item.img} alt={item.number} /></div>
                                <div>
                                    {
                                        item.newItem&&<span className='new'>NEW</span>
                                    }
                                    <span>BEST</span>
                                    <h4>{item.message}{item.title}</h4>
                                    <strong className={item.discount===0?'':'isDiscount'}>{item.price.toLocaleString()} 원</strong>
                                    {
                                        item.discount===0||<b>{(item.price - (item.price*item.discount*0.01)).toLocaleString()} 원</b>
                                    }
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                    
                )}
            </Swiper>
      </>
    );
};

export default MainCon3;