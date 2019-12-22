import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './style.css';

import {
    slide1,
    slide2,
    slide3,
    slide4,
    slide5,
    slide6,
    slide7,
} from '../../../assets/HomePage';

import Image from '../../../components/Image';
import {
    DauerhafteHaarentfernung,
    ElectricEpilation,
    LashesExtension,
    MicroBlading,
    NailDesign,
    Wimpernwelle
} from "../../index";

const images = [
    {
        image:slide1,
        id:1,
        text: 'WIMPERNVERLÄNGERUNG'
    },
    {
        image: slide2,
        id:2,
        text: 'WIMPERNLIFTING'
    },
    {
        image: slide3,
        id: 3,
        text: 'DAUERHAFTE HAARENTFERNUNG'
    },
    {
        image: slide4,
        id: 4,
        text: 'NADEL ELEKTRO  EPILATION'
    },
    {
        image: slide5,
        id: 5,
        text: 'DAUERHAFTE HAARENTFERNUNG'
    },
    {
        image: slide6,
        id: 6,
        text: 'NAGELDESIGN'
    },
    {
        image: slide7,
        id: 7,
        text: 'MICROBLADING'
    },
];
const items = images.map((item) => (
   <div key={item.id}  className='flexible vertical aCenter jCenter itemParent' >
          <Image className='carousel-item' src={item.image} />
      <div className='item-text flexible jCenter'>
          <span >{item.text}</span>
      </div>
   </div>

));
const Carousel = () => (
    <div className='AppWrapper'>
        <Slider
            settings={{
                infinite: true,
                speed: 2000,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true
            }}
        >
           <Link to='/LashesExtension'>
               <div>
                   {items[0]}
               </div>
           </Link>
           <Link to='/Wimpernwelle'>
               <div>
                   {items[1]}
               </div>
           </Link>
            <Link to='/DauerhafteHaarentfernung'>
                <div>
                    {items[2]}
                </div>
            </Link>
            <Link to='/ElectricEpilation'>
                <div>
                    {items[3]}
                </div>
            </Link>
            <Link to='/DauerhafteHaarentfernung'>
                <div>
                    {items[4]}
                </div>
            </Link>
            <Link to='/NailDesign' >
                <div>
                    {items[5]}
                </div>
            </Link>
           <Link to='/MicroBlading'>
               <div>
                   {items[6]}
               </div>
           </Link>
        </Slider>
    </div>
);

export default Carousel;


