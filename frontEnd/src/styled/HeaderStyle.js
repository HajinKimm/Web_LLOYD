import styled from 'styled-components'
import { inner } from './commonstyle'



export const HeaderWrap = styled.header`
    border-bottom: 1px solid #ccc;
    z-index: 100;
    .inner{
        ${inner}
        height: 80px;
        h1{
            position: absolute;
            top:50%;
            transform: translateY(-50%);
            left: 0;
            font-weight: 700;
        }
    }
`
export const NavBarWrap = styled.ul`
    width: 925px;
    height: 80px;
    display: flex;
    align-items: center;
    position: absolute;
    top:0px;
    left:240px;
    li{
        margin-right: 100px;
        position: relative;
        &:hover::after{
            content:"";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 1px;
            background: #333;
            display: block;
        }
        &:nth-child(1){
            a{
                color: #8DAFD4;
            }
        }
    }
`

export const TopNavWrap = styled.ul`
    display: flex;
    position: absolute;
    top:50%;
    transform: translateY(-50%);
    right: 0;

    li{
        margin-left: 30px;
    }
`

export const NavDetailWrap = styled.div`
    height: 0px;
    overflow: hidden;
    position: absolute;
    top: 80px;
    display: flex;
    justify-content: center;
    width: 100%;
    transition: 0.7s;
    z-index: 100;
    background: #fff;
    border-top: 1px solid #ccc;
    &.on{
        height: 440px;
    }
    .navLeft{
        padding-top: 70px;
        display: flex;
        position: relative;
        li{
            margin-right: 52px;
            .title{
                display: block;
                margin-bottom: 10px;
                font-weight: 500;
            }
            ul{
                li{
                    margin-bottom: 5px;
                    a{
                        font-weight: 300;
                    }
                }
            }
        }
        &::after{
            content:"";
            position: absolute;
            top: 35px;
            right: 0;
            width: 1px;
            height: 265px;
            background: #ccc;
            display: block;
        }
    }
    .navRight{
        padding-top: 70px;
        padding-left: 50px;
        li{
            margin-bottom: 5px;
            a{
                color: #999;
                font-weight: 300;
            }
        }
    }
`