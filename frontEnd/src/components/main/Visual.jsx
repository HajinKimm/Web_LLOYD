import { Swiper, SwiperSlide } from "swiper/react" // basic
import { Navigation, Pagination,  Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { VisualWrap } from "../../styled/VisualStyle";

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
                    </SwiperSlide>
                <SwiperSlide><img src="./images/visual/visual2.jpg" alt="주얼리" /></SwiperSlide>
                <SwiperSlide><img src="./images/visual/visual3.jpg" alt="주얼리" /></SwiperSlide>
            </Swiper>
        </VisualWrap>
    );
};

export default Visual;