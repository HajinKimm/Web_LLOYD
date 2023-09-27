
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const collection=[
    {id:1,img:"https://img.lloydgift.com/images/web/Display/template/202309/20230912162050264001.jpg", title:"Vermeil Collection",category:"VermeilCollection",desc:"2023 뉴 F/W 컬렉션"},
    {id:2,img:"https://img.lloydgift.com/images/web/Display/template/202307/20230727095337277001.jpg",title:"Modern British",category:"ModernBritish",desc:"더 뉴 시그니처 컬렉션"},
    {id:3,img:"https://img.lloydgift.com/images/web/Display/template/202307/20230727095344393001.jpg",title:"Shine Drop",category:"ShineDrop",desc:"영원한 아름다움을 곁에 두세요"},
    {id:4,img:"https://img.lloydgift.com/images/web/Display/template/202307/20230727095350028001.jpg",title:"Cullinan Diamond",category:"CullinanDiamond",desc:"별과 같이 빛나는 여왕의 다이아몬드"},
    {id:5,img:"https://img.lloydgift.com/images/web/Display/template/202307/20230727095319136001.jpg",title:"Endless",category:"Endless",desc:"영원한 소망을 담은 엔드리스 컬렉션"},
    {id:6,img:"https://img.lloydgift.com/images/web/Display/template/202307/20230727095325685001.jpg",title:"Everlasting",category:"Everlasting",desc:"이 사랑은 영원할 거예요"},
    {id:7,img:"https://img.lloydgift.com/images/web/Display/template/202309/20230914083845209001.jpg",title:"Awesome Square",category:"AwesomeSquare",desc:"시간을 초월한 시그니처"},
]

const MainCon1 = () => {

    return (
        <>
            <Swiper
                slidesPerView={3.5}
                spaceBetween={30}
                navigation={true}
                modules={[ Navigation]}
                className="itemListWrap"
            >
                {
                    collection.map(item=>
                        <SwiperSlide key={item.id}>
                            <Link to={`/SignatureCollection/${item.category}`}>
                                <div className='ListWrap'>
                                    <div className='imgBox'><img src={item.img} alt={item.title} /></div>
                                    <div className='title'>
                                        <h4>{item.title}</h4>
                                        <span className='slideBar'></span>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                        )
                }
            </Swiper>
      </>
    );
};

export default MainCon1;