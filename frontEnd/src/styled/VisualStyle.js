import styled, { keyframes } from 'styled-components'

const visualTextAni = keyframes`
    0%{transform:translateX(0px); opacity: 0;}
    100%{transform:translateX(-200px); opacity:1;}
`

export const VisualWrap = styled.section`
    margin-bottom: 150px;
    .swiper-pagination{
        text-align: start;
        bottom: 35px;
        left: 260px;
        transform: translateY(-50px);
        color: #fff;
    }
    .swiper-pagination-total{
        color: #ddd;
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
        background: #ddd;
        border-radius: 50%;
        width: 70px;
        height: 70px;
        color: #000;
        transform: scale(0.3) translateY(-160px);
        z-index: 50;
        &:hover{
            background: #fff;
        }
    }
    .visualText{
        position: absolute;
        bottom: 150px;
        left: 460px;
        p{
            transform:translateX(0px); opacity: 0;
            animation: ${visualTextAni} 1s linear forwards;
            font-size: 60px;
            margin-bottom: 20px;
            line-height: 1.2;
        }
        span{
            transform:translateX(0px); opacity: 0;
            animation: ${visualTextAni} 0.7s linear forwards;
            display: block;
            animation-delay: 0.3s;
            font-size: 20px;
        }
        &.color{
            color: #fff
        }
    }

`