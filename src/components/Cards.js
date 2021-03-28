import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import styled from 'styled-components';

const Button = styled.div`
border: 0;
background: none;
text-transform: uppercase;
color: #4361ee;
font-weight: bold;
position: relative;
outline: none;
padding: 10px 20px;
box-sizing: border-box;
`;

function Cards() {
  return (
    <div className='cards'>
      <h1>Featuring SHARP Document Systems</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://www.cbm-wa.com/wp-content/uploads/2021/02/MX-8090N_overview.png'
              text='MX-7090N'
              label='VISIT PRODUCT'
              path='/'
            />
            <CardItem
              src='https://www.cbm-wa.com/wp-content/uploads/2021/02/MX-6071_overview.png'
              text='MX-6071'
              label='VISIT PRODUCT'
              path='/'
            />
            <CardItem
              src='https://www.cbm-wa.com/wp-content/uploads/2021/02/MX-C407P_overview.png'
              text='MX-C407P'
              label='VISIT PRODUCT'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://www.cbm-wa.com/wp-content/uploads/2021/02/MX-3051_overview.png'
              text='MX-4051'
              label='VISIT PRODUCT'
              path='/'
            />
            <CardItem
              src='https://www.cbm-wa.com/wp-content/uploads/2021/02/MX-C607P_overview.png'
              text='MX-C607P'
              label='VISIT PRODUCT'
              path='/'
            />
            <CardItem
              src='https://www.cbm-wa.com/wp-content/uploads/2019/06/MX-4070_overview.png'
              text='MX-M4070'
              label='VISIT PRODUCT'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
              <button className='button1'>View all by SHARP</button>
          </ul>
        </div>
      </div>
    </div>    
  );
}

export default Cards;