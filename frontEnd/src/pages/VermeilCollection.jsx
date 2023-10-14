import React from 'react';
import { VermeilCollectionWrap } from '../styled/CollectionStyle';

const VermeilCollection = () => {
    return (
        <VermeilCollectionWrap>
            <div className='visual'><img src="http://image.elandgift.com/images/deploy_img/special/lloyd/202309/PC_kv.png" alt="" /></div>
            <div className='desc'><p><em>23 FW 버메일 컬렉션</em>은 <br/><b>더욱 대담하고 트렌디해진 주얼리 스타일링 방법</b>을 제안합니다. <br/>옐로우 골드 버메일과 스털링 실버 그리고 컬러 코드의 내추럴한 믹스 매치까지 <br/>활용도 높은 이번 시즌 아이템을 확인하세요. </p></div>
            <section className='look1'>
                <div className="look1left">
                    <img src="http://image.elandgift.com/images/deploy_img/special/lloyd/202309/PC_publish01.png" alt="" />
                    <img src="https://img.lloydgift.com/images/web/Banner/planBanner/202308/20230810143025176001.png" alt="" />
                </div>
                <div className="look1right">
                    
                </div>
            </section>
        </VermeilCollectionWrap>
    );
};

export default VermeilCollection;