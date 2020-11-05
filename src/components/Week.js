import React from 'react';
import classes from '../components/Week.module.scss';
import WeekDay from './WeekDay.js';
import Slider from 'react-slick';
import "./SlickSlide.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function Week({setSelectedSol, sols}) {

  // const slidesToShow = String(sols.length);

  const settings = {
    dots: true,
    arrows: false,
    // infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          // infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          // initialSlide: 2
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (
    <div className={ classes.container }>
      <h1 className={ classes.heading }>Previous 7 days</h1>
      <div className={ classes.inner }>
          <Slider { ...settings }>
            { sols.map((sol, index) => (
              <WeekDay setSelectedSol = { setSelectedSol } index = {index} key= { index } high={ sol.maxTemp } low={ sol.minTemp } date={ sol.date } sol={ sol.sol }/>
            )) }
          </Slider>
      </div>
    </div>
  )
}

export default Week;