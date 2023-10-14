import styled from "styled-components";

export const VermeilCollectionWrap = styled.div`
    .visual{
        width: 100%;
        overflow: hidden;
        img{
            vertical-align: top;
        }
    }
    .desc{
        height: 250px;
        background: #f6f6f6;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        p{
            font-weight: 600;
            em{
                font-weight: 900;
                font-size: 17px;
            }
            b{
                color: #EB6F00;
            }
        }
    }
`