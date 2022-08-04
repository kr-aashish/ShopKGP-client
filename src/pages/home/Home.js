import React from 'react';
import './Home.css';
import Product from '../../components/product/Product';

function Home() {
  return (
    <div className='home'>
      
      <div className='home__container'>
        I am the home page

        <div className='home__row'>
          <Product/>
          <Product/>
        </div>

        <div className='home__row'>
          <Product/>
          <Product/>
        </div>

        <div className='home__row'>
          <Product/>
          <Product/>
          <Product/>
        </div>

        <div className='home__row'>
          <Product/>
        </div>

      </div>
    
    </div>
  ) 
}

export default Home