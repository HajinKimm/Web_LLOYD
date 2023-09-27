import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const {originalData} = useSelector(state=>state.cartR)
    const {productDetailID} = useParams()
    const currentPage = originalData.find(item=>item.idx===Number(productDetailID))
    const {desc,number,idx, title, price, discount, img,message,category, isCart, newItem} = currentPage
    return (
        <div>

            <img src={desc} alt={number} />
        </div>
    );
};

export default ProductDetail;