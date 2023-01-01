import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
             <CardItem 
                src  = '/images/react.jpg'
                text = 'Learn React From Scratch and become a pro developer'
                label= 'Full Stack'
                path = '/services'
            />

             <CardItem 
                src  = '/images/javascript.jpg'
                text = 'Java Script For beginners'
                label= 'Web Development'
                path = '/services'
             />

          </ul>
          <ul className='cards__items'>
            <CardItem 
                src  = '/images/html.jpg'
                text = 'HTML , CSS , JavaScript for Web Developers'
                label= 'Web Development'
                path = '/services'
            />  

            <CardItem 
                src  = '/images/digitalmarketing.jpg'
                text = 'Google Digital Marketing & E-commerce'
                label= 'Web Development'
                path = '/services'
            />

            <CardItem 
                src  = '/images/machinelearning.jpg'
                text = 'Supervised Machine Learning: Regression and Classification'
                label= 'Web Development'
                path = '/services'
            /> 
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;


{/* 

  */}
