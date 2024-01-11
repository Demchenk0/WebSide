'use client' 
import React, {useState} from 'react'
import s from './Hero.module.scss'
import  Image from 'next/image';
import Photo from "../../img/hero.jpg"
import Left from '../../img/left.svg'
import Right from '../../img/right.svg'

const Hero = () => {
  
  const slides = [
    {
      url: '/img/1.jpg',
    },
    {
      url: '/img/2.jpg',
    },
    {
      url: '/img/3.jpg',
    },

    {
      url: '/img/4.jpg',
    },
    {
      url: '/img/5.jpg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <section className={s.section}>
    <div className={s.container}>
    {slides.map((slide, index) => (
        <Image
          key={index}
          className={s.img} 
          src={Photo}
          alt='foto'
          width={200}
          height={200}
        />
      ))}
      <Image src={Left} alt="left" onClick={prevSlide} />
      <Image src={Right} alt="right" onClick={nextSlide} />
     
    </div>
    </section>
  )
}

export default Hero

{/* <Image className={s.img}  src={Photo} alt="hero" /> */}