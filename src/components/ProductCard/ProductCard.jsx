import React from 'react';

const ProductCard = () => {
   return (
      <div className="product__card">
         <a href="/">
            <img className='product__card-img' src="https://nishman.ru/wp-content/uploads/2021/01/Nishman_Hair_Shampoo_400_ml_1.png" alt="photo" />
         </a>
         <div className="product__card-title">
            <a href="/">ШАМПУНЬ ДЛЯ ВОЛОС <br /> NISHMAN KERATIN COMPLEX</a>
         </div>
         <div className="product__card-size">
            <p>400 мл / 1250 мл</p>
         </div>
         <a className='product__card-btn' href="/">подробнее</a>
      </div>
   );
};

export default ProductCard;