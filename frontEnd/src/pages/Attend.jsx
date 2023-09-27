import React from 'react';
import { AttendWrap } from '../styled/AttendStyle';
import { AiOutlineRight } from 'react-icons/ai';



const Attend = () => {

    return (
        <AttendWrap>
            <div className='topImg'>
                <img src="./images/attend/attend-banner.jpg" alt="" />
            </div>
            <div className="con-box box1">
                <h2>아직 LLOYD APP이 없으신가요?</h2>
                <p>로이드 공식몰 앱 다운로드하고, 출첵 이벤트에 참여하세요!</p>
                <button>지금 바로 APP 다운받기<i><AiOutlineRight/></i></button>
            </div>
            <div className="con-box box2">
                <h2>이번달 출석현황</h2>
            </div>
        </AttendWrap>
    );
};

export default Attend;