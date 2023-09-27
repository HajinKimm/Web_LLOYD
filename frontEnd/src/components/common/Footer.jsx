import React from 'react';
import { FooterWrap } from '../../styled/FooterStyle';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <FooterWrap>
            <div className='inner'>
                <div className='footerLeft'>
                    <em>매장개설상담</em>
                    <span>010-2825-0950</span>
                    <em className='marginTop'>고객센터 (A/S문의)</em>
                    <span>1600-0455</span>
                    <b className='marginTop'>상담시간 : 10:00 ~ 18:00(주말, 공휴일 휴무)</b>
                    <b>Break time : PM 12:00 ~ PM 01:00</b>
                </div>
                <div className='footerRight'>
                    <p className='terms'><Link to={'/'}>개인정보처리방침</Link><Link to={'/'}>이용약관안내</Link><Link to={'/'}>사업자정보확인</Link><Link to={'/'}>온라인 AS 접수 서비스</Link></p>
                    <p>상호 : (주)이월드 쥬얼리사업부 가산 | 대표이사 : 이수원 | 개인정보관리책임자 : 이수원</p>
                    <p>전화 : 1600-0455 | 홈페이지문의 : LLOYD_ONLINE@eland.co.kr | 마케팅 협업 문의 : Jewelry-lloyd@eland.co.kr</p>
                    <p>사업자등록번호 : 678-85-01134 | 통신판매 : 2019-서울금천-0098 | 주소 : 서울특별시 금천구 가산디지털1로 159, 4층(가산동)</p>
                    <p>호스팅 서비스 제공자 : (주)라드씨엔에스</p>
                    <div className='isms'>
                        <div>
                            <img src="https://www.lloydgift.com/static/images/icons/img-isms.png" alt="" />
                        </div>
                        <div>
                            <p>[인증범위] 이월드 쥬얼리사업부 가산 온라인 서비스 운영</p>
                            <p>[유효기간] 2021.10.20~2024.10.19</p>
                        </div>
                    </div>
                    <p>Copyright ⓒ by 로이드기프트닷컴 ALL RIGHT RESERVED.</p>
                </div>
            </div>
        </FooterWrap>
    );
};

export default Footer;