import styled from "styled-components";
import { inner } from "./commonstyle";

export const FooterWrap = styled.footer`
    background-color: #333;
    .inner{
        height: 465px;
        ${inner}
        color: #fff;
        padding-top:60px;
        display: flex;
        justify-content: space-between;
        .footerLeft{
            .marginTop{
                margin-top: 50px;
            }
            em{
                font-size: 20px;
                display: block;

            }
            span{
                display:block;
                font-size:40px;
                font-weight: 600;
                line-height: 1.2;
            }
            b{
                display: block;
                color: #aaa;
                line-height: 1.8;
            }
        }
        .footerRight{
            p{
                margin-bottom: 5px;
                color: #aaa;
                &.terms{
                    margin-bottom: 30px;
                }

                a{
                    color: #fff;
                    font-size: 18px;
                    padding-right: 50px;
                    &:first-child{
                        font-weight: 800;
                    }
                    &::after{
                        content:'';
                        display: inline-block;
                        background: #fff;
                        width: 1px;
                        height: 15px;
                        transform: translate(25px, 0px);
                    }
                }
            }
            .isms{
                margin-top: 15px;
                margin-bottom: 15px;
                display: flex;
                div{
                    margin-right: 30px;
                }
                /* justify-content: space-between; */
            }
        }
    }
`