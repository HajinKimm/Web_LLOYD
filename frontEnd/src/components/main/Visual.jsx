import { Swiper, SwiperSlide } from "swiper/react" // basic
import { Navigation, Pagination,  Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { VisualWrap } from "../../styled/VisualStyle";

const visuals=[
    
]

const Visual = () => {
    return (
        <VisualWrap>
            <Swiper
                navigation={true}
                pagination={{ type: 'fraction' }}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                loop={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="./images/visual/visual1.jpg" alt="주얼리" />
                    <div className="visualText">
                        <p>AWESOME SQUARE<br/> : SALMON</p>
                        <span>시즌한정 어썸 뉴 샐먼 컬렉션</span>
                    </div>
                    </SwiperSlide>
                <SwiperSlide>
                    <img src="./images/visual/visual2.jpg" alt="주얼리" />
                    <div className="visualText color">
                        <p>Best Selection <br/>for every woman</p>
                        <span>가장 많은 사랑을 받은 로이드 베스트 셀렉션</span>
                    </div>
                    </SwiperSlide>
                <SwiperSlide>
                    <img src="./images/visual/visual3.jpg" alt="주얼리" />
                    <div className="visualText color">
                    <p>ENDLESS LOVE</p>
                    <span>영원한 사랑을 약속하세요</span>
                    </div>
                    </SwiperSlide>
            </Swiper>
        </VisualWrap>
    );
};

export default Visual;