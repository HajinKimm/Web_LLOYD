import styled, { keyframes } from "styled-components"
import { inner } from './commonstyle';

export const MainWrap = styled.main`
    .con-box{
        padding-bottom: 150px;
        h2{
            font-size: 50px;
            line-height: 1.2;
            margin-bottom: 20px;
        }
        p{
            font-size: 20px;
            margin-bottom: 20px;
            font-weight: 300;
        }
        a{
            &.button{
                display: block;
                text-align: center;
                border: 1px solid #333;
                width: 190px;
                height: 60px;
                line-height: 60px;
        }  
        }
        .text{
            padding-left: 110px;
        }
    }

    .box1{
        .itemListWrap{
            .ListWrap{
                &:hover{
                    .imgBox{
                        img{
                            transform: translateY(-500px);
                        } 
                    }
                    .title{
                        opacity: 0;
                        span::after{
                            transform: rotate(360deg);
                        }
                    }
                }
                .imgBox{
                    width: 500px;
                    height: 500px;
                    overflow: hidden;
                    img{
                        transition: all  ease 0.5s;
                        transform:translateY(0px);
                    }
                }
                .title{
                    text-align: center;
                    position: relative;
                    height: 150px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    transition: all  ease 0.5s;
                    transform: translateY(-65px);
                    opacity: 1;
                    h4{
                        font-size: 20px;
                        font-weight: 500;
                    }
                    span{
                        &::after{
                            transition: all  ease 0.5s;
                            content: "";
                            position: absolute;
                            top: 50px;
                            left:50%;
                            background-color: #333;
                            width: 1px;
                            height: 30px;
                            transform: rotate(0deg);
                        }
                        
                    }
                    p{
                        font-size: 20px;
                    }
                }
            }
        }
        .swiper-button-prev{
                color: #aaa;
                transform: scale(1.5);
                margin-left: 10px;
            }
            .swiper-button-next, .swiper-button-prev{
                transform: scale(1.5);
                color: #666;
                margin-right: 10px;
            }
    }

    .box2, .box6{
        width: 100%;
        overflow: hidden;
            img{
                width: 100%;
            }
    }

    .box3{
        .text{
            margin-bottom: 60px;
        }
        .itemListWrap{
            padding: 0px 110px;
            position: relative;
            .ListWrap{
                em{
                    width: 100px;
                    height: 30px;
                    position: absolute;
                    top: 0;
                    left: 0;
                    background: #333;
                    color: #fff;
                    text-align: center;
                    line-height: 30px;
                    z-index: 1;
                }
                .imgBox{
                    width: 300px;
                    height: 340px;
                    overflow: hidden;
                    img{
                        transition: all 1s ease;
                        width: 100%;
                        &:hover{
                            transform: scale(1.2);
                        }
                    }
                }
                span{
                    font-weight: 700;
                    padding-right: 10px;
                    display: inline-block;
                    margin-bottom: 10px;
                    font-size: 20px;
                    &.new{
                        position:relative;
                        color: #3E6857;
                        &::after{
                            content: "";
                            position: absolute;
                            top:50%;
                            transform: translateY(-40%);
                            right: 2px;
                            width: 1px;
                            height: 12px;
                            background: #999;
                        }
                    }
                    
                }
                h4{
                    width: 300px;
                    white-space: nowrap;
                    overflow: hidden;
                }
                strong{
                    &.isDiscount{
                        text-decoration: line-through;
                        color: #ccc;
                        padding-right: 10px;
                    }
                }
                
            }
            .swiper-button-prev{
                color: #aaa;
                transform: scale(1.5);
                margin-left: 10px;
            }
            .swiper-button-next, .swiper-button-prev{
                transform: scale(1.5);
                color: #666;
                margin-right: 10px;
            }
        }
    }

    .box5{
        display: flex;
        .text{
            margin-right: 50px;
        }
    }

    .box7{
            ${inner}
            text-align: center;
        h3{
            font-size: 45px;
            font-weight: 800;
            margin-bottom:70px;
        }
        ul{
            display: flex;
            justify-content: space-around;
            li{
                position: relative;
                &::after{
                    content: "";
                    display: block;
                    background: #ddd;
                    width: 2px;
                    height: 250px;
                    position: absolute;
                    top: 0;
                    right: -60px;
                }
                &:last-child{
                    a{
                        height: 280px;
                    }
                }
                
                a{
                    height: 250px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    h4{
                        font-size: 30px;
                        font-weight: 700;
                        line-height: 1.3;
                        margin-bottom: 15px;
                    }

                }
            }
        }
    }
`

export const MainCon4Wrap = styled.section`
    .box{
        position: relative;
        .mainCon4{
            position: absolute;
            top: 50%; transform: translateY(-50%);
            left: 1050px;
            p{
                margin: 40px 0px;
                font-size: 23px;
            }
        }
    }
    .swiper-button-prev{
        color: #aaa;
        transform: scale(1.5);
        margin-left: 10px;
    }
    .swiper-button-next, .swiper-button-prev{
        transform: scale(1.5);
        color: #666;
        margin-right: 10px;
    }
    .swiper-pagination-bullet{
        transform: translateX(700px) translateY(-30px);
        padding: 3px;
        background-color: transparent;
        border: 1px solid #666;
        opacity: 1;
    }
    .swiper-pagination-bullet-active{
        background-color: #666;
    }

`