import styled from 'styled-components'

export const VisualWrap = styled.section`
    .swiper-pagination{
        text-align: start;
        bottom: 35px;
        left: 260px;
    }
    .swiper-button-prev, .swiper-rtl .swiper-button-next{
        position: absolute;
        top:auto;
        bottom: 15px;
        left:290px;
        
    }
    .swiper-button-next, .swiper-rtl .swiper-button-prev {
        position: absolute;
        top:auto;
        bottom: 15px;
        left: 325px;

    }
    .swiper-button-prev,
    .swiper-button-next{
        background: #eee;
        border-radius: 50%;
        width: 70px;
        height: 70px;
        color: #000;
        transform: scale(0.3);
        z-index: 50;
        &:hover{
            background: #fff;

        }
    }
`