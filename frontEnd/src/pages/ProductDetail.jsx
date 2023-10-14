import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { AiFillHeart,AiOutlineHeart  } from 'react-icons/ai';
import { ProductDetailWrap } from '../styled/ProductDetailStyle';

const ProductDetail = () => {
    const {originalData} = useSelector(state=>state.cartR)
    const {productDetailID} = useParams()
    const currentPage = originalData.find(item=>item.idx===Number(productDetailID))
    const {desc,number,idx, title, price, discount, img,message,category, isCart, newItem,like,heart} = currentPage
    const suggestionList = originalData.filter(item=>item.category===category&&item.idx!==idx);

    const randomItem = [];
    const shuffleList = [...suggestionList];
    const shuffleArray =(array) =>{
        for (let i = 0; i <array.length; i++) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    shuffleArray(shuffleList)
    for(let i=0; i<10; i++){
        if(shuffleList[i]){
            randomItem.push(shuffleList[i])
        }
    }
    // console.log(randomItem)

    const discountPrice = price-(price*discount*0.01)
    return (
        <ProductDetailWrap>
            <div className='productDesc'>
                <div className='imgBox'>
                    <strong>Home / </strong>
                    {
                        message&&<em>{message}</em>
                    }
                    <img src={img} alt={title} />
                </div>
                <div className='suggestion'>
                    <h3>연관 추천 상품</h3>
                    <div>
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={30}
                            navigation={true}
                            modules={[ Navigation]}
                            className="itemListWrap"
                        >
                            {
                                randomItem.map(item=>
                                    <SwiperSlide key={item.idx}>
                                        <Link to={`/productDetail/${item.idx}`}>
                                            <div className='ListWrap'>
                                                { item.message&&<em>{item.message}</em> }
                                                { item.heart? <i><AiFillHeart/>AiOutlineRight</i>:<i><AiOutlineHeart/></i> }
                                                <div className='imgBox'>
                                                    <img src={item.img} alt={item.number} />
                                                </div>
                                                <div>
                                                    <h4>{item.message}{item.title}</h4>
                                                    <strong className={item.discount===0?'':'isDiscount'}>{item.price.toLocaleString()} 원</strong>
                                                    { item.discount===0||<b>{(item.price - (item.price*item.discount*0.01)).toLocaleString()} 원</b>}
                                                </div>
                                            </div>
                                        </Link> 
                                    </SwiperSlide>
                                )
                            }
                        </Swiper>
                    </div>
                </div>
                <div className="banner">
                    <img src="https://img.lloydgift.com/images/web/product/categoryBanner/202309/20230928013938994001.jpg" alt="" />
                </div>
                <img src={desc} alt={number} />
            </div>
            <div className="orderSheet">
                {newItem&&<span>NEW</span>}
                <span>BEST</span>
                <h4>{message}{title}</h4>
                <div className="price">
                    {discount===0|| <strong>{discountPrice.toLocaleString()} 원</strong>}
                    <strong className={discount===0?'':'isDiscount'}>{price.toLocaleString()} 원</strong>
                    <b>{discount}%</b>
                </div>
                <div className='point'>
                    <em>포인트<b>{Math.floor(discountPrice*0.005)}P</b></em>
                </div>
                <div className="delivery">
                    <em>배송정보</em>
                    <ul>
                        <li>
                            <strong>일반배송</strong>
                            <p>3,000원 <b>(100,000원 이상 무료배송)</b><br/>제작 기간 9-11일, 배송기간 2-3일 <b>(토,일,공휴일 제외)</b></p>
                        </li>
                        <li>
                            <strong>오늘출발</strong>
                            <p>5,000원 <b>(100,000원 이상 무료배송)</b><br/>오후 2시 이전 주문 시, 당일 출고 <b>(토,일,공휴일 제외)</b></p>
                        </li>
                    </ul>
                </div>
                <div className="guide">

                </div>
                <div className="btnWrap">
                    <button>CART</button>
                    <button>BUY</button>
                </div>
            </div>
        </ProductDetailWrap>
    );
};

export default ProductDetail;