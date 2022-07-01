import React from 'react';
import ProductCard from '../components/ProductCard/ProductCard';

const Home = () => {
   return (
      <section className='home'>
         <div className="container">
            <div className="home__inner">
               <div className="product__list">
                  <ProductCard />
               </div>
            </div>
         </div>
      </section>
   );
};

export default Home;